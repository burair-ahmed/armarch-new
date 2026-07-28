import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="w-full min-h-full flex items-center justify-center py-6 sm:py-10">
      <div className="w-[88%] max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[220px_1fr] xl:grid-cols-[260px_1fr] gap-6 lg:gap-8 items-stretch">
        
        {/* ── LEFT COLUMN: Building Image (image1about.png) ── */}
        <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-0 rounded-2xl overflow-hidden shadow-sm">
          <Image
            src="/image1about.png"
            alt="ArmArch Architectural Building"
            fill
            sizes="(max-width: 1024px) 100vw, 260px"
            className="object-cover object-center"
            priority
          />
        </div>

        {/* ── RIGHT COLUMN: Header, Paragraphs & 3 Bottom Images ────────── */}
        <div className="flex flex-col justify-between gap-6 lg:gap-8">
          
          {/* Top Text Content */}
          <div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111111] mb-2 sm:mb-3">
              About ArmArch
            </h2>

            <h3 className="text-xs sm:text-sm md:text-[14px] font-bold text-[#111111] mb-3 sm:mb-4 leading-snug">
              Building the Future Through Design, Visualization &amp; Consultancy
            </h3>

            <div className="text-xs sm:text-sm text-[#333333] leading-relaxed space-y-2.5 sm:space-y-3 font-normal">
              <p>
                ArmArch is a multidisciplinary architecture and design consultancy specializing in architectural design, interior design, photorealistic CGI visualization, design development, and built-environment consultancy.
              </p>
              <p>
                We collaborate with developers, architects, consultants, hospitality brands, and real estate organizations to transform ideas into compelling architectural experiences. Our expertise combines technical precision, creative thinking, and strategic problem-solving to support projects from concept through presentation and delivery.
              </p>
              <p>
                Driven by innovation and a commitment to excellence, ArmArch provides integrated solutions that help clients communicate their vision with confidence while achieving outstanding design quality across residential, commercial, hospitality, industrial, and mixed-use developments.
              </p>
            </div>
          </div>

          {/* Bottom 3 Horizontal Images Row */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-5">
            
            {/* image2about.png */}
            <div className="relative w-full rounded-xl overflow-hidden shadow-sm aspect-[4/3]">
              <Image
                src="/image2about.png"
                alt="ArmArch CGI Design Workstation"
                fill
                sizes="(max-width: 1024px) 33vw, 25vw"
                className="object-cover"
              />
            </div>

            {/* image3about.png */}
            <div className="relative w-full rounded-xl overflow-hidden shadow-sm aspect-[4/3]">
              <Image
                src="/image3about.png"
                alt="ArmArch Architectural Tablet Render"
                fill
                sizes="(max-width: 1024px) 33vw, 25vw"
                className="object-cover"
              />
            </div>

            {/* image4about.png */}
            <div className="relative w-full rounded-xl overflow-hidden shadow-sm aspect-[4/3]">
              <Image
                src="/image4about.png"
                alt="ArmArch Team Client Presentation"
                fill
                sizes="(max-width: 1024px) 33vw, 25vw"
                className="object-cover"
              />
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
