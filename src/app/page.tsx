import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SectionNav from "@/components/SectionNav";

export default function Home() {
  return (
    <>
      <Header />
      <SectionNav />
      <main className="relative">
        <Hero />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
