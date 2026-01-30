import Link from "next/link";
import Social from "./social";

const Footer = () => {
  const navLinks = [
    { label: "Início", href: "#" },
    { label: "Sobre", href: "#sobre" },
    { label: "Skills", href: "#skills" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <footer className="relative mt-20 px-4 py-12">
      {/* Gradient Line */}
      <div className="via-primary mb-8 h-px w-full bg-gradient-to-r from-transparent to-transparent" />

      <div className="container mx-auto text-center">
        <a
          href="#"
          className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent transition-transform duration-300 hover:scale-105"
        >
          &lt;PA /&gt;
        </a>

        <div>
          <nav className="my-6 flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="foreground/80 hover:text-foreground after:from-primary after:to-secondary relative text-xl transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-gradient-to-r after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-4">
          <Social />
        </div>

        <p className="text-muted-foreground/60 mt-6 text-lg">
          © {new Date().getFullYear()} Paulo Araújo. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
