'use client';

import Image from 'next/image';

const apartmentImages = [
  '/white deco apartment/695098788629125.jpg', // 0: Left top bed
  '/white deco apartment/695098791414853.jpg', // 1: Left bottom bed
  '/white deco apartment/695654292935941.jpg', // 2: Center top 1 bath
  '/white deco apartment/695654616921221.jpg', // 3: Center top 2 dining
  '/white deco apartment/695655334535941.jpg', // 4: Center top 3 pantry
  '/white deco apartment/695655938548165.jpg', // 5: Center bottom 1 bath
  '/white deco apartment/695657160635845.jpg', // 6: Center bottom 2 terrace
  '/white deco apartment/695659639374533.jpg', // 7: Center bottom 3 study
  '/white deco apartment/695660368871877.jpg', // 8: Right top kitchen
  '/white deco apartment/695661232489029.jpg', // 9: Right bottom living
];

export default function ArtDecoApartmentSection() {
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

        {/* ── MAIN COLLAGE LAYOUT MATCHING 117.png ── */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_2.4fr_1fr] gap-2 sm:gap-3 lg:gap-4 items-center">

          {/* ── LEFT COLUMN: 2 Stacked Images ── */}
          <div className="flex flex-col gap-2 sm:gap-3 w-full h-[180px] sm:h-[280px] lg:h-[390px]">
            <div className="relative w-full h-1/2 rounded-xl overflow-hidden shadow-sm">
              <Image
                src={apartmentImages[0]}
                alt="Art Deco Bedroom Master"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="relative w-full h-1/2 rounded-xl overflow-hidden shadow-sm">
              <Image
                src={apartmentImages[1]}
                alt="Art Deco Bedroom Guest"
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
                  src={apartmentImages[2]}
                  alt="Art Deco Bathroom Suite"
                  fill
                  sizes="25vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={apartmentImages[3]}
                  alt="Art Deco Dining Area"
                  fill
                  sizes="25vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={apartmentImages[4]}
                  alt="Art Deco Pantry Laundry"
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
                ART DECO
              </p>
              <h3
                className="text-[#111111] font-normal tracking-tight text-center leading-snug"
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(14px, 2vw, 24px)',
                }}
              >
                Apartment
              </h3>
            </div>

            {/* Bottom 3 Images Row */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 lg:gap-3 h-[90px] sm:h-[130px] lg:h-[165px]">
              <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={apartmentImages[5]}
                  alt="Art Deco Ensuite Bath"
                  fill
                  sizes="25vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={apartmentImages[6]}
                  alt="Art Deco Outdoor Terrace"
                  fill
                  sizes="25vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={apartmentImages[7]}
                  alt="Art Deco Study Desk"
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
                src={apartmentImages[8]}
                alt="Art Deco Kitchen Island"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover object-center"
              />
            </div>
            <div className="relative w-full h-1/2 rounded-xl overflow-hidden shadow-sm">
              <Image
                src={apartmentImages[9]}
                alt="Art Deco Living Lounge"
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
