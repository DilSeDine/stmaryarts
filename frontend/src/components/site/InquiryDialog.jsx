import React, { useEffect, useState } from "react";
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
import { MODELS } from "@/lib/constants";
import { Loader2, Check } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const InquiryDialog = ({ open, onOpenChange, selectedModel, onSelectModel }) => {
  const { t } = useI18n();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!open) {
      // reset on close
      setTimeout(() => {
        setSuccess(false);
        setForm({ name: "", phone: "", email: "", message: "" });
      }, 200);
    }
  }, [open]);

  const update = (k, v) => setForm((s) => ({ ...s, [k]: v }));

  const modelName =
    MODELS.find((m) => m.id === selectedModel)?.name || "Heritage Brass";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error(t("inquiry.errRequired"));
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/inquiries`, {
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim() || null,
        model: modelName,
        message: form.message.trim(),
      });
      setSuccess(true);
      toast.success(t("inquiry.successToast"));
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
        data-testid="inquiry-dialog"
        className="sm:max-w-[560px] bg-[#FAF7F5] border-stone-200 rounded-[24px] p-0 overflow-hidden"
      >
        <div className="p-8 md:p-10">
          <DialogHeader className="text-left space-y-3">
            <span className="section-label">{t("inquiry.label")}</span>
            <DialogTitle className="font-display font-[800] text-[32px] md:text-[36px] leading-[1.02] tracking-tightest text-stone-900">
              {t("inquiry.h2")}
            </DialogTitle>
            <DialogDescription className="text-stone-600 text-[14px] leading-relaxed">
              {t("inquiry.sub")}
            </DialogDescription>
          </DialogHeader>

          {success ? (
            <div
              data-testid="inquiry-success"
              className="mt-8 flex flex-col items-center text-center py-10"
            >
              <div className="w-14 h-14 rounded-full bg-stone-900 text-stone-50 flex items-center justify-center">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="mt-5 font-display font-bold text-[22px] text-stone-900">
                {t("inquiry.successH2")}
              </h3>
              <p className="mt-2 text-stone-600 text-[14px] max-w-sm">
                {t("inquiry.successP")}
              </p>
              <button
                onClick={() => onOpenChange(false)}
                className="mt-8 bg-stone-900 text-stone-50 rounded-full px-6 py-3 text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-stone-800 transition-colors"
                data-testid="inquiry-close-btn"
              >
                {t("inquiry.close")}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <Label htmlFor="inq-name" className="text-[11px] uppercase tracking-[0.2em] text-stone-600">
                    {t("inquiry.name")}
                  </Label>
                  <Input
                    id="inq-name"
                    data-testid="inquiry-name-input"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder={t("inquiry.namePh")}
                    className="mt-2 bg-white border-stone-200 rounded-full h-12 px-5 text-[15px]"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="inq-phone" className="text-[11px] uppercase tracking-[0.2em] text-stone-600">
                      {t("inquiry.phone")}
                    </Label>
                    <Input
                      id="inq-phone"
                      data-testid="inquiry-phone-input"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="+91"
                      className="mt-2 bg-white border-stone-200 rounded-full h-12 px-5 text-[15px]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="inq-email" className="text-[11px] uppercase tracking-[0.2em] text-stone-600">
                      {t("inquiry.email")}
                    </Label>
                    <Input
                      id="inq-email"
                      type="email"
                      data-testid="inquiry-email-input"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="you@email.com"
                      className="mt-2 bg-white border-stone-200 rounded-full h-12 px-5 text-[15px]"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-[11px] uppercase tracking-[0.2em] text-stone-600">
                    {t("inquiry.material")}
                  </Label>
                  <Select
                    value={selectedModel}
                    onValueChange={(v) => onSelectModel?.(v)}
                  >
                    <SelectTrigger
                      data-testid="inquiry-model-select"
                      className="mt-2 bg-white border-stone-200 rounded-full h-12 px-5 text-[15px]"
                    >
                      <SelectValue placeholder={t("inquiry.materialPh")} />
                    </SelectTrigger>
                    <SelectContent>
                      {MODELS.map((m) => (
                        <SelectItem key={m.id} value={m.id}>
                          {m.name} — {m.priceLabel}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="inq-message" className="text-[11px] uppercase tracking-[0.2em] text-stone-600">
                    {t("inquiry.brief")}
                  </Label>
                  <Textarea
                    id="inq-message"
                    data-testid="inquiry-message-input"
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder={t("inquiry.briefPh")}
                    className="mt-2 bg-white border-stone-200 rounded-[20px] p-5 text-[15px] min-h-[120px]"
                  />
                </div>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  data-testid="inquiry-submit-btn"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-900 text-stone-50 rounded-full px-7 py-3.5 text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-stone-800 transition-colors disabled:opacity-60"
                >
                  {submitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : null}
                  {submitting ? t("inquiry.sending") : t("inquiry.send")}
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

export default InquiryDialog;
