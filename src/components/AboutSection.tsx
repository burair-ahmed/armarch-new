import Image from "next/image";

export default function AboutSection() {
  return (                                        //#f5f4f0
    <section className="w-full h-full min-h-screen bg-[#f5f4f0] text-[#111111] flex items-center justify-center py-12 px-10 md:px-16 lg:px-[30px] xl:px-[60px] overflow-y-auto">
      <div className="max-w-[1100px] w-full grid grid-cols-1 lg:grid-cols-[200px_1fr] xl:grid-cols-[220px_1fr] gap-7 items-stretch">

        {/* ── LEFT COLUMN: Tall Portrait Building Image (image1about.png) ── */}
        <div className="relative w-full h-full min-h-[360px] rounded-2xl overflow-hidden">
          <Image
            src="/image1about.png"
            alt="ArmArch Architectural Building"
            fill
            sizes="(max-width: 1024px) 100vw, 340px"
            className="object-cover object-center"
            priority
          />
        </div>

        {/* ── RIGHT COLUMN: Header, Paragraphs & 3 Bottom Images ────────── */}
        <div className="flex flex-col justify-between gap-8">

          {/* Top Text Content */}
          <div>
            <h2 className="text-3xl sm:text-5xl md:text-5xl font-extrabold tracking-tight text-[#111111] mb-3">
              About ArmArch
            </h2>

            <h3 className="text-xs md:text-[13px] font-bold text-[#111111] mb-4 leading-snug">
              Building the Future Through Design, Visualization &amp; Consultancy
            </h3>

            <div className="text-xs md:text-[13px] text-[#333333] leading-relaxed space-y-3 font-normal">
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5">

            {/* image2about.png */}
            <div className="relative w-full rounded-xl overflow-hidden shadow-sm" style={{ aspectRatio: '4/3' }}>
              <Image
                src="/image2about.png"
                alt="ArmArch CGI Design Workstation"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* image3about.png */}
            <div className="relative w-full rounded-xl overflow-hidden shadow-sm" style={{ aspectRatio: '4/3' }}>
              <Image
                src="/image3about.png"
                alt="ArmArch Architectural Tablet Render"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* image4about.png */}
            <div className="relative w-full rounded-xl overflow-hidden shadow-sm" style={{ aspectRatio: '4/3' }}>
              <Image
                src="/image4about.png"
                alt="ArmArch Team Client Presentation"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
