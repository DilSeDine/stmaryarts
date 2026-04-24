import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Loader2, Check, CalendarDays } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const SLOTS = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
];

function nextValidDate() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  // skip Sunday (0)
  while (d.getDay() === 0) d.setDate(d.getDate() + 1);
  return d.toISOString().slice(0, 10);
}

const todayISO = () => new Date().toISOString().slice(0, 10);
const maxISO = () => {
  const d = new Date();
  d.setDate(d.getDate() + 60);
  return d.toISOString().slice(0, 10);
};

const AppointmentDialog = ({ open, onOpenChange }) => {
  const { t } = useI18n();
  const purposes = [
    { id: "consult", label: t("appointment.purposes.consult") },
    { id: "samples", label: t("appointment.purposes.samples") },
    { id: "pickup", label: t("appointment.purposes.pickup") },
    { id: "other", label: t("appointment.purposes.other") },
  ];

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: nextValidDate(),
    slot: "11:00 AM",
    purpose: "consult",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setSuccess(false);
        setForm({
          name: "",
          phone: "",
          email: "",
          date: nextValidDate(),
          slot: "11:00 AM",
          purpose: "consult",
          notes: "",
        });
      }, 200);
    }
  }, [open]);

  const update = (k, v) => setForm((s) => ({ ...s, [k]: v }));

  const isSunday = useMemo(() => {
    if (!form.date) return false;
    const d = new Date(form.date + "T00:00:00");
    return d.getDay() === 0;
  }, [form.date]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.date || !form.slot) {
      toast.error(t("appointment.errRequired"));
      return;
    }
    if (isSunday) {
      toast.error(t("appointment.errSundayClosed"));
      return;
    }
    setSubmitting(true);
    try {
      const purposeLabel =
        purposes.find((p) => p.id === form.purpose)?.label || form.purpose;
      await axios.post(`${API}/appointments`, {
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim() || null,
        date: form.date,
        slot: form.slot,
        purpose: purposeLabel,
        notes: form.notes.trim(),
      });
      setSuccess(true);
      toast.success(t("appointment.successH2"));
    } catch (err) {
      console.error(err);
      toast.error(t("inquiry.errGeneric"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        data-testid="appointment-dialog"
        className="sm:max-w-[580px] bg-[#FAF7F5] border-stone-200 rounded-[24px] p-0 overflow-hidden max-h-[90dvh]"
      >
        <div className="p-6 sm:p-8 md:p-10 overflow-y-auto max-h-[90dvh]">
          <DialogHeader className="text-left space-y-3">
            <span className="section-label">{t("appointment.label")}</span>
            <DialogTitle className="font-display font-[800] text-[30px] md:text-[34px] leading-[1.02] tracking-tightest text-stone-900">
              {t("appointment.h2")}
            </DialogTitle>
            <DialogDescription className="text-stone-600 text-[14px] leading-relaxed">
              {t("appointment.sub")}
            </DialogDescription>
          </DialogHeader>

          {success ? (
            <div
              data-testid="appointment-success"
              className="mt-8 flex flex-col items-center text-center py-10"
            >
              <div className="w-14 h-14 rounded-full bg-stone-900 text-stone-50 flex items-center justify-center">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="mt-5 font-display font-bold text-[22px] text-stone-900">
                {t("appointment.successH2")}
              </h3>
              <p className="mt-2 text-stone-600 text-[14px] max-w-sm">
                {t("appointment.successP")}
              </p>
              <button
                onClick={() => onOpenChange(false)}
                className="mt-8 bg-stone-900 text-stone-50 rounded-full px-6 py-3 text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-stone-800 transition-colors"
                data-testid="appointment-close-btn"
              >
                {t("inquiry.close")}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <Label className="text-[11px] uppercase tracking-[0.2em] text-stone-600">
                    {t("appointment.name")}
                  </Label>
                  <Input
                    data-testid="appt-name-input"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder={t("inquiry.namePh")}
                    className="mt-2 bg-white border-stone-200 rounded-full h-12 px-5 text-[15px]"
                  />
                </div>
                <div>
                  <Label className="text-[11px] uppercase tracking-[0.2em] text-stone-600">
                    {t("appointment.phone")}
                  </Label>
                  <Input
                    data-testid="appt-phone-input"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="+91"
                    className="mt-2 bg-white border-stone-200 rounded-full h-12 px-5 text-[15px]"
                  />
                </div>
                <div>
                  <Label className="text-[11px] uppercase tracking-[0.2em] text-stone-600">
                    {t("appointment.email")}
                  </Label>
                  <Input
                    type="email"
                    data-testid="appt-email-input"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="you@email.com"
                    className="mt-2 bg-white border-stone-200 rounded-full h-12 px-5 text-[15px]"
                  />
                </div>
                <div>
                  <Label className="text-[11px] uppercase tracking-[0.2em] text-stone-600">
                    {t("appointment.date")}
                  </Label>
                  <div className="mt-2 relative">
                    <Input
                      type="date"
                      data-testid="appt-date-input"
                      value={form.date}
                      min={todayISO()}
                      max={maxISO()}
                      onChange={(e) => update("date", e.target.value)}
                      className="bg-white border-stone-200 rounded-full h-12 px-5 text-[15px]"
                    />
                    <CalendarDays className="absolute right-5 top-3.5 w-4 h-4 text-stone-400 pointer-events-none" />
                  </div>
                  {isSunday && (
                    <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-rose-600">
                      {t("appointment.errSundayClosed")}
                    </p>
                  )}
                </div>
                <div>
                  <Label className="text-[11px] uppercase tracking-[0.2em] text-stone-600">
                    {t("appointment.slot")}
                  </Label>
                  <Select
                    value={form.slot}
                    onValueChange={(v) => update("slot", v)}
                  >
                    <SelectTrigger
                      data-testid="appt-slot-select"
                      className="mt-2 bg-white border-stone-200 rounded-full h-12 px-5 text-[15px]"
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {SLOTS.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-2">
                  <Label className="text-[11px] uppercase tracking-[0.2em] text-stone-600">
                    {t("appointment.purpose")}
                  </Label>
                  <Select
                    value={form.purpose}
                    onValueChange={(v) => update("purpose", v)}
                  >
                    <SelectTrigger
                      data-testid="appt-purpose-select"
                      className="mt-2 bg-white border-stone-200 rounded-full h-12 px-5 text-[15px]"
                    >
                      <SelectValue placeholder={t("appointment.purposePh")} />
                    </SelectTrigger>
                    <SelectContent>
                      {purposes.map((p) => (
                        <SelectItem key={p.id} value={p.id}>
                          {p.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-2">
                  <Label className="text-[11px] uppercase tracking-[0.2em] text-stone-600">
                    {t("appointment.notes")}
                  </Label>
                  <Textarea
                    data-testid="appt-notes-input"
                    value={form.notes}
                    onChange={(e) => update("notes", e.target.value)}
                    placeholder={t("appointment.notesPh")}
                    className="mt-2 bg-white border-stone-200 rounded-[20px] p-5 text-[15px] min-h-[100px]"
                  />
                </div>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={submitting || isSunday}
                  data-testid="appt-submit-btn"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-900 text-stone-50 rounded-full px-7 py-3.5 text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-stone-800 transition-colors disabled:opacity-60"
                >
                  {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                  {submitting ? t("appointment.sending") : t("appointment.submit")}
                </button>
                <span className="text-[11px] text-stone-500 uppercase tracking-[0.18em]">
                  {t("inquiry.reply")}
                </span>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentDialog;
