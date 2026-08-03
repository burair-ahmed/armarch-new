'use client';

import Image from 'next/image';

export default function FoundersNoteSection() {
  return (
    <div className="w-full h-full flex items-center justify-center py-6 sm:py-8 lg:py-10 bg-white overflow-hidden">
      <div className="w-[88%] max-w-[1100px] mx-auto flex flex-row items-end gap-4 sm:gap-6 lg:gap-10 h-full">

        {/* ── LEFT: Text content ── */}
        <div className="flex flex-col justify-center flex-1 min-w-0 gap-3 sm:gap-5 h-full">

          {/* Heading */}
          <h2
            className="text-[#111111] font-black leading-none tracking-tight"
            style={{ fontSize: 'clamp(26px, 5vw, 68px)' }}
          >
            Founder&apos;s Note
          </h2>

          {/* Quote + Signature grouped tightly */}
          <div className="flex flex-col items-start">
            {/* Quote text */}
            <p
              className="text-[#111111] font-black uppercase leading-[1.04] tracking-[-0.01em]"
              style={{
                fontSize: 'clamp(13px, 2.4vw, 34px)',
                fontFamily: '"Arial Black", "Impact", Arial, sans-serif',
              }}
            >
              Architecture is not defined by the structures we create, but by
              the experiences they inspire. Every line we draw should have a
              purpose, every space visualized should evoke emotion, and every
              project should leave a lasting legacy.
            </p>

            {/* Signature — directly below paragraph, right-aligned to paragraph width */}
            <div className="w-full flex justify-end mt-1 sm:mt-2">
              <p
                className="text-[#111111]"
                style={{
                  fontFamily: '"Brush Script MT", "Dancing Script", cursive',
                  fontSize: 'clamp(20px, 3.2vw, 46px)',
                  lineHeight: 1.2,
                }}
              >
                Eng. Armash Ashraf
              </p>
            </div>
          </div>

        </div>

        {/* ── RIGHT: Founder photo, anchored to bottom ── */}
        <div
          className="relative flex-shrink-0 self-end"
          style={{
            width: 'clamp(160px, 34%, 460px)',
            height: 'clamp(220px, 88%, 640px)',
          }}
        >
          <Image
            src="/founder-1.png"
            alt="Eng. Armash Ashraf — Founder of ArmArch"
            fill
            sizes="(max-width: 640px) 40vw, 34vw"
            className="object-contain object-bottom"
            priority
          />
        </div>

      </div>
    </div>
  );
}
