'use client';

import Image from 'next/image';

export default function FoundersNoteSection() {
  return (
    <div className="w-full h-full bg-white overflow-hidden">

      {/* ─── MOBILE layout (< md) ─── */}
      <div className="md:hidden w-[88%] mx-auto h-full flex flex-col py-6 gap-4">

        {/* Text block */}
        <div className="flex flex-col gap-2 shrink-0">
          <h2
            className="text-[#111111] font-black leading-none tracking-tight"
            style={{ fontSize: 'clamp(26px, 7vw, 44px)' }}
          >
            Founder&apos;s Note
          </h2>

          <p
            className="text-[#111111] font-black uppercase leading-[1.06]"
            style={{
              fontFamily: '"Arial Black", Impact, Arial, sans-serif',
              fontSize: 'clamp(10px, 3.2vw, 16px)',
            }}
          >
            Architecture is not defined by the structures we create, but by the
            experiences they inspire. Every line we draw should have a purpose,
            every space visualized should evoke emotion, and every project
            should leave a lasting legacy.
          </p>

          <div className="flex justify-end mt-1">
            <p
              className="text-[#111111]"
              style={{
                fontFamily: '"Brush Script MT", "Dancing Script", cursive',
                fontSize: 'clamp(16px, 4.5vw, 28px)',
                lineHeight: 1.2,
              }}
            >
              Eng. Armash Ashraf
            </p>
          </div>
        </div>

        {/* Image — fills all remaining space */}
        <div className="flex-1 relative min-h-0">
          <Image
            src="/founder-1.png"
            alt="Eng. Armash Ashraf — Founder of ArmArch"
            fill
            sizes="88vw"
            className="object-contain object-center"
            priority
          />
        </div>
      </div>

      {/* ─── DESKTOP layout (≥ md) ─── */}
      <div className="hidden md:flex w-[88%] max-w-[1100px] mx-auto h-full flex-row items-center gap-8 lg:gap-12 py-8 lg:py-10">

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
            <p
              className="text-[#111111]"
              style={{
                fontFamily: '"Brush Script MT", "Dancing Script", cursive',
                fontSize: 'clamp(20px, 3vw, 46px)',
                lineHeight: 1.2,
              }}
            >
              Eng. Armash Ashraf
            </p>
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
