import { Badge } from "@/components/ui/badge";
import { Database, Terminal, Wrench } from "lucide-react";
import Image from "next/image";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Terminal,
      skills: [
        { name: "React", skillIcon: "/assets/skills/react.svg" },
        { name: "Next.js", skillIcon: "/assets/skills/nextjs.svg" },
        { name: "TypeScript", skillIcon: "/assets/skills/typescript.svg" },
        { name: "JavaScript", skillIcon: "/assets/skills/javascript.svg" },
        { name: "HTML5", skillIcon: "/assets/skills/html5.svg" },
        { name: "CSS3", skillIcon: "/assets/skills/css3.svg" },
        { name: "Tailwind CSS", skillIcon: "/assets/skills/tailwindcss.svg" },
        { name: "Bootstrap", skillIcon: "/assets/skills/bootstrap.svg" },
        { name: "Shadcn UI", skillIcon: "/assets/skills/shadcn.svg" },
      ],
      gradient: "from-primary to-primary-glow",
    },
    {
      title: "Backend",
      icon: Database,
      skills: [
        { name: "Node.js", skillIcon: "/assets/skills/nodejs.svg" },
        { name: "Laravel", skillIcon: "/assets/skills/laravel.svg" },
        { name: "PHP", skillIcon: "/assets/skills/php.svg" },
        { name: "MySQL", skillIcon: "/assets/skills/mysql.svg" },
        { name: "PostgreSQL", skillIcon: "/assets/skills/postgresql.svg" },
      ],
      gradient: "from-secondary to-cyan-400",
    },
    {
      title: "Ferramentas",
      icon: Wrench,
      skills: [
        { name: "Git", skillIcon: "/assets/skills/git.svg" },
        { name: "Figma", skillIcon: "/assets/skills/figma.svg" },
        { name: "Docker", skillIcon: "/assets/skills/docker.svg" },
        { name: "Auth.js", skillIcon: "/assets/skills/authjs.svg" },
        { name: "n8n", skillIcon: "/assets/skills/n8n.svg" },
        { name: "Prisma", skillIcon: "/assets/skills/prisma.svg" },
        { name: "Drizzle", skillIcon: "/assets/skills/drizzle.svg" },
        { name: "Postman", skillIcon: "/assets/skills/postman.svg" },
      ],
      gradient: "from-accent to-pink-400",
    },
  ];

  return (
    <section id="skills" className="relative px-4 py-20">
      {/* Background Elements */}
      <div className="bg-secondary/10 absolute bottom-0 left-0 h-96 w-96 rounded-full blur-[150px]" />

      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="from-primary via-secondary to-accent mb-4 bg-linear-to-r bg-clip-text text-5xl font-bold text-transparent">
            Habilidades
          </h2>
          <div className="from-primary via-secondary to-accent mx-auto mb-8 h-1.5 w-20 rounded-full bg-linear-to-r" />
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
            Tecnologias e ferramentas que domino e utilizo no dia a dia
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-effect border-primary/20 hover:border-primary/40 space-y-6 rounded-2xl border p-8 transition-all duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.2)]"
            >
              <div className="mb-6 flex items-center justify-center gap-3">
                <div
                  className={`bg-linear-to-br p-3 ${category.gradient} rounded-md shadow-lg`}
                >
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="glass-effect border-primary/20 hover:border-primary/40 cursor-default border px-4 py-2 text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        src={skill.skillIcon}
                        alt={skill.name}
                        width={20}
                        height={20}
                      />
                      {skill.name}
                    </div>
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
