import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Social = () => {
  return (
    <div className="flex justify-center gap-6">
      <Link
        href="https://github.com/pauloaraujo028"
        target="_blank"
        rel="noopener noreferrer"
        className="glass-effect hover:bg-primary/20 rounded-full p-3 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
      >
        <Github className="h-6 w-6" />
      </Link>
      <Link
        href="https://linkedin.com/in/pauloaraujo028"
        target="_blank"
        rel="noopener noreferrer"
        className="glass-effect hover:bg-secondary/20 rounded-full p-3 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
      >
        <Linkedin className="h-6 w-6" />
      </Link>
      <Link
        href="mailto:pauloaraujo.phz@gmail.com"
        className="glass-effect hover:bg-accent/20 rounded-full p-3 transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]"
      >
        <Mail className="h-6 w-6" />
      </Link>
    </div>
  );
};

export default Social;
