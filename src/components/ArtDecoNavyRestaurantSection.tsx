'use client';

import Image from 'next/image';

const navyImages = [
  '/Art Deco Navy/694981515258693.jpg', // 0: Left tall reception
  '/Art Deco Navy/694981517704069.jpg', // 1: Center top 1 private dining
  '/Art Deco Navy/694981820787141.jpg', // 2: Center top 2 washroom
  '/Art Deco Navy/694981825399749.jpg', // 3: Center top 3 bar lounge
  '/Art Deco Navy/694983571188613.jpg', // 4: Center bottom 1 main dining
  '/Art Deco Navy/694983573641605.jpg', // 5: Center bottom 2 bar seating
  '/Art Deco Navy/694984245979397.jpg', // 6: Center bottom 3 courtyard dining
  '/Art Deco Navy/694985367513797.jpg', // 7: Right tall patio
];

export default function ArtDecoNavyRestaurantSection() {
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
            Commercial
          </span>
        </div>

        {/* ── MAIN COLLAGE LAYOUT MATCHING 119.png ── */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_2.4fr_1fr] gap-2 sm:gap-3 lg:gap-4 items-center">

          {/* ── LEFT TALL IMAGE ── */}
          <div className="relative w-full h-[180px] sm:h-[280px] lg:h-[390px] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm">
            <Image
              src={navyImages[0]}
              alt="Art Deco Navy Reception Desk"
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* ── CENTER BLOCK (Top 3 images, Center Text, Bottom 3 images) ── */}
          <div className="flex flex-col gap-2 sm:gap-3 w-full">

            {/* Top 3 Images Row */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 lg:gap-3 h-[90px] sm:h-[130px] lg:h-[165px]">
              <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={navyImages[1]}
                  alt="Art Deco Navy Private Dining"
                  fill
                  sizes="25vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={navyImages[2]}
                  alt="Art Deco Navy Washroom"
                  fill
                  sizes="25vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={navyImages[3]}
                  alt="Art Deco Navy Bar Lounge"
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
                ART DECO NAVY
              </p>
              <h3
                className="text-[#111111] font-normal tracking-tight text-center leading-snug"
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(14px, 2vw, 24px)',
                }}
              >
                Restaurant
              </h3>
            </div>

            {/* Bottom 3 Images Row */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 lg:gap-3 h-[90px] sm:h-[130px] lg:h-[165px]">
              <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={navyImages[4]}
                  alt="Art Deco Navy Main Dining"
                  fill
                  sizes="25vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={navyImages[5]}
                  alt="Art Deco Navy Bar Seating"
                  fill
                  sizes="25vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={navyImages[6]}
                  alt="Art Deco Navy Courtyard"
                  fill
                  sizes="25vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

          </div>

          {/* ── RIGHT TALL IMAGE ── */}
          <div className="relative w-full h-[180px] sm:h-[280px] lg:h-[390px] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm">
            <Image
              src={navyImages[7]}
              alt="Art Deco Navy Outdoor Patio"
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover object-center"
            />
          </div>

        </div>

      </div>
    </div>
  );
}
