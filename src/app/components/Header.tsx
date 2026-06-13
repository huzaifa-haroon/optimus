import { useState } from "react";
import { NavLink } from "react-router";
import { Menu, X, Triangle } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Services", to: "/#services" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/#contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2.5 select-none">
          <div className="relative w-9 h-9 flex items-center justify-center">
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: "18px solid transparent",
                borderRight: "18px solid transparent",
                borderBottom: "32px solid #E8621A",
              }}
            />
          </div>
          <span className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: "1.125rem", letterSpacing: "-0.01em" }}>
            OPTIMUS<span style={{ color: "#E8621A" }}>PK</span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `text-sm transition-colors ${
                  isActive && link.to !== "/#about" && link.to !== "/#services" && link.to !== "/#contact"
                    ? "text-[#E8621A]"
                    : "text-[#444] hover:text-[#E8621A]"
                }`
              }
              style={{ fontWeight: 500 }}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/#contact"
            className="px-5 py-2 rounded text-white text-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#E8621A", fontWeight: 600 }}
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-[#333]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-[#444] hover:text-[#E8621A]"
              style={{ fontWeight: 500 }}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="/#contact"
            className="w-fit px-5 py-2 rounded text-white text-sm"
            style={{ backgroundColor: "#E8621A", fontWeight: 600 }}
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
}
