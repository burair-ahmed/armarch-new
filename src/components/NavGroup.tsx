import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

interface NavGroupProps {
  items: NavItem[];
  align?: "left" | "right";
}

export default function NavGroup({ items, align = "left" }: NavGroupProps) {
  return (
    <nav
      aria-label={align === "left" ? "Primary navigation" : "Secondary navigation"}
      className={`flex items-center gap-6 md:gap-8 ${
        align === "right" ? "justify-end" : "justify-start"
      }`}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`
            text-[12px] md:text-[13px] font-medium text-black
            hover:opacity-60 transition-opacity duration-200
            whitespace-nowrap relative group
          `}
        >
          {item.label}
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full" />
        </Link>
      ))}
    </nav>
  );
}
