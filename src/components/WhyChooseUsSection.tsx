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
    <div className="w-full min-h-full flex items-center justify-center py-6 sm:py-10">
      <div className="w-[88%] max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">

        {/* ── LEFT COLUMN: Text Content ── */}
        <div className="flex flex-col gap-4">

          {/* Giant heading */}
          <h2
            className="font-black text-[#111111] leading-[0.92] tracking-tight"
            style={{ fontSize: "clamp(32px, 6vw, 82px)" }}
          >
            Why<br />ArmArch?
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm font-bold text-[#111111] leading-snug mt-1">
            Your Trusted Partner in Design, Visualization &amp; Consultancy
          </p>

          {/* Paragraph */}
          <p className="text-xs sm:text-[13px] text-[#333333] leading-relaxed font-normal">
            At ArmArch, we believe exceptional architecture deserves exceptional
            presentation. We combine design expertise, technical precision, and
            photorealistic visualization to help developers, architects, and
            investors communicate their vision with confidence. From concept
            development to final presentation, our integrated approach delivers
            solutions that are both visually compelling and commercially valuable.
          </p>

          {/* What Sets Us Apart */}
          <div>
            <p className="text-xs sm:text-[13px] font-bold text-[#111111] mb-1.5">
              What Sets Us Apart
            </p>
            <ul className="space-y-1">
              {points.map(({ title, desc }) => (
                <li key={title} className="text-xs sm:text-[13px] text-[#333333] leading-snug">
                  <span className="font-bold text-[#111111]">• {title}</span>
                  <br />
                  <span className="font-normal">{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── RIGHT COLUMN: 1 image left, 1 image right ── */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 h-[400px] sm:h-[460px] lg:h-[500px]">

          {/* why1.png — left */}
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-sm">
            <Image
              src="/why1.png"
              alt="ArmArch outdoor terrace visualization"
              fill
              sizes="(max-width: 1024px) 45vw, 25vw"
              className="object-cover object-center"
            />
          </div>

          {/* why2.png — right */}
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-sm">
            <Image
              src="/why2.png"
              alt="ArmArch modern architecture visualization"
              fill
              sizes="(max-width: 1024px) 45vw, 25vw"
              className="object-cover object-center"
            />
          </div>

        </div>

      </div>
    </div>
  );
}
