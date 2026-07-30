import Image from "next/image";

export default function DesignPhilosophySection() {
  return (
    <div className="w-full min-h-full flex items-center justify-center py-6 sm:py-10">
      <div className="w-[88%] max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
        
        {/* ── LEFT COLUMN: Text Content ── */}
        <div className="flex flex-col gap-4">
          
          {/* Giant display heading matching reference 113.png */}
          <h2
            className="font-black text-[#111111] leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(36px, 6vw, 82px)" }}
          >
            Design<br />Philosophy
          </h2>

          {/* Subtitle / Bold Text */}
          <p className="text-xs sm:text-sm font-bold text-[#111111] leading-snug mt-1">
            Designing Spaces with Purpose, Precision &amp; Impact
          </p>

          {/* Paragraphs */}
          <div className="text-xs sm:text-[13px] text-[#333333] leading-relaxed space-y-2.5 font-normal">
            <p>
              Architecture is more than the creation of buildings; it is the art of shaping experiences. At ArmArch, we believe exceptional design begins with understanding people, context, and purpose. Through creativity, technical precision, and innovation, we transform ideas into timeless spaces that inspire, perform, and endure.
            </p>
            <p>
              We create environments that are not only visually inspiring but also practical, sustainable, and enduring, delivering solutions that add lasting value to people, businesses, and the built environment.
            </p>
          </div>

          {/* Quote */}
          <p className="text-xs sm:text-[13.5px] font-bold text-[#111111] leading-snug mt-3 sm:mt-5">
            &quot;Every great space begins with a thoughtful idea and is brought to life through purposeful design.&quot;
          </p>

        </div>

        {/* ── RIGHT COLUMN: Single Large Image (philo.png) ── */}
        <div className="relative w-full h-[340px] sm:h-[420px] lg:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">
          <Image
            src="/philo.png"
            alt="ArmArch Design Philosophy Masterplan"
            fill
            sizes="(max-width: 1024px) 90vw, 45vw"
            className="object-cover object-center"
            priority
          />
        </div>

      </div>
    </div>
  );
}
