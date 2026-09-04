import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#top", label: "Home" },
  { href: "#sobre", label: "Quem Somos" },
  { href: "#datacenter", label: "Datacenter" },
  { href: "#servicos", label: "Serviços" },
  { href: "#expertise", label: "Especialidades" },
  { href: "#cases", label: "Cases" },
  { href: "#contato", label: "Contato" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-glow overflow-hidden">
            <img
              src="/logo.png"
              alt="GD Tecnologia"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="leading-tight">
            <p className="font-bold text-primary-deep text-xl">GD</p>
            <p className="text-[11px] text-muted-foreground -mt-0.5 tracking-wider">
              TECNOLOGIA DA INFORMAÇÃO
            </p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-base"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            variant="default"
            size="sm"
            onClick={() => navigate("/proposta?assunto=proposta")}
          >
            Solicitação de Proposta
          </Button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium py-2"
              >
                {l.label}
              </a>
            ))}
            <Button
              variant="default"
              size="sm"
              onClick={() => {
                setOpen(false);
                navigate("/proposta?assunto=proposta");
              }}
            >
              Solicitação de Proposta
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
