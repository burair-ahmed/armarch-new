import Link from "next/link";
import Logo from "@/components/Logo";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4 sm:py-6 px-4 sm:px-6 flex justify-center items-center">
      <nav
        aria-label="Main navigation"
        className="flex items-center justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 max-w-full overflow-x-auto no-scrollbar"
      >
        {/* Left items */}
        <Link
          href="/designs"
          className="text-[11px] sm:text-[13px] font-medium text-black hover:opacity-60 transition-opacity duration-200 whitespace-nowrap relative group"
        >
          Architectural Designs
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full" />
        </Link>

        <Link
          href="/cgi-visualization"
          className="text-[11px] sm:text-[13px] font-medium text-black hover:opacity-60 transition-opacity duration-200 whitespace-nowrap relative group"
        >
          CGI Visualization
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full" />
        </Link>

        {/* Centered Logo */}
        <div className="flex-shrink-0 px-2 sm:px-4">
          <Logo />
        </div>

        {/* Right items */}
        <Link
          href="/vr-walkthroughs"
          className="text-[11px] sm:text-[13px] font-medium text-black hover:opacity-60 transition-opacity duration-200 whitespace-nowrap relative group"
        >
          VR Walk Throughs
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full" />
        </Link>

        <Link
          href="/consultancy"
          className="text-[11px] sm:text-[13px] font-medium text-black hover:opacity-60 transition-opacity duration-200 whitespace-nowrap relative group"
        >
          Consultancy
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full" />
        </Link>
      </nav>
    </header>
  );
}
