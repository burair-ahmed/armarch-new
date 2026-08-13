'use client';

import Image from 'next/image';

export default function FoundersNoteSection() {
  return (
    <div className="w-full h-full bg-white overflow-hidden flex items-center justify-center">

      {/* ─── MOBILE layout (< md) ─── */}
      <div className="md:hidden w-[90%] max-w-[520px] mx-auto h-full flex flex-col justify-end items-center gap-2.5 pt-8 sm:pt-12 pb-0">

        {/* Text block — moved down & scaled up */}
        <div className="w-full flex flex-col gap-2.5 shrink-0">
          <h2
            className="text-[#111111] font-black leading-none tracking-tight"
            style={{ fontSize: 'clamp(32px, 10vw, 48px)' }}
          >
            Founder&apos;s Note
          </h2>

          <p
            className="text-[#111111] font-extrabold uppercase leading-[1.22] tracking-normal"
            style={{
              fontFamily: '"Arial Black", Impact, Arial, sans-serif',
              fontSize: 'clamp(15px, 5.2vw, 22px)',
            }}
          >
            Architecture is not defined by the structures we create, but by the
            experiences they inspire. Every line we draw should have a purpose,
            every space visualized should evoke emotion, and every project
            should leave a lasting legacy.
          </p>

          <div className="w-full flex justify-end mt-0.5">
            <a
              href="https://www.linkedin.com/in/armash-ashraf-5839381a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#111111] hover:text-[#c8a96e] transition-colors"
              style={{
                fontFamily: '"Brush Script MT", "Dancing Script", cursive',
                fontSize: 'clamp(24px, 7vw, 36px)',
                lineHeight: 1.1,
              }}
            >
              Eng. Armash Ashraf
            </a>
          </div>
        </div>

        {/* Image — enlarged & kept at bottom */}
        <div className="w-full h-[500px] sm:h-[500px] relative shrink-0">
          <Image
            src="/founder-1.png"
            alt="Eng. Armash Ashraf — Founder of ArmArch"
            fill
            sizes="100vw"
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>

      {/* ─── DESKTOP layout (≥ md) ─── */}
      <div className="hidden md:flex w-[88%] max-w-[1100px] mx-auto h-full flex-row items-center justify-center gap-8 lg:gap-12 py-8 lg:py-10">

        {/* Text */}
        <div className="flex-1 min-w-0 flex flex-col gap-4 lg:gap-5">
          <h2
            className="text-[#111111] font-black leading-none tracking-tight"
            style={{ fontSize: 'clamp(28px, 5vw, 68px)' }}
          >
            Founder&apos;s Note
          </h2>

          <p
            className="text-[#111111] font-black uppercase leading-[1.04]"
            style={{
              fontFamily: '"Arial Black", Impact, Arial, sans-serif',
              fontSize: 'clamp(13px, 2.2vw, 34px)',
            }}
          >
            Architecture is not defined by the structures we create, but by the
            experiences they inspire. Every line we draw should have a purpose,
            every space visualized should evoke emotion, and every project
            should leave a lasting legacy.
          </p>

          <div className="flex justify-end">
            <a
              href="https://www.linkedin.com/in/armash-ashraf-5839381a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#111111] hover:text-[#c8a96e] transition-colors"
              style={{
                fontFamily: '"Brush Script MT", "Dancing Script", cursive',
                fontSize: 'clamp(20px, 3vw, 46px)',
                lineHeight: 1.2,
              }}
            >
              Eng. Armash Ashraf
            </a>
          </div>
        </div>

        {/* Photo */}
        <div
          className="relative flex-shrink-0"
          style={{
            width: 'clamp(180px, 32vw, 440px)',
            height: 'clamp(240px, 75%, 600px)',
          }}
        >
          <Image
            src="/founder-1.png"
            alt="Eng. Armash Ashraf — Founder of ArmArch"
            fill
            sizes="32vw"
            className="object-contain object-center"
            priority
          />
        </div>
      </div>

    </div>
  );
}
