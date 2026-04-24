"""Backend tests for St Mary Arts API - health, inquiries, appointments, and admin auth."""
import os
import time
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/")
if not BASE_URL:
    from pathlib import Path
    env = Path("/app/frontend/.env").read_text()
    for line in env.splitlines():
        if line.startswith("REACT_APP_BACKEND_URL="):
            BASE_URL = line.split("=", 1)[1].strip().rstrip("/")
            break

API = f"{BASE_URL}/api"
ADMIN_PASSWORD = "Admin@123"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ----- Health -----
class TestRoot:
    def test_root_ok(self, client):
        r = client.get(f"{API}/")
        assert r.status_code == 200, r.text
        data = r.json()
        assert data.get("status") == "ok"
        assert "message" in data


# ----- Inquiry CRUD -----
class TestInquiries:
    created_id = None

    def test_create_inquiry_valid(self, client):
        payload = {
            "name": "TEST_Anthony",
            "phone": "+91 9999000011",
            "email": "test_anthony@example.com",
            "model": "Heritage Brass",
            "message": "Need a brass plate for main door.",
        }
        r = client.post(f"{API}/inquiries", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "created_at" in data
        assert data["name"] == payload["name"]
        assert data["phone"] == payload["phone"]
        assert data["model"] == payload["model"]
        assert "_id" not in data
        TestInquiries.created_id = data["id"]

    def test_create_missing_name(self, client):
        r = client.post(f"{API}/inquiries", json={"phone": "+91 9999000011"})
        assert r.status_code == 422

    def test_create_missing_phone(self, client):
        r = client.post(f"{API}/inquiries", json={"name": "TEST_X"})
        assert r.status_code == 422

    def test_create_invalid_email(self, client):
        payload = {
            "name": "TEST_BadEmail",
            "phone": "+91 8888000011",
            "email": "not-an-email",
            "model": "Brass",
        }
        r = client.post(f"{API}/inquiries", json=payload)
        assert r.status_code == 422

    def test_list_inquiries_contains_created(self, client):
        r = client.get(f"{API}/inquiries")
        assert r.status_code == 200, r.text
        data = r.json()
        assert isinstance(data, list)
        for row in data:
            assert "_id" not in row
            assert "id" in row
        ids = [row["id"] for row in data]
        if TestInquiries.created_id is not None:
            assert TestInquiries.created_id in ids

    def test_list_sorted_desc(self, client):
        a = client.post(f"{API}/inquiries", json={
            "name": "TEST_A", "phone": "+91 1", "model": "Brass"
        }).json()
        time.sleep(0.05)
        b = client.post(f"{API}/inquiries", json={
            "name": "TEST_B", "phone": "+91 2", "model": "Brass"
        }).json()
        rows = client.get(f"{API}/inquiries").json()
        ids = [r["id"] for r in rows]
        assert ids.index(b["id"]) < ids.index(a["id"])


# ----- Appointments CRUD -----
class TestAppointments:
    created_id = None

    def test_create_appointment_valid(self, client):
        payload = {
            "name": "TEST_Appt_Raj",
            "phone": "+91 9000012345",
            "email": "test_raj@example.com",
            "date": "2026-06-05",
            "slot": "11:00 AM",
            "purpose": "Design consultation",
            "notes": "Test",
        }
        r = client.post(f"{API}/appointments", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["date"] == payload["date"]
        assert data["slot"] == payload["slot"]
        assert data["purpose"] == payload["purpose"]
        assert data["notes"] == payload["notes"]
        assert "id" in data and len(data["id"]) > 0
        assert "created_at" in data
        assert "_id" not in data
        TestAppointments.created_id = data["id"]

    def test_create_appt_missing_name(self, client):
        r = client.post(f"{API}/appointments", json={
            "phone": "+91 9000012345", "date": "2026-06-05", "slot": "11:00 AM"
        })
        assert r.status_code == 422

    def test_create_appt_missing_phone(self, client):
        r = client.post(f"{API}/appointments", json={
            "name": "TEST_x", "date": "2026-06-05", "slot": "11:00 AM"
        })
        assert r.status_code == 422

    def test_create_appt_missing_date(self, client):
        r = client.post(f"{API}/appointments", json={
            "name": "TEST_x", "phone": "+91 1", "slot": "11:00 AM"
        })
        assert r.status_code == 422

    def test_create_appt_missing_slot(self, client):
        r = client.post(f"{API}/appointments", json={
            "name": "TEST_x", "phone": "+91 1", "date": "2026-06-05"
        })
        assert r.status_code == 422

    def test_list_appointments_contains_created_no_objectid(self, client):
        r = client.get(f"{API}/appointments")
        assert r.status_code == 200, r.text
        data = r.json()
        assert isinstance(data, list)
        for row in data:
            assert "_id" not in row
            assert "id" in row
        ids = [row["id"] for row in data]
        if TestAppointments.created_id is not None:
            assert TestAppointments.created_id in ids

    def test_list_appointments_sorted_desc(self, client):
        a = client.post(f"{API}/appointments", json={
            "name": "TEST_SortA", "phone": "+91 1", "date": "2026-07-01", "slot": "10:00 AM"
        }).json()
        time.sleep(0.05)
        b = client.post(f"{API}/appointments", json={
            "name": "TEST_SortB", "phone": "+91 2", "date": "2026-07-01", "slot": "10:00 AM"
        }).json()
        rows = client.get(f"{API}/appointments").json()
        ids = [r["id"] for r in rows]
        assert ids.index(b["id"]) < ids.index(a["id"])


# ----- Admin Auth -----
class TestAdminAuth:
    def test_admin_login_success(self, client):
        r = client.post(f"{API}/admin/login", json={"password": ADMIN_PASSWORD})
        assert r.status_code == 200, r.text
        data = r.json()
        assert data.get("token") == ADMIN_PASSWORD

    def test_admin_login_wrong_password(self, client):
        r = client.post(f"{API}/admin/login", json={"password": "wrong-pwd"})
        assert r.status_code == 401

    def test_admin_inquiries_without_auth(self, client):
        r = requests.get(f"{API}/admin/inquiries")
        assert r.status_code == 401

    def test_admin_inquiries_wrong_token(self, client):
        r = requests.get(f"{API}/admin/inquiries", headers={"Authorization": "Bearer wrong"})
        assert r.status_code == 401

    def test_admin_inquiries_with_auth(self, client):
        r = requests.get(f"{API}/admin/inquiries", headers={"Authorization": f"Bearer {ADMIN_PASSWORD}"})
        assert r.status_code == 200, r.text
        data = r.json()
        assert isinstance(data, list)
        for row in data:
            assert "_id" not in row
            assert "id" in row

    def test_admin_appointments_without_auth(self, client):
        r = requests.get(f"{API}/admin/appointments")
        assert r.status_code == 401

    def test_admin_appointments_wrong_token(self, client):
        r = requests.get(f"{API}/admin/appointments", headers={"Authorization": "Bearer wrong"})
        assert r.status_code == 401

    def test_admin_appointments_with_auth(self, client):
        r = requests.get(f"{API}/admin/appointments", headers={"Authorization": f"Bearer {ADMIN_PASSWORD}"})
        assert r.status_code == 200, r.text
        data = r.json()
        assert isinstance(data, list)
        for row in data:
            assert "_id" not in row
            assert "id" in row
