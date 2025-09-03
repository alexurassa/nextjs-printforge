import Link from "next/link";
import type { NavLinkProps } from "@/app/types";

export default function NavLink({ href, isActive, children }: NavLinkProps) {
  return (
    <li className="text-sm uppercase">
      <Link
        className={`px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-amber-800 ${
          isActive ? "text-amber-800" : "text-gray-700"
        }`}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
}
