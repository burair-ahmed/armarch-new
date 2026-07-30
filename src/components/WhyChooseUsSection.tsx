import Image from "next/image";

const points = [
  {
    title: "International Quality",
    desc: "World-class design and visualization aligned with global standards.",
  },
  {
    title: "Integrated Expertise",
    desc: "Architecture, interiors, CGI, and consultancy under one roof.",
  },
  {
    title: "Precision & Creativity",
    desc: "Combining technical accuracy with artistic excellence.",
  },
  {
    title: "Collaborative Approach",
    desc: "Working as a seamless extension of your team.",
  },
  {
    title: "Tailored Solutions",
    desc: "Every solution is customized to your project goals.",
  },
  {
    title: "Commitment to Excellence",
    desc: "Delivering quality with professionalism and attention to detail.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="w-[88%] max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 items-center py-6 lg:py-0">

        {/* ── LEFT COLUMN: Text Content ── */}
        <div className="flex flex-col gap-2 lg:gap-4">

          {/* Giant heading */}
          <h2
            className="font-black text-[#111111] leading-[0.92] tracking-tight"
            style={{ fontSize: "clamp(28px, 5vw, 82px)" }}
          >
            Why<br />ArmArch?
          </h2>

          {/* Subtitle */}
          <p className="text-[11px] sm:text-xs font-bold text-[#111111] leading-snug">
            Your Trusted Partner in Design, Visualization &amp; Consultancy
          </p>

          {/* Paragraph — hidden on mobile to save space */}
          <p className="hidden sm:block text-xs sm:text-[13px] text-[#333333] leading-relaxed font-normal">
            At ArmArch, we believe exceptional architecture deserves exceptional
            presentation. We combine design expertise, technical precision, and
            photorealistic visualization to help developers, architects, and
            investors communicate their vision with confidence.
          </p>

          {/* What Sets Us Apart */}
          <div>
            <p className="text-[11px] sm:text-xs font-bold text-[#111111] mb-1">
              What Sets Us Apart
            </p>
            {/* Mobile: 2-col grid of bullet points; Desktop: single column list */}
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-1">
              {points.map(({ title, desc }) => (
                <li key={title} className="text-[10px] sm:text-xs text-[#333333] leading-snug">
                  <span className="font-bold text-[#111111]">• {title}</span>
                  <span className="hidden sm:inline font-normal"> — {desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── RIGHT COLUMN: Images (hidden on mobile, shown on lg+) ── */}
        <div className="hidden lg:grid grid-cols-2 gap-3 h-[500px]">

          {/* why1.png — left */}
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-sm">
            <Image
              src="/why1.png"
              alt="ArmArch outdoor terrace visualization"
              fill
              sizes="25vw"
              className="object-cover object-center"
            />
          </div>

          {/* why2.png — right */}
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-sm">
            <Image
              src="/why2.png"
              alt="ArmArch modern architecture visualization"
              fill
              sizes="25vw"
              className="object-cover object-center"
            />
          </div>

        </div>

        {/* ── Mobile only: single compact image strip ── */}
        <div className="lg:hidden grid grid-cols-2 gap-2 h-[160px]">
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-sm">
            <Image
              src="/why1.png"
              alt="ArmArch outdoor terrace visualization"
              fill
              sizes="45vw"
              className="object-cover object-center"
            />
          </div>
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-sm">
            <Image
              src="/why2.png"
              alt="ArmArch modern architecture visualization"
              fill
              sizes="45vw"
              className="object-cover object-center"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
