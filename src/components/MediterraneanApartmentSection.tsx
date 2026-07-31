'use client';

import Image from 'next/image';

const medImages = [
  '/Mediterian Apartment/695032669547589.jpg', // 0: Left top bed
  '/Mediterian Apartment/695033338374981.jpg', // 1: Left bottom bed
  '/Mediterian Apartment/695034847980549.jpg', // 2: Center top 1 bath
  '/Mediterian Apartment/695035610676037.jpg', // 3: Center top 2 dining
  '/Mediterian Apartment/695035979070149.jpg', // 4: Center bottom 1 bath
  '/Mediterian Apartment/695036728179333.jpg', // 5: Center bottom 2 terrace
  '/Mediterian Apartment/695037120826629.jpg', // 6: Right top kitchen
  '/Mediterian Apartment/695039003265861.jpg', // 7: Right bottom living
];

export default function MediterraneanApartmentSection() {
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

        {/* ── MAIN COLLAGE LAYOUT MATCHING 118.png ── */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_2.4fr_1fr] gap-2 sm:gap-3 lg:gap-4 items-center">

          {/* ── LEFT COLUMN: 2 Stacked Images ── */}
          <div className="flex flex-col gap-2 sm:gap-3 w-full h-[180px] sm:h-[280px] lg:h-[390px]">
            <div className="relative w-full h-1/2 rounded-xl overflow-hidden shadow-sm">
              <Image
                src={medImages[0]}
                alt="Mediterranean Bedroom Master"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="relative w-full h-1/2 rounded-xl overflow-hidden shadow-sm">
              <Image
                src={medImages[1]}
                alt="Mediterranean Bedroom Arched"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* ── CENTER BLOCK (Top 2 images, Center Text, Bottom 2 images) ── */}
          <div className="flex flex-col gap-2 sm:gap-3 w-full">

            {/* Top 2 Images Row */}
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2 lg:gap-3 h-[95px] sm:h-[135px] lg:h-[170px]">
              <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={medImages[2]}
                  alt="Mediterranean Arched Bathroom"
                  fill
                  sizes="25vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={medImages[3]}
                  alt="Mediterranean Wooden Dining"
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
                MEDITERRANEAN
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

            {/* Bottom 2 Images Row */}
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2 lg:gap-3 h-[95px] sm:h-[135px] lg:h-[170px]">
              <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={medImages[4]}
                  alt="Mediterranean Bath Spa"
                  fill
                  sizes="25vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={medImages[5]}
                  alt="Mediterranean Sunset Terrace"
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
                src={medImages[6]}
                alt="Mediterranean Olive Kitchen"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover object-center"
              />
            </div>
            <div className="relative w-full h-1/2 rounded-xl overflow-hidden shadow-sm">
              <Image
                src={medImages[7]}
                alt="Mediterranean Living Lounge"
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
