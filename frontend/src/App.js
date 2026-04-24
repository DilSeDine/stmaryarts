import React, { useState } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

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
import Footer from "@/components/site/Footer";

const Home = () => {
  const [selected, setSelected] = useState("brass");
  const [inquiryOpen, setInquiryOpen] = useState(false);

  const openInquiry = () => setInquiryOpen(true);

  return (
    <div className="relative min-h-screen bg-[#FAF7F5] text-stone-900 overflow-x-hidden">
      <StickyHeader onOpenInquiry={openInquiry} />
      <main>
        <HeroTheater onOpenInquiry={openInquiry} />
        <ModelSelection selected={selected} onSelect={setSelected} />
        <EditorialPhilosophy />
        <FeatureWalkthrough />
        <SpecTable selected={selected} />
        <Reviews />
        <ContactBlock onOpenInquiry={openInquiry} />
      </main>
      <Footer />
      <StickyCheckoutBar selected={selected} onOpenInquiry={openInquiry} />
      <InquiryDialog
        open={inquiryOpen}
        onOpenChange={setInquiryOpen}
        selectedModel={selected}
        onSelectModel={setSelected}
      />
      <Toaster position="top-center" />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
