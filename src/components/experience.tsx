import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Analista de TI Jr.",
    company: "Adesso Informática Ltda",
    period: "2024 - Presente",
    description:
      "Atuação em infraestrutura de TI, suporte técnico e gestão de ativos, com foco em manutenção preventiva e corretiva, administração de servidores, redes, softwares corporativos.",
    technologies: [
      "Server Management",
      "Networking",
      "IT Support",
      "Active Directory",
      "VMware",
    ],
  },
  {
    title: "Desenvolvedor Full Stack Jr.",
    company: "iTrack Brasil - Projeto",
    period: "2023 - 2023",
    description:
      "Atuação como Desenvolvedor Full Stack em ambiente ágil, colaborando na finalização de sistema web, desenvolvimento de funcionalidades front-end e back-end, integrações com APIs REST e correção de falhas críticas, garantindo estabilidade e confiabilidade em produção.",
    technologies: ["Vue", "Laravel", "MySQL", "REST APIs", "Git"],
  },
  {
    title: "Desenvolvedor Full Stack Jr.",
    company: "Clubedodev consultoria em tecnologia da informação LTDA.",
    period: "2023 - 2023",
    description:
      "Conduzi o desenvolvimento de um e-commerce completo, entregando solução estável e escalável, com melhorias de performance (30% mais rápido) e atuação em ambiente ágil com metodologias Scrum.",
    technologies: [
      "Laravel",
      "React",
      "Styled Components",
      "Bootstrap",
      "postgreSQL",
      "Git",
    ],
  },
  {
    title: "Assistente Suporte Infraestrutura I",
    company: "Adesso Informática Ltda",
    period: "2023 - 2023",
    description:
      "Realizava manutenções de infraestrutura de redes, impressoras e computadores, instalação de sistemas e configurações de softwares e servidores, prestava suporte técnico aos usuários, gerenciamento de equipamentos, monitoramento de sistemas de chamados, dentre outras atribuições.",
    technologies: [
      "Server Management",
      "Networking",
      "IT Support",
      "Active Directory",
      "VMware",
    ],
  },
  {
    title: "Assistente de Sistemas",
    company: "Luft Solutions",
    period: "2022 - 2022",
    description:
      "Erp WMS, desenvolvia, implantava e mantinha os sistemas de acordo com as metodologia e técnicas adequadas, realizava controle de pendências do sistema, identificava erros e falhas no sistema, prestava suporte aos usuários para esclarecimento de dúvidas ou erros, fazia tratamento de arquivos e integrações no sistema, tratamento de NF, dentre outras atribuições.",
    technologies: ["MySQL", "Python", "JavaScript", "ERP WMS"],
  },
];

const Experience = () => {
  return (
    <section id="experiencia" className="relative px-4 py-20">
      <div className="container mx-auto max-w-3xl">
        <div className="animate-slide-up mb-16 text-center">
          <h2 className="from-primary via-secondary to-accent mb-4 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Experiência
          </h2>
          <p className="text-muted-foreground text-lg">
            Minha trajetória profissional
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="from-primary via-secondary to-accent absolute top-0 bottom-0 left-4 w-0.5 bg-gradient-to-b md:left-1/2 md:-translate-x-px" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-6 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } animate-slide-up`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline dot */}
                <div className="bg-primary absolute left-4 z-10 h-3 w-3 -translate-x-1/2 rounded-full shadow-[0_0_12px_hsl(var(--primary))] md:left-1/2" />

                {/* Card */}
                <div
                  className={`ml-10 md:ml-0 md:w-[calc(55%-2rem)] ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
                >
                  <div className="glass-effect border-primary/20 hover:border-primary/40 group rounded-lg border p-4 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]">
                    <div className="mb-2 flex items-center gap-2">
                      <Briefcase className="text-primary h-4 w-4" />
                      <span className="text-muted-foreground flex items-center gap-1 text-xs">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-foreground mb-0.5 text-lg font-bold">
                      {exp.title}
                    </h3>
                    <p className="text-primary mb-2 text-sm font-medium">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="glass-effect border-secondary/30 text-secondary rounded-full border px-2 py-0.5 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
