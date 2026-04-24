import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowLeft, LogOut, RefreshCw, Lock, Inbox, CalendarClock, Loader2 } from "lucide-react";
import LanguageSwitcher from "@/components/site/LanguageSwitcher";
import { useI18n } from "@/lib/i18n";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const TOKEN_KEY = "stmary_admin_token";

const fmtDate = (iso) => {
  try {
    const d = new Date(iso);
    return d.toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  } catch {
    return iso;
  }
};

const AdminPage = () => {
  const { t } = useI18n();
  const [token, setToken] = useState(() => {
    try {
      return localStorage.getItem(TOKEN_KEY) || "";
    } catch {
      return "";
    }
  });
  const [password, setPassword] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);

  const [inquiries, setInquiries] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  const persistToken = (v) => {
    setToken(v);
    try {
      if (v) localStorage.setItem(TOKEN_KEY, v);
      else localStorage.removeItem(TOKEN_KEY);
    } catch {}
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!password.trim()) return;
    setLoggingIn(true);
    try {
      const res = await axios.post(`${API}/admin/login`, { password });
      persistToken(res.data.token);
      setPassword("");
      toast.success("Welcome back.");
    } catch (err) {
      toast.error(t("admin.wrongPwd"));
    } finally {
      setLoggingIn(false);
    }
  };

  const load = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    try {
      const [inqs, appts] = await Promise.all([
        axios.get(`${API}/admin/inquiries`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get(`${API}/admin/appointments`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);
      setInquiries(inqs.data || []);
      setAppointments(appts.data || []);
    } catch (err) {
      if (err.response?.status === 401) {
        toast.error("Session expired. Sign in again.");
        persistToken("");
      } else {
        toast.error("Could not load data.");
      }
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    load();
  }, [load]);

  const signOut = () => {
    persistToken("");
    setInquiries([]);
    setAppointments([]);
  };

  // -------- Not logged in --------
  if (!token) {
    return (
      <div className="min-h-screen bg-[#FAF7F5] flex flex-col">
        <header className="h-[80px] flex items-center px-6 md:px-12 border-b border-stone-200">
          <Link to="/" className="flex items-center gap-2 group" data-testid="admin-back-link">
            <ArrowLeft className="w-4 h-4 text-stone-700 group-hover:-translate-x-0.5 transition-transform" />
            <span className="font-display font-bold text-[16px] text-stone-900">
              St Mary Arts · Admin
            </span>
          </Link>
          <div className="ml-auto">
            <LanguageSwitcher />
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center px-6">
          <div className="w-full max-w-md" data-testid="admin-login">
            <div className="w-12 h-12 rounded-full bg-stone-900 text-stone-50 flex items-center justify-center mb-6">
              <Lock className="w-5 h-5" />
            </div>
            <span className="section-label">{t("admin.title")}</span>
            <h1 className="mt-4 font-display font-[800] text-[36px] md:text-[42px] leading-[1.02] tracking-tightest text-stone-900">
              {t("admin.sub")}
            </h1>

            <form onSubmit={handleLogin} className="mt-8 space-y-5">
              <div>
                <Label className="text-[11px] uppercase tracking-[0.2em] text-stone-600">
                  {t("admin.passwordLabel")}
                </Label>
                <Input
                  type="password"
                  data-testid="admin-password-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="mt-2 bg-white border-stone-200 rounded-full h-12 px-5 text-[15px]"
                  autoFocus
                />
              </div>
              <button
                type="submit"
                disabled={loggingIn}
                data-testid="admin-login-btn"
                className="inline-flex items-center justify-center gap-2 bg-stone-900 text-stone-50 rounded-full px-7 py-3.5 text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-stone-800 transition-colors disabled:opacity-60"
              >
                {loggingIn ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                {t("admin.signIn")}
              </button>
            </form>
          </div>
        </main>
        <Toaster position="top-center" />
      </div>
    );
  }

  // -------- Logged in --------
  return (
    <div className="min-h-screen bg-[#FAF7F5]">
      <header className="sticky top-0 z-40 h-[80px] flex items-center px-6 md:px-12 border-b border-stone-200 bg-[#FAF7F5]/90 backdrop-blur-xl">
        <Link to="/" className="flex items-center gap-2 group" data-testid="admin-back-link">
          <ArrowLeft className="w-4 h-4 text-stone-700 group-hover:-translate-x-0.5 transition-transform" />
          <span className="font-display font-bold text-[16px] text-stone-900">
            St Mary Arts · Admin
          </span>
        </Link>
        <div className="ml-auto flex items-center gap-3">
          <button
            onClick={load}
            disabled={loading}
            data-testid="admin-refresh-btn"
            className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-4 py-2 text-[11px] uppercase tracking-[0.2em] font-medium text-stone-800 hover:bg-stone-100 transition-colors disabled:opacity-60"
          >
            {loading ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <RefreshCw className="w-3.5 h-3.5" />
            )}
            Refresh
          </button>
          <LanguageSwitcher />
          <button
            onClick={signOut}
            data-testid="admin-signout-btn"
            className="inline-flex items-center gap-2 rounded-full bg-stone-900 text-stone-50 px-4 py-2 text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-stone-800 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            {t("admin.signOut")}
          </button>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 md:px-12 py-12">
        <div className="mb-10">
          <span className="section-label">{t("admin.title")}</span>
          <h1 className="mt-3 font-display font-[800] text-[36px] md:text-[48px] leading-[1] tracking-tightest text-stone-900">
            {t("admin.sub")}
          </h1>
        </div>

        <Tabs defaultValue="inquiries" className="w-full">
          <TabsList
            data-testid="admin-tabs"
            className="bg-stone-100 rounded-full p-1.5 h-auto border border-stone-200"
          >
            <TabsTrigger
              value="inquiries"
              data-testid="tab-inquiries"
              className="rounded-full px-5 py-2 text-[11px] uppercase tracking-[0.2em] font-medium data-[state=active]:bg-stone-900 data-[state=active]:text-stone-50"
            >
              <Inbox className="w-3.5 h-3.5 mr-2" />
              {t("admin.tabs.inquiries")}
              <span className="ml-2 text-[10px] opacity-70">
                {inquiries.length}
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="appointments"
              data-testid="tab-appointments"
              className="rounded-full px-5 py-2 text-[11px] uppercase tracking-[0.2em] font-medium data-[state=active]:bg-stone-900 data-[state=active]:text-stone-50"
            >
              <CalendarClock className="w-3.5 h-3.5 mr-2" />
              {t("admin.tabs.appointments")}
              <span className="ml-2 text-[10px] opacity-70">
                {appointments.length}
              </span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="inquiries" className="mt-8">
            {inquiries.length === 0 ? (
              <EmptyState label={t("admin.empty")} />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {inquiries.map((i) => (
                  <article
                    key={i.id}
                    data-testid={`inquiry-row-${i.id}`}
                    className="bg-white border border-stone-200 rounded-[20px] p-6 hover:shadow-[0_20px_40px_-20px_rgba(28,25,23,0.1)] transition-shadow"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-display font-bold text-stone-900 text-[18px]">
                          {i.name}
                        </p>
                        <p className="text-[12px] uppercase tracking-[0.18em] text-stone-500 mt-1">
                          {i.model}
                        </p>
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.18em] text-stone-500 text-right whitespace-nowrap">
                        {fmtDate(i.created_at)}
                      </span>
                    </div>
                    <dl className="mt-4 space-y-1.5 text-[13px]">
                      <Field label="Phone" value={i.phone} href={`tel:${i.phone}`} />
                      <Field label="Email" value={i.email || "—"} href={i.email ? `mailto:${i.email}` : null} />
                    </dl>
                    {i.message && (
                      <p className="mt-4 text-[14px] text-stone-700 leading-relaxed bg-stone-50 rounded-xl p-4 border border-stone-100">
                        {i.message}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="appointments" className="mt-8">
            {appointments.length === 0 ? (
              <EmptyState label={t("admin.empty")} />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {appointments.map((a) => (
                  <article
                    key={a.id}
                    data-testid={`appointment-row-${a.id}`}
                    className="bg-white border border-stone-200 rounded-[20px] p-6 hover:shadow-[0_20px_40px_-20px_rgba(28,25,23,0.1)] transition-shadow"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-display font-bold text-stone-900 text-[18px]">
                          {a.name}
                        </p>
                        <p className="text-[12px] uppercase tracking-[0.18em] text-stone-500 mt-1">
                          {a.purpose || "Visit"}
                        </p>
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.18em] text-stone-500 text-right whitespace-nowrap">
                        {fmtDate(a.created_at)}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-[13px] font-medium text-stone-900">
                      <CalendarClock className="w-4 h-4 text-stone-700" />
                      {a.date} · {a.slot}
                    </div>
                    <dl className="mt-4 space-y-1.5 text-[13px]">
                      <Field label="Phone" value={a.phone} href={`tel:${a.phone}`} />
                      <Field label="Email" value={a.email || "—"} href={a.email ? `mailto:${a.email}` : null} />
                    </dl>
                    {a.notes && (
                      <p className="mt-4 text-[14px] text-stone-700 leading-relaxed bg-stone-50 rounded-xl p-4 border border-stone-100">
                        {a.notes}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
      <Toaster position="top-center" />
    </div>
  );
};

const Field = ({ label, value, href }) => (
  <div className="flex items-baseline gap-3">
    <dt className="text-[11px] uppercase tracking-[0.18em] text-stone-500 w-14">
      {label}
    </dt>
    <dd className="text-stone-800 break-all">
      {href && value !== "—" ? (
        <a href={href} className="hover:underline">
          {value}
        </a>
      ) : (
        value
      )}
    </dd>
  </div>
);

const EmptyState = ({ label }) => (
  <div className="border border-dashed border-stone-300 rounded-[24px] p-16 text-center bg-white/50">
    <p className="text-stone-500 text-[14px]">{label}</p>
  </div>
);

export default AdminPage;
