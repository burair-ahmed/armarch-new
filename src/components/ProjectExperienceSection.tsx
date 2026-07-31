'use client';

import Image from 'next/image';

const restaurantImages = [
  '/restaurant/694990736099717.jpg',
  '/restaurant/694991156390981.jpg',
  '/restaurant/695008655207685.jpg',
  '/restaurant/695010548567237.jpg',
  '/restaurant/695012190063045.jpg',
  '/restaurant/695013273471877.jpg',
];

export default function ProjectExperienceSection() {
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
            Commercial Building
          </span>
        </div>

        {/* ── MAIN COLLAGE LAYOUT ── */}
        {/* Responsive: 1-col on mobile, 3-col flex/grid on lg matching 115.png */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_2.4fr_1fr] gap-2 sm:gap-3 lg:gap-4 items-center">

          {/* ── LEFT TALL IMAGE ── */}
          <div className="relative w-full h-[180px] sm:h-[280px] lg:h-[390px] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm">
            <Image
              src={restaurantImages[0]}
              alt="Restaurant left view"
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* ── CENTER BLOCK (Top 2 images, Center Text, Bottom 2 images) ── */}
          <div className="flex flex-col gap-2 sm:gap-3 w-full">

            {/* Top 2 Images Row */}
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2 lg:gap-3 h-[95px] sm:h-[135px] lg:h-[170px]">
              <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={restaurantImages[1]}
                  alt="Restaurant interior top left"
                  fill
                  sizes="25vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={restaurantImages[2]}
                  alt="Restaurant interior top right"
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
                MODERN ORGANIC
              </p>
              <h3
                className="text-[#111111] font-normal tracking-tight text-center leading-snug"
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(14px, 2vw, 24px)',
                }}
              >
                Rustic Industrial Minimalist Restaurant
              </h3>
            </div>

            {/* Bottom 2 Images Row */}
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2 lg:gap-3 h-[95px] sm:h-[135px] lg:h-[170px]">
              <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={restaurantImages[3]}
                  alt="Restaurant interior bottom left"
                  fill
                  sizes="25vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={restaurantImages[4]}
                  alt="Restaurant interior bottom right"
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
              src={restaurantImages[5]}
              alt="Restaurant right view"
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
