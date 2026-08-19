import Logo from "@/components/Logo";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4 sm:py-6 px-4 sm:px-6 flex justify-center items-center">
      <nav
        aria-label="Main navigation"
        className="flex items-center justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 max-w-full overflow-x-auto no-scrollbar"
      >
        {/* Left items */}
        <span className="text-[11px] sm:text-[13px] font-medium text-black whitespace-nowrap cursor-default">
          Architectural Designs
        </span>

        <span className="text-[11px] sm:text-[13px] font-medium text-black whitespace-nowrap cursor-default">
          CGI Visualization
        </span>

        {/* Centered Logo */}
        <div className="flex-shrink-0 px-2 sm:px-4">
          <Logo />
        </div>

        {/* Right items */}
        <span className="text-[11px] sm:text-[13px] font-medium text-black whitespace-nowrap cursor-default">
          VR Walk Throughs
        </span>

        <span className="text-[11px] sm:text-[13px] font-medium text-black whitespace-nowrap cursor-default">
          Consultancy
        </span>
      </nav>
    </header>
  );
}
