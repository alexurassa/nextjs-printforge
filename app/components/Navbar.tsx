"use client";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import PFLogo from "@/public/printforge-logo.svg";
import PFLogoIcon from "@/public/printforge-logo-icon.svg";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between px-6 py-4">
        <Link href="/">
          <div className="relative cursor-pointer">
            {/* Desktop logo */}
            <Image
              src={PFLogo}
              alt="PrintForge Logo"
              className="w-[80px] h-auto hidden md:block"
            />
            {/* Mobile logo */}
            <Image
              src={PFLogoIcon}
              alt="PrintForge Logo"
              className="w-[40px] h-auto block md:hidden"
            />
          </div>
        </Link>
        <ul className="flex items-center gap-2.5">
          <NavLink
            href="/3d-models"
            isActive={pathname.startsWith("/3d-models")}
          >
            3D Models
          </NavLink>
          <NavLink href="/about" isActive={pathname.startsWith("/about")}>
            About
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
