import { Server, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-dark text-dark-foreground py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="GD Tecnologia"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="leading-tight">
                <p className="font-bold text-white">GD</p>
                <p className="text-[10px] text-white/60 -mt-1 tracking-wider">
                  TECNOLOGIA DA INFORMAÇÃO
                </p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Infraestrutura, hospedagem e serviços gerenciados de TI para
              empresas que não podem parar.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-accent">Navegação</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {[
                { href: "#top", label: "Home" },
                { href: "#sobre", label: "Quem Somos" },
                { href: "#datacenter", label: "Data Center" },
                { href: "#servicos", label: "Serviços" },
                { href: "#expertise", label: "Especialidades" },
                { href: "#cases", label: "Cases" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="hover:text-accent transition-base"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-accent">Contato</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <span>sentinela@grpgd.com.br</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <span>+55 11 9 9847-8411</span>
              </li>
            </ul>

          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm text-white/50">
          © {new Date().getFullYear()} GD Tecnologia da Informação. Todos os
          direitos reservados.
        </div>
      </div>
    </footer>
  );
};
