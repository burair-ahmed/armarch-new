'use client';

import Image from 'next/image';

const villaImages = [
  '/500sq yds/695786947150597.jpg', // 0: Top-left exterior
  '/500sq yds/696043072085509.jpg', // 1: Bottom-left living
  '/500sq yds/696053356687365.jpg', // 2: Center top 1
  '/500sq yds/696054323334341.jpg', // 3: Center top 2
  '/500sq yds/696142984347333.jpg', // 4: Center top 3
  '/500sq yds/696156371889925.jpg', // 5: Center bottom 1
  '/500sq yds/696158336261701.jpg', // 6: Center bottom 2
  '/500sq yds/696159556078917.jpg', // 7: Center bottom 3
  '/500sq yds/696159880789957.jpg', // 8: Top-right kitchen
  '/500sq yds/696183839063685.jpg', // 9: Bottom-right pool
];

export default function ResidentialExperienceSection() {
  return (
    <div className="w-full h-full flex items-center justify-center py-4 sm:py-6 bg-[#f5f4f0] overflow-hidden">
      <div className="w-[88%] max-w-[1100px] mx-auto flex flex-col gap-2 sm:gap-4 lg:gap-5">

        {/* ── TOP HEADER: Heading Left + Subheading Center ── */}
        <div className="relative w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-1">
          <h2
            className="font-black text-[#111111] leading-[0.9] tracking-tight"
            style={{ fontSize: 'clamp(28px, 5vw, 68px)' }}
          >
            Project Experience
          </h2>
          <span className="font-bold text-[#111111] text-xs sm:text-sm md:text-base tracking-tight pb-0.5">
            Residential
          </span>
        </div>

        {/* ── MAIN COLLAGE LAYOUT MATCHING 116.png ── */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_2.4fr_1fr] gap-2 sm:gap-3 lg:gap-4 items-center">

          {/* ── LEFT COLUMN: 2 Stacked Images ── */}
          <div className="flex flex-col gap-2 sm:gap-3 w-full h-[180px] sm:h-[280px] lg:h-[390px]">
            <div className="relative w-full h-1/2 rounded-xl overflow-hidden shadow-sm">
              <Image
                src={villaImages[0]}
                alt="Modern Villa Exterior"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="relative w-full h-1/2 rounded-xl overflow-hidden shadow-sm">
              <Image
                src={villaImages[1]}
                alt="Modern Villa Living Room"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* ── CENTER BLOCK (Top 3 images, Center Text, Bottom 3 images) ── */}
          <div className="flex flex-col gap-2 sm:gap-3 w-full">

            {/* Top 3 Images Row */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 lg:gap-3 h-[90px] sm:h-[130px] lg:h-[165px]">
              <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={villaImages[2]}
                  alt="Villa Bedroom 1"
                  fill
                  sizes="25vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={villaImages[3]}
                  alt="Villa Bedroom 2"
                  fill
                  sizes="25vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={villaImages[4]}
                  alt="Villa Game Room"
                  fill
                  sizes="25vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Center Editorial Text */}
            <div className="w-full text-center py-1 sm:py-1.5 flex flex-col items-center justify-center">
              <p
                className="uppercase tracking-[0.25em] text-[#666666] font-light text-[9px] sm:text-[10px] md:text-xs mb-0.5"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                500 SQYD
              </p>
              <h3
                className="text-[#111111] font-normal tracking-tight text-center leading-snug"
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(14px, 2vw, 24px)',
                }}
              >
                Modern Villa
              </h3>
            </div>

            {/* Bottom 3 Images Row */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 lg:gap-3 h-[90px] sm:h-[130px] lg:h-[165px]">
              <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={villaImages[5]}
                  alt="Villa Bathroom 1"
                  fill
                  sizes="25vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={villaImages[6]}
                  alt="Villa Bathroom 2"
                  fill
                  sizes="25vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={villaImages[7]}
                  alt="Villa Cinema Theater"
                  fill
                  sizes="25vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

          </div>

          {/* ── RIGHT COLUMN: 2 Stacked Images ── */}
          <div className="flex flex-col gap-2 sm:gap-3 w-full h-[180px] sm:h-[280px] lg:h-[390px]">
            <div className="relative w-full h-1/2 rounded-xl overflow-hidden shadow-sm">
              <Image
                src={villaImages[8]}
                alt="Villa Kitchen"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover object-center"
              />
            </div>
            <div className="relative w-full h-1/2 rounded-xl overflow-hidden shadow-sm">
              <Image
                src={villaImages[9]}
                alt="Villa Pool"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
