import { About } from "@/components/About";
import { BlogPreview } from "@/components/BlogPreview";
import { Consulting } from "@/components/Consulting";
import { Contact } from "@/components/Contact";
import { Courses } from "@/components/Courses";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";
import { WhyIBPE } from "@/components/WhyIBPE";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Pillars />
        <Courses />
        <Consulting />
        <WhyIBPE />
        <BlogPreview />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
