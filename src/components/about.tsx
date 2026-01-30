import { Card } from "@/components/ui/card";
import { Code2, Rocket, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Código limpo, organizado e seguindo as melhores práticas",
      gradient: "from-primary to-primary-glow",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Foco em aplicações rápidas e otimizadas",
      gradient: "from-secondary to-cyan-400",
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Trabalho em equipe e comunicação efetiva",
      gradient: "from-accent to-pink-400",
    },
  ];

  return (
    <section id="sobre" className="relative px-4 py-20">
      {/* Background Elements */}
      <div className="bg-primary/10 absolute top-0 right-0 h-96 w-96 rounded-full blur-[150px]" />

      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="from-primary via-secondary to-accent mb-4 bg-gradient-to-r bg-clip-text text-5xl font-bold text-transparent">
            Sobre Mim
          </h2>
          <div className="from-primary via-secondary to-accent mx-auto mb-8 h-1.5 w-20 rounded-full bg-gradient-to-r" />
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed">
            Sou um desenvolvedor apaixonado por{" "}
            <span className="text-primary font-semibold">tecnologia</span> e{" "}
            <span className="text-secondary font-semibold">inovação</span>.
            Busco constantemente aprender novas tecnologias e aplicar as
            melhores práticas para criar soluções que fazem a diferença.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group glass-effect border-primary/20 hover:border-primary/40 p-6 text-center transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)]"
            >
              <div
                className={`h-20 w-20 bg-gradient-to-br ${feature.gradient} mx-auto mb-6 flex items-center justify-center rounded-2xl shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-transform duration-500 group-hover:rotate-12`}
              >
                <feature.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-foreground mb-3 text-xl font-bold">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
