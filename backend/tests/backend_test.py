"""Backend tests for St Mary Arts API - inquiries & health endpoints."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/")
if not BASE_URL:
    # Fall back to frontend env file
    from pathlib import Path
    env = Path("/app/frontend/.env").read_text()
    for line in env.splitlines():
        if line.startswith("REACT_APP_BACKEND_URL="):
            BASE_URL = line.split("=", 1)[1].strip().rstrip("/")
            break

API = f"{BASE_URL}/api"


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
        # Create two inquiries and ensure order
        import time
        a = client.post(f"{API}/inquiries", json={
            "name": "TEST_A", "phone": "+91 1", "model": "Brass"
        }).json()
        time.sleep(0.05)
        b = client.post(f"{API}/inquiries", json={
            "name": "TEST_B", "phone": "+91 2", "model": "Brass"
        }).json()
        rows = client.get(f"{API}/inquiries").json()
        ids = [r["id"] for r in rows]
        # b was created after a -> b should appear before a
        assert ids.index(b["id"]) < ids.index(a["id"])
