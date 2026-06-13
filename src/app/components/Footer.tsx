import { NavLink } from "react-router";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#1A1A1A" }} className="text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: "16px solid transparent",
                borderRight: "16px solid transparent",
                borderBottom: "28px solid #E8621A",
              }}
            />
            <span className="text-white" style={{ fontWeight: 700, fontSize: "1.05rem", letterSpacing: "-0.01em" }}>
              OPTIMUS<span style={{ color: "#E8621A" }}>PK</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "#9CA3AF" }}>
            Building excellence through innovation and precision. Your trusted partner for all construction and engineering needs.
          </p>
          <div className="flex gap-3 mt-1">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded flex items-center justify-center transition-colors hover:bg-[#E8621A]"
                style={{ backgroundColor: "#2A2A2A" }}
              >
                <Icon size={15} className="text-gray-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white" style={{ fontWeight: 600 }}>Quick Links</h4>
          <ul className="flex flex-col gap-2.5">
            {["Home", "About Us", "Services", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-sm transition-colors hover:text-[#E8621A]"
                  style={{ color: "#9CA3AF" }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white" style={{ fontWeight: 600 }}>Our Services</h4>
          <ul className="flex flex-col gap-2.5">
            {[
              "General Construction",
              "Structural Engineering",
              "Interior Design",
              "Project Management",
              "Renovation & Remodeling",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-sm transition-colors hover:text-[#E8621A]"
                  style={{ color: "#9CA3AF" }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white" style={{ fontWeight: 600 }}>Contact Us</h4>
          <ul className="flex flex-col gap-3">
            {[
              { Icon: MapPin, text: "123 Construction Ave, Karachi, Pakistan" },
              { Icon: Phone, text: "+92 300 123 4567" },
              { Icon: Mail, text: "info@optimuspk.com" },
            ].map(({ Icon, text }) => (
              <li key={text} className="flex items-start gap-3 text-sm" style={{ color: "#9CA3AF" }}>
                <Icon size={15} className="mt-0.5 shrink-0" style={{ color: "#E8621A" }} />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #2A2A2A" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs" style={{ color: "#6B7280" }}>
            © 2026 OptimusPK. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a key={item} href="#" className="text-xs hover:text-[#E8621A] transition-colors" style={{ color: "#6B7280" }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
