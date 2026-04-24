from fastapi import FastAPI, APIRouter, HTTPException, Header, BackgroundTasks, Depends
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

import resend


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend
RESEND_API_KEY = os.environ.get('RESEND_API_KEY', '').strip()
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
NOTIFICATION_EMAIL = os.environ.get('NOTIFICATION_EMAIL', '').strip()
if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY

# Admin password
ADMIN_PASSWORD = os.environ.get('ADMIN_PASSWORD', '').strip()

app = FastAPI(title="St Mary Arts API")
api_router = APIRouter(prefix="/api")
logger = logging.getLogger(__name__)


# ---------- Admin auth dependency ----------
def require_admin(authorization: Optional[str] = Header(default=None)):
    if not ADMIN_PASSWORD:
        raise HTTPException(status_code=500, detail="Admin password not configured")
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Missing admin token")
    token = authorization.split(" ", 1)[1].strip()
    if token != ADMIN_PASSWORD:
        raise HTTPException(status_code=401, detail="Invalid admin token")
    return True


# ---------- Email helper ----------
async def send_notification_email(subject: str, html: str):
    if not RESEND_API_KEY or not NOTIFICATION_EMAIL:
        logger.info("Email notification skipped (RESEND_API_KEY or NOTIFICATION_EMAIL missing)")
        return
    try:
        params = {
            "from": SENDER_EMAIL,
            "to": [NOTIFICATION_EMAIL],
            "subject": subject,
            "html": html,
        }
        result = await asyncio.to_thread(resend.Emails.send, params)
        logger.info(f"Resend email sent id={result.get('id') if isinstance(result, dict) else result}")
    except Exception as e:
        logger.exception(f"Resend email failed: {e}")


def render_inquiry_email(inq: dict) -> str:
    return f"""
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#faf7f5;padding:32px 0;font-family:Arial,sans-serif;color:#1c1917;">
      <tr><td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#fff;border:1px solid #e7e5e4;border-radius:20px;padding:32px;">
          <tr><td>
            <p style="margin:0 0 8px 0;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#78716c;">New Inquiry · St Mary Arts</p>
            <h1 style="margin:0 0 16px 0;font-size:24px;font-weight:700;color:#1c1917;">{inq.get('name', '')}</h1>
            <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;">
              <tr><td style="padding:6px 0;color:#57534e;width:120px;">Phone</td><td style="padding:6px 0;">{inq.get('phone', '')}</td></tr>
              <tr><td style="padding:6px 0;color:#57534e;">Email</td><td style="padding:6px 0;">{inq.get('email') or '—'}</td></tr>
              <tr><td style="padding:6px 0;color:#57534e;">Model</td><td style="padding:6px 0;">{inq.get('model', '')}</td></tr>
              <tr><td style="padding:6px 0;color:#57534e;vertical-align:top;">Message</td><td style="padding:6px 0;">{(inq.get('message') or '—')}</td></tr>
            </table>
          </td></tr>
        </table>
      </td></tr>
    </table>
    """


def render_appointment_email(appt: dict) -> str:
    return f"""
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#faf7f5;padding:32px 0;font-family:Arial,sans-serif;color:#1c1917;">
      <tr><td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#fff;border:1px solid #e7e5e4;border-radius:20px;padding:32px;">
          <tr><td>
            <p style="margin:0 0 8px 0;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#78716c;">New Appointment · St Mary Arts</p>
            <h1 style="margin:0 0 16px 0;font-size:24px;font-weight:700;color:#1c1917;">{appt.get('name', '')}</h1>
            <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;">
              <tr><td style="padding:6px 0;color:#57534e;width:120px;">Date</td><td style="padding:6px 0;">{appt.get('date', '')}</td></tr>
              <tr><td style="padding:6px 0;color:#57534e;">Time slot</td><td style="padding:6px 0;">{appt.get('slot', '')}</td></tr>
              <tr><td style="padding:6px 0;color:#57534e;">Phone</td><td style="padding:6px 0;">{appt.get('phone', '')}</td></tr>
              <tr><td style="padding:6px 0;color:#57534e;">Email</td><td style="padding:6px 0;">{appt.get('email') or '—'}</td></tr>
              <tr><td style="padding:6px 0;color:#57534e;">Purpose</td><td style="padding:6px 0;">{appt.get('purpose') or '—'}</td></tr>
              <tr><td style="padding:6px 0;color:#57534e;vertical-align:top;">Notes</td><td style="padding:6px 0;">{(appt.get('notes') or '—')}</td></tr>
            </table>
          </td></tr>
        </table>
      </td></tr>
    </table>
    """


