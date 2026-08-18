import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" aria-label="ArmArch – go to homepage" className="flex-shrink-0 inline-block">
      <Image
        src="/logo.webp"
        alt="ArmArch logo"
        width={220}
        height={80}
        priority
        className="object-contain w-auto h-12 sm:h-14 md:h-16 transition-opacity duration-200 hover:opacity-80"
      />
    </Link>
  );
}
