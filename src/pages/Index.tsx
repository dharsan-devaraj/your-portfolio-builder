import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>DHARSAN D | Full Stack Developer & Software Engineer</title>
        <meta 
          name="description" 
          content="DHARSAN D - Full Stack Developer and Software Engineer. B.Tech ECE student at SRM University KTR. Expert in React, Node.js, Python, and modern web technologies." 
        />
        <meta name="keywords" content="DHARSAN D, Full Stack Developer, Software Engineer, React, Node.js, Python, SRM University" />
        <link rel="canonical" href="https://dharsan-devaraj.github.io/your-portfolio-builder" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <section id="about" className="sr-only">
            <h2>About DHARSAN D</h2>
          </section>
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
