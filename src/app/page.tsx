import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        {/* Scroll space to enable scroll interaction */}
        <section className="min-h-[120vh] w-full bg-[var(--background)]" />
      </main>
    </>
  );
}
