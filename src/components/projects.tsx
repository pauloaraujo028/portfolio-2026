import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "Nextjs Builder",
      description:
        "Construtor de projetos com Next.js, permitindo criar projetos personalizados facilmente. Inclui autenticação, banco de dados e UI pré-configurados.",
      image: "/assets/projetos/builder.png",
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "PostgreSQL",
        "Shadcn UI",
        "Authjs",
      ],
      github: "https://github.com/pauloaraujo028/nextjs-builder",
      demo: "https://builderdev.vercel.app/",
      highlight: true,
    },
    {
      title: "MyAgendify - Sistema de Agendamento",
      description:
        "Sistema de agendamento online para barbearias, facilitando o gerenciamento de horários e clientes.",
      image: "/assets/projetos/agendify.png",
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "PostgreSQL",
        "Shadcn UI",
      ],
      github: "https://github.com/pauloaraujo028/fsw-barbershop",
      demo: "https://myagendify.vercel.app/",
      highlight: false,
    },
    {
      title: "Projetisa - Site Freelancer",
      description:
        "Meu site pessoal para divulgar meus serviços como freelancer e exibir meu portfólio.",
      image: "/assets/projetos/projetisa.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "SQLite", "Shadcn UI"],
      github: "https://github.com/pauloaraujo028/projetisa-site",
      demo: "https://projetisa.vercel.app/",
      highlight: false,
    },
    {
      title: "Siga Seu Atleta",
      description:
        "Aplicação para dar visibilidade para os atletas paralímpicos e olímpicos do Brasil.",
      image: "/assets/projetos/meu-atleta.png",
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "SQLite",
        "Shadcn UI",
      ],
      github: "https://github.com/pauloaraujo028/siga-seu-atleta",
      demo: "https://seu-atleta.vercel.app/",
      highlight: false,
    },
  ];

  return (
    <section id="projetos" className="relative px-4 py-20">
      {/* Background Elements */}
      <div className="bg-accent/10 absolute top-1/2 right-0 h-96 w-96 rounded-full blur-[150px]" />

      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="from-primary via-secondary to-accent mb-4 bg-gradient-to-r bg-clip-text text-5xl font-bold text-transparent">
            Projetos
          </h2>
          <div className="from-primary via-secondary to-accent mx-auto mb-8 h-1.5 w-20 rounded-full bg-gradient-to-r" />
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
            Alguns dos projetos que desenvolvi recentemente
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group glass-effect border-primary/20 hover:border-primary/40 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] ${
                project.highlight ? "ring-primary/50 ring-2" : ""
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <AspectRatio ratio={16 / 10}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    fill
                  />
                  <div className="from-card absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60" />
                </AspectRatio>
                {project.highlight && (
                  <div className="absolute top-3 right-3">
                    <div className="glass-effect rounded-full p-2">
                      <Sparkles className="text-primary animate-glow h-4 w-4" />
                    </div>
                  </div>
                )}
              </div>

              <CardHeader className="pt-4">
                <CardTitle className="text-foreground group-hover:text-primary text-xl text-wrap transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground mt-2 text-sm text-wrap">
                  {project.description}
                </CardDescription>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="border-primary/30 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-end">
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="glass-effect border-primary/30 hover:border-primary/50 hover:bg-primary/10 flex-1"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="from-primary to-primary-glow flex-1 bg-gradient-to-r hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
                    asChild
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
