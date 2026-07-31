'use client';

import Image from 'next/image';

const gymImages = [
  '/gym/698836520097221.jpg', // 0: Left tall exterior facade
  '/gym/698842143405253.jpg', // 1: Center top 1 juice bar
  '/gym/698843871880901.jpg', // 2: Center top 2 dark spa room
  '/gym/698845613860997.jpg', // 3: Center top 3 studio
  '/gym/698852341597637.jpg', // 4: Center bottom 1 lockers
  '/gym/698852735096197.jpg', // 5: Center bottom 2 locker bench
  '/gym/698853370246405.jpg', // 6: Center bottom 3 wooden sauna
  '/gym/698853678699909.jpg', // 7: Right tall main workout hall
];

export default function ModernGymSection() {
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
            Community
          </span>
        </div>

        {/* ── MAIN COLLAGE LAYOUT MATCHING 120.png ── */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_2.4fr_1fr] gap-2 sm:gap-3 lg:gap-4 items-center">

          {/* ── LEFT TALL IMAGE ── */}
          <div className="relative w-full h-[180px] sm:h-[280px] lg:h-[390px] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm">
            <Image
              src={gymImages[0]}
              alt="Industrial Gym Exterior"
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
                  src={gymImages[1]}
                  alt="Gym Juice Bar"
                  fill
                  sizes="25vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={gymImages[2]}
                  alt="Gym Spa Room"
                  fill
                  sizes="25vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={gymImages[3]}
                  alt="Gym Studio"
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
                INDUSTRIAL MINIMALIST
              </p>
              <h3
                className="text-[#111111] font-normal tracking-tight text-center leading-snug"
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(14px, 2vw, 24px)',
                }}
              >
                Modern Gym
              </h3>
            </div>

            {/* Bottom 3 Images Row */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 lg:gap-3 h-[90px] sm:h-[130px] lg:h-[165px]">
              <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={gymImages[4]}
                  alt="Gym Lockers"
                  fill
                  sizes="25vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={gymImages[5]}
                  alt="Gym Locker Benches"
                  fill
                  sizes="25vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={gymImages[6]}
                  alt="Gym Sauna"
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
              src={gymImages[7]}
              alt="Gym Main Workout Hall"
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