# ---------- Status (kept) ----------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


# ---------- Inquiry ----------
class InquiryCreate(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    phone: str = Field(min_length=4, max_length=30)
    email: Optional[EmailStr] = None
    model: str = Field(default="Brass")
    message: Optional[str] = Field(default="", max_length=2000)


class Inquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    email: Optional[str] = None
    model: str
    message: Optional[str] = ""
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ---------- Appointment ----------
class AppointmentCreate(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    phone: str = Field(min_length=4, max_length=30)
    email: Optional[EmailStr] = None
    date: str = Field(min_length=10, max_length=10)  # YYYY-MM-DD
    slot: str = Field(min_length=1, max_length=20)   # e.g., "10:00 AM"
    purpose: Optional[str] = Field(default="", max_length=120)
    notes: Optional[str] = Field(default="", max_length=2000)


class Appointment(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    email: Optional[str] = None
    date: str
    slot: str
    purpose: Optional[str] = ""
    notes: Optional[str] = ""
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "St Mary Arts API", "status": "ok"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(payload: StatusCheckCreate):
    obj = StatusCheck(**payload.model_dump())
    doc = obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    rows = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for r in rows:
        if isinstance(r.get('timestamp'), str):
            r['timestamp'] = datetime.fromisoformat(r['timestamp'])
    return rows


@api_router.post("/inquiries", response_model=Inquiry)
async def create_inquiry(payload: InquiryCreate, background: BackgroundTasks):
    obj = Inquiry(**payload.model_dump())
    doc = obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.inquiries.insert_one(doc)
    background.add_task(
        send_notification_email,
        subject=f"New inquiry · {obj.name} · {obj.model}",
        html=render_inquiry_email(doc),
    )
    return obj


@api_router.get("/inquiries", response_model=List[Inquiry])
async def list_inquiries():
    rows = await db.inquiries.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for r in rows:
        if isinstance(r.get('created_at'), str):
            r['created_at'] = datetime.fromisoformat(r['created_at'])
    return rows


@api_router.post("/appointments", response_model=Appointment)
async def create_appointment(payload: AppointmentCreate, background: BackgroundTasks):
    obj = Appointment(**payload.model_dump())
    doc = obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.appointments.insert_one(doc)
    background.add_task(
        send_notification_email,
        subject=f"New appointment · {obj.name} · {obj.date} {obj.slot}",
        html=render_appointment_email(doc),
    )
    return obj


@api_router.get("/appointments", response_model=List[Appointment])
async def list_appointments():
    rows = await db.appointments.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for r in rows:
        if isinstance(r.get('created_at'), str):
            r['created_at'] = datetime.fromisoformat(r['created_at'])
    return rows


# ---------- Admin ----------
class AdminLogin(BaseModel):
    password: str


@api_router.post("/admin/login")
async def admin_login(payload: AdminLogin):
    if not ADMIN_PASSWORD:
        raise HTTPException(status_code=500, detail="Admin password not configured")
    if payload.password != ADMIN_PASSWORD:
        raise HTTPException(status_code=401, detail="Invalid password")
    # Return the password itself as the bearer token (simple shared-secret scheme).
    return {"token": ADMIN_PASSWORD}


@api_router.get("/admin/inquiries", response_model=List[Inquiry], dependencies=[Depends(require_admin)])
async def admin_list_inquiries():
    rows = await db.inquiries.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    for r in rows:
        if isinstance(r.get('created_at'), str):
            r['created_at'] = datetime.fromisoformat(r['created_at'])
    return rows


@api_router.get("/admin/appointments", response_model=List[Appointment], dependencies=[Depends(require_admin)])
async def admin_list_appointments():
    rows = await db.appointments.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    for r in rows:
        if isinstance(r.get('created_at'), str):
            r['created_at'] = datetime.fromisoformat(r['created_at'])
    return rows


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
