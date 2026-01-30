import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "pauloaraujo.phz@gmail.com",
      link: "mailto:pauloaraujo.phz@gmail.com",
      color: "primary",
      description: "Respondo em até 24h",
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+55 (11) 96333-7400",
      link: "https://wa.me/5511963337400",
      color: "secondary",
      description: "Disponível em horário comercial",
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "São Paulo, Brasil",
      link: null,
      color: "accent",
      description: "Disponível para remoto",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      link: "https://github.com/pauloaraujo028",
      gradient: "from-primary to-primary-glow",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      link: "https://linkedin.com/in/pauloaraujo028",
      gradient: "from-secondary to-cyan-400",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<
      string,
      { bg: string; border: string; text: string; glow: string }
    > = {
      primary: {
        bg: "bg-primary/10",
        border: "border-primary/30 hover:border-primary/60",
        text: "text-primary",
        glow: "group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]",
      },
      secondary: {
        bg: "bg-secondary/10",
        border: "border-secondary/30 hover:border-secondary/60",
        text: "text-secondary",
        glow: "group-hover:shadow-[0_0_30px_hsl(var(--secondary)/0.3)]",
      },
      accent: {
        bg: "bg-accent/10",
        border: "border-accent/30 hover:border-accent/60",
        text: "text-accent",
        glow: "group-hover:shadow-[0_0_30px_hsl(var(--accent)/0.3)]",
      },
    };
    return colors[color];
  };

  return (
    <section id="contato" className="relative px-4 py-20">
      {/* Background Elements */}
      <div className="bg-primary/10 absolute top-0 left-0 h-96 w-96 rounded-full blur-[150px]" />

      <div className="relative z-10 container mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="from-primary via-secondary to-accent mb-4 bg-gradient-to-r bg-clip-text text-5xl font-bold text-transparent">
            Contato
          </h2>
          <div className="from-primary via-secondary to-accent mx-auto mb-8 h-1.5 w-20 rounded-full bg-gradient-to-r" />
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
            Estou sempre aberto a novas oportunidades e projetos interessantes
          </p>
        </div>

        <div className="mb-12 grid gap-4 md:grid-cols-3">
          {contactMethods.map((method, index) => {
            const colors = getColorClasses(method.color);
            const Content = (
              <div
                className={`group glass-effect relative h-full rounded-xl border p-6 ${colors.border} ${colors.glow} animate-slide-up transition-all duration-300`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`h-12 w-12 ${colors.bg} mb-4 flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110`}
                >
                  <method.icon className={`h-6 w-6 ${colors.text}`} />
                </div>

                <h3 className="text-foreground mb-1 font-bold">
                  {method.title}
                </h3>
                <p className={`${colors.text} mb-2 font-medium`}>
                  {method.value}
                </p>
                <p className="text-muted-foreground text-xs">
                  {method.description}
                </p>

                {method.link && (
                  <ExternalLink
                    className={`absolute top-4 right-4 h-4 w-4 ${colors.text} opacity-0 transition-opacity group-hover:opacity-100`}
                  />
                )}
              </div>
            );

            return method.link ? (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {Content}
              </a>
            ) : (
              <div key={index}>{Content}</div>
            );
          })}
        </div>

        <Card className="glass-effect border-primary/20 p-8 text-center">
          <h3 className="from-primary to-secondary mb-6 bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent">
            Redes Sociais
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                size="lg"
                variant="outline"
                className="glass-effect border-primary/30 hover:border-primary/50 group transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
                asChild
              >
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-3"
                >
                  <div
                    className={`bg-gradient-to-br p-2 ${social.gradient} rounded-lg transition-transform duration-300 group-hover:scale-110`}
                  >
                    <social.icon className="h-5 w-5 text-white" />
                  </div>
                  {social.title}
                </a>
              </Button>
            ))}
          </div>

          <div className="border-primary/20 mt-8 border-t pt-8">
            <Button
              size="lg"
              className="from-primary via-secondary to-accent bg-gradient-to-r transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.6)]"
              asChild
            >
              <a href="mailto:pauloaraujo.phz@gmail.com" className="gap-2">
                <Send className="h-5 w-5" />
                Enviar Mensagem
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
