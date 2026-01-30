import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main>
      <div className="from-background via-background to-primary/5 fixed inset-0 -z-10 bg-gradient-to-br">
        <div className="bg-primary/20 animate-float absolute top-0 left-1/4 h-96 w-96 rounded-full blur-[120px]" />
        <div
          className="bg-secondary/20 animate-float absolute right-1/4 bottom-0 h-96 w-96 rounded-full blur-[120px]"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="bg-accent/10 animate-float absolute top-1/2 left-1/2 h-96 w-96 rounded-full blur-[120px]"
          style={{ animationDelay: "4s" }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
