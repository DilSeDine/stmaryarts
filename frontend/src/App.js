import React, { useState } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

import { I18nProvider } from "@/lib/i18n";
import StickyHeader from "@/components/site/StickyHeader";
import HeroTheater from "@/components/site/HeroTheater";
import ModelSelection from "@/components/site/ModelSelection";
import EditorialPhilosophy from "@/components/site/EditorialPhilosophy";
import FeatureWalkthrough from "@/components/site/FeatureWalkthrough";
import SpecTable from "@/components/site/SpecTable";
import Reviews from "@/components/site/Reviews";
import ContactBlock from "@/components/site/ContactBlock";
import StickyCheckoutBar from "@/components/site/StickyCheckoutBar";
import InquiryDialog from "@/components/site/InquiryDialog";
import AppointmentDialog from "@/components/site/AppointmentDialog";
import Footer from "@/components/site/Footer";
import AdminPage from "@/pages/AdminPage";

const Home = () => {
  const [selected, setSelected] = useState("brass");
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  const openInquiry = () => setInquiryOpen(true);
  const openAppointment = () => setAppointmentOpen(true);

  return (
    <div className="relative min-h-screen bg-[#FAF7F5] text-stone-900 overflow-x-hidden">
      <StickyHeader
        onOpenInquiry={openInquiry}
        onOpenAppointment={openAppointment}
      />
      <main>
        <HeroTheater
          onOpenInquiry={openInquiry}
          onOpenAppointment={openAppointment}
        />
        <ModelSelection selected={selected} onSelect={setSelected} />
        <EditorialPhilosophy />
        <FeatureWalkthrough />
        <SpecTable selected={selected} />
        <Reviews />
        <ContactBlock
          onOpenInquiry={openInquiry}
          onOpenAppointment={openAppointment}
        />
      </main>
      <Footer />
      <StickyCheckoutBar
        selected={selected}
        onOpenInquiry={openInquiry}
        onOpenAppointment={openAppointment}
      />
      <InquiryDialog
        open={inquiryOpen}
        onOpenChange={setInquiryOpen}
        selectedModel={selected}
        onSelectModel={setSelected}
      />
      <AppointmentDialog
        open={appointmentOpen}
        onOpenChange={setAppointmentOpen}
      />
      <Toaster position="top-center" />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <I18nProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </BrowserRouter>
      </I18nProvider>
    </div>
  );
}

export default App;
