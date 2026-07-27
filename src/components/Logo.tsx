import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" aria-label="ArmArch – go to homepage" className="flex-shrink-0">
      <Image
        src="/armarch-logo.png"
        alt="ArmArch logo"
        width={110}
        height={80}
        priority
        className="object-contain"
        style={{ width: "auto", height: "80px" }}
      />
    </Link>
  );
}
