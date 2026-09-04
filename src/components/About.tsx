import { History } from "lucide-react";

export const About = () => {
  return (
    <section id="sobre" className="py-24 bg-secondary">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-primary-deep text-sm font-semibold mb-4">
            QUEM SOMOS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-deep mb-4 text-balance">
            Nossa História
          </h2>
          <p className="text-lg text-muted-foreground">
            Mais de quatro décadas construindo, evoluindo e sustentando a
            Tecnologia da Informação no Brasil.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-elegant p-8 md:p-12 border border-border">
          <div className="flex items-center gap-3 mb-6 text-primary">
            <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shadow-md">
              <History className="w-5 h-5 text-white" />
            </div>
            <p className="font-mono text-xs tracking-widest text-primary-deep uppercase">
              Desde os anos 80
            </p>
          </div>

          <div className="space-y-5 text-[15px] leading-relaxed text-foreground/80">
            <p>
              Nossa história se iniciou em meados da década de 80 com os
              primeiros contatos com tecnologia, no início de informatização do
              Brasil, com linguagens baseadas em Xbase, equipamentos CP-500,
              Apple2. Já na década de 90 com redes Novell 3.11 e 3.12, Windows
              NT 3.5, DOS, Unix SCO, AIX, equipamentos IBM, HP, Compaq, Digital,
              soluções de redundância em SFT3/Novell, Oracle 6.x em todas as
              plataformas inclusive Linux e Palm Pilot 100 (isso mesmo, Oracle
              rodava em Palm!), SQL Server 7, soluções de backups,
              contingências, recuperação de desastres, anos que fortaleceram a
              Tecnologia da Informação no Brasil e formaram o alicerce de uma
              nação plugada na tecnologia. Anos em que o Brasil se tornou o
              sistema bancário mais informatizado do planeta, anos de inflação
              galopante, governos instáveis, abertura econômica, anos de
              dificuldades e nas dificuldades é que se constroem soluções
              fortes, nação forte, povo forte.
            </p>

            <p>
              Já nos anos 2000 fundamos nossa empresa com uma bagagem de
              soluções de mercado financeiro, baseadas no sistema bancário,
              Bovespa e BM&F.
            </p>

            <p>Acompanhamos a imensa evolução tecnológica:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-primary">
              <li>
                <strong className="text-foreground">Conectividade:</strong>{" "}
                saindo de modems de 1.200 bps para soluções contemporâneas que
                ultrapassam 10 GbE.
              </li>
              <li>
                <strong className="text-foreground">Sistemas:</strong> do poder
                de sistemas operacionais em tela de fósforo mono-usuário e
                mono-processo para ambientes multi-processados modernos.
              </li>
              <li>
                <strong className="text-foreground">
                  Hardware e Armazenamento:
                </strong>{" "}
                de memórias de 64 KB para a escala de petabytes, de clocks de
                processadores inferiores a 4 MHz para mais de 5 GHz, e de discos
                de vagas lembranças para infinitas possibilidades e locais de
                armazenamento.
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-primary-deep pt-4">
              O Presente
            </h3>

            <p>
              Hoje, com uma bagagem forjada em anos e desafios, multiplicamos
              conhecimentos e construímos uma capacitação técnica ímpar que é
              colocada à disposição de nossos clientes. Evidente que em tudo
              Deus nos permitiu nos desafios forjar nosso conhecimento e sem Ele
              não seria possível. Glórias a Deus por todos estes momentos que
              nos permitem hoje um leque de serviços e conhecimentos amplos à
              disposição.
            </p>

            <p>
              Hoje os sistemas operacionais e soluções são bem mais robustos,
              contando com Windows Server 2025, Linux de diversas distribuições,
              Oracle, SQL Server, MySQL, PostgreSQL rodando em várias
              plataformas. Oferecemos também:
            </p>

            <ul className="list-disc pl-6 space-y-2 marker:text-primary">
              <li>
                Soluções de continuidade do negócio, redundâncias, clusters e
                recuperação de desastres.
              </li>
              <li>
                Apoio no desenho de investimentos sem perder o foco no Retorno
                Sobre o Investimento (ROI).
              </li>
              <li>
                Suporte especializado, manutenções preventivas, corretivas e
                tuning.
              </li>
            </ul>

            <p>
              Os desafios continuam, estamos capacitados para eles e prontos
              para os novos que virão. Conte conosco, conhecemos o que fazemos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
