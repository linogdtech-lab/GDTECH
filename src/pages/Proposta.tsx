import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

const ASSUNTOS: Record<string, string> = {
  especialista: "Fale com especialista",
  proposta: "Solicitação de Proposta",
  consultoria: "Consultoria Técnica",
};

const formatTelefone = (value: string) => {
  const d = value.replace(/\D/g, "").slice(0, 13);
  const rest = d.startsWith("55") ? d.slice(2) : d;
  const ddd = rest.slice(0, 2);
  const nono = rest.slice(2, 3);
  const p1 = rest.slice(3, 7);
  const p2 = rest.slice(7, 11);

  let out = "+55";
  if (ddd) out += ` (${ddd}`;
  if (ddd.length === 2) out += ")";
  if (nono) out += ` ${nono}`;
  if (p1) out += ` ${p1}`;
  if (p2) out += `-${p2}`;
  return out;
};

const contactSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(2, { message: "Nome deve ter pelo menos 2 caracteres" })
    .max(100, { message: "Nome deve ter no máximo 100 caracteres" }),
  email: z
    .string()
    .trim()
    .email({ message: "E-mail inválido" })
    .max(255, { message: "E-mail deve ter no máximo 255 caracteres" }),
  telefone: z
    .string()
    .trim()
    .max(25, { message: "Telefone muito longo" })
    .optional(),
  mensagem: z
    .string()
    .trim()
    .min(10, { message: "Descreva o assunto com pelo menos 10 caracteres" })
    .max(2000, { message: "Texto muito longo" }),
});

type ContactForm = z.infer<typeof contactSchema>;

const Proposta = () => {
  const [searchParams] = useSearchParams();
  const assunto =
    ASSUNTOS[searchParams.get("assunto") ?? ""] ?? "Solicitação de Proposta";

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      mensagem: "",
    },
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      const response = await fetch("/api/enviar-proposta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar contato.");
      }

      toast.success(
        "Contato enviado com sucesso! Entraremos em contato em breve.",
      );
      form.reset();
    } catch (error) {
      toast.error("Erro ao enviar. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
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
          </Link>

          <Button variant="outline" size="sm" asChild>
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Link>
          </Button>
        </div>
      </header>

      <main className="container pt-32 pb-20 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-xl">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-premium">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-dark text-sm font-bold mb-4">
                ENTRE EM CONTATO
              </span>
              <h1 className="text-3xl font-bold text-white mb-2">{assunto}</h1>
              <p className="text-white/80">
                Preencha seus dados e detalhe o assunto. Retornaremos em breve.
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="nome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        Seu Nome (obrigatório)
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Seu nome completo"
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        Seu e-mail (obrigatório)
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="seu@email.com"
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="telefone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Seu Telefone</FormLabel>
                      <FormControl>
                        <Input
                          inputMode="tel"
                          placeholder="+55 (00) 9 4455-6677"
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                          {...field}
                          onChange={(e) =>
                            field.onChange(
                              e.target.value.replace(/\D/g, "")
                                ? formatTelefone(e.target.value)
                                : "",
                            )
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mensagem"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        Detalhes do Assunto
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          rows={7}
                          placeholder="Descreva com detalhes a sua necessidade..."
                          className="min-h-[180px] bg-white/10 border-white/20 text-white placeholder:text-white/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-full cursor-pointer mt-4"
                  disabled={form.formState.isSubmitting}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {form.formState.isSubmitting
                    ? "ENVIANDO..."
                    : "ENVIAR CONTATO"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Proposta;
