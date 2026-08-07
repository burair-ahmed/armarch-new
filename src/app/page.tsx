import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
