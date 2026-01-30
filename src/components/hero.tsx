"use client";

import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";
import Card from "./card";
import Social from "./social";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="bg-background/50 absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] bg-[size:50px_50px]" />

        {/* Floating Orbs - reduced opacity for 3D particles */}
        <div className="bg-primary/20 animate-float absolute top-20 left-10 h-72 w-72 rounded-full blur-[100px]" />
        <div
          className="bg-secondary/20 animate-float absolute right-10 bottom-20 h-96 w-96 rounded-full blur-[120px]"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="bg-accent/10 animate-float absolute top-1/2 left-1/2 h-80 w-80 rounded-full blur-[100px]"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <Card />
        <div className="animate-slide-up">
          {/* Badge */}
          {/* <div className="glass-effect border-primary/20 mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <Sparkles className="text-primary animate-glow h-4 w-4" />
            <span className="text-muted-foreground text-sm">
              Desenvolvedor Full Stack
            </span>
          </div> */}

          <div className="from-primary via-secondary to-accent mb-6 bg-gradient-to-r bg-clip-text pb-3 text-6xl font-bold text-transparent md:text-8xl">
            Paulo Araújo
          </div>

          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl md:text-2xl">
            Transformando{" "}
            <span className="text-primary font-semibold">ideias</span> em{" "}
            <span className="text-secondary font-semibold">código</span> e
            criando{" "}
            <span className="text-accent font-semibold">
              experiências digitais
            </span>{" "}
            incríveis
          </p>

          <div className="mb-12 flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="from-primary to-primary-glow border-0 bg-linear-to-r transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
              onClick={() =>
                document
                  .getElementById("projetos")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Code2 className="mr-2 h-5 w-5" />
              Ver Projetos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass-effect border-primary/30 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
              onClick={() =>
                document
                  .getElementById("contato")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Entrar em Contato
            </Button>
          </div>
          <Social />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="border-primary/50 flex h-10 w-6 items-start justify-center rounded-full border-2 p-2">
          <div className="bg-primary animate-glow h-3 w-1 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
