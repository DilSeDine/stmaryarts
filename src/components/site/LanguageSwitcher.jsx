import React from "react";
import { LANGS, useI18n } from "@/lib/i18n";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const LanguageSwitcher = ({ variant = "light" }) => {
  const { lang, setLang } = useI18n();
  const current = LANGS.find((l) => l.code === lang) || LANGS[0];
  const dark = variant === "dark";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          data-testid="language-switcher"
          aria-label="Change language"
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[11px] uppercase tracking-[0.2em] font-medium border transition-colors ${
            dark
              ? "border-stone-700 text-stone-100 hover:bg-stone-800"
              : "border-stone-300 text-stone-800 hover:bg-stone-100"
          }`}
        >
          <Globe className="w-3.5 h-3.5" />
          {current.label}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px]">
        {LANGS.map((l) => (
          <DropdownMenuItem
            key={l.code}
            data-testid={`lang-option-${l.code}`}
            onSelect={() => setLang(l.code)}
            className={`text-[13px] ${lang === l.code ? "font-semibold" : ""}`}
          >
            <span className="mr-2 text-stone-500 text-[11px] uppercase tracking-[0.18em]">
              {l.label}
            </span>
            {l.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
