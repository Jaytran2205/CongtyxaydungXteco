import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import IntroSection from "@/components/intro-section";
import ServicesSection from "@/components/services-section";
import HighlightsSection from "@/components/highlights-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import NewsSection from "@/components/news-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <IntroSection />
        <ServicesSection />
        <HighlightsSection />
        <ProjectsSection />
        <ContactSection />
        <NewsSection />
      </main>
      <Footer />
    </>
  );
}
