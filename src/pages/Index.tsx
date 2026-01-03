import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>DHARSAN D | Full Stack Developer</title>
        <meta 
          name="description" 
          content="DHARSAN D - Full Stack Developer based in Chennai. B.Tech ECE at SRM University KTR. Building digital experiences with clean code." 
        />
        <meta name="keywords" content="DHARSAN D, Full Stack Developer, React, Node.js, TypeScript, SRM University" />
        <link rel="canonical" href="https://dharsan.dev" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
