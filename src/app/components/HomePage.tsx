import { ArrowRight, CheckCircle, Building2, HardHat, Wrench, BarChart3, Users, Award, Clock, ChevronRight } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "General Construction",
    desc: "Full-scale commercial and residential construction with precision and quality craftsmanship.",
  },
  {
    icon: HardHat,
    title: "Structural Engineering",
    desc: "Expert structural analysis and design ensuring safe, durable, and code-compliant buildings.",
  },
  {
    icon: Wrench,
    title: "Renovation & Remodeling",
    desc: "Transform existing spaces with thoughtful redesigns, upgrades, and modern finishes.",
  },
  {
    icon: BarChart3,
    title: "Project Management",
    desc: "End-to-end project oversight keeping timelines, budgets, and quality on track.",
  },
  {
    icon: Users,
    title: "Interior Design",
    desc: "Functional and aesthetic interior solutions tailored to your vision and lifestyle.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    desc: "Rigorous quality control at every stage to deliver results that exceed expectations.",
  },
];

const stats = [
  { value: "350+", label: "Projects Completed" },
  { value: "40+", label: "Expert Engineers" },
  { value: "15+", label: "Years of Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

const team = [
  {
    name: "Shoaib Khan Jadoon",
    role: "Founder & CEO",
    img: "https://theoptimuspk.com/wp-content/uploads/2025/07/e2r-790x1024.png",
  },
  {
    name: "Sara Malik",
    role: "Project Manager",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Bilal Raza",
    role: "Structural Engineer",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Hina Qureshi",
    role: "Interior Designer",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
];

const recentProjects = [
  {
    title: "Skyline Tower Complex",
    category: "Commercial",
    img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&h=500&fit=crop",
  },
  {
    title: "Al-Noor Residential",
    category: "Residential",
    img: "https://images.unsplash.com/photo-1453586857165-eb78d44460ca?w=800&h=500&fit=crop",
  },
  {
    title: "Harbor Bridge",
    category: "Infrastructure",
    img: "https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?w=800&h=500&fit=crop",
  },
];

export function HomePage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?w=1920&h=1080&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(15,15,15,0.72)" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-sm mb-6"
              style={{ backgroundColor: "#E8621A22", color: "#E8621A", border: "1px solid #E8621A44" }}
            >
              <span style={{ fontWeight: 600 }}>✦ Trusted Construction Partner</span>
            </div>
            <h1
              className="text-white mb-5 leading-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.75rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}
            >
              Making Your Vision{" "}
              <span style={{ color: "#E8621A" }}>Become a Reality</span>
            </h1>
            <p className="mb-8 text-base leading-relaxed" style={{ color: "#D1D5DB", maxWidth: "480px" }}>
              From groundbreaking to grand opening — Optimus PK delivers exceptional construction and engineering solutions built to last generations.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded text-white text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#E8621A", fontWeight: 600 }}
              >
                View Our Projects <ArrowRight size={16} />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm transition-colors hover:bg-white/10"
                style={{ color: "white", border: "1px solid rgba(255,255,255,0.35)", fontWeight: 600 }}
              >
                Learn More <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60">
          <div
            className="w-5 h-8 rounded-full border-2 border-white/40 flex items-start justify-center pt-1.5"
          >
            <div
              className="w-1 h-2 rounded-full bg-white/70"
              style={{ animation: "bounce 1.5s infinite" }}
            />
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-sm mb-3" style={{ color: "#E8621A", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              About Us
            </p>
            <h2 className="mb-5 text-[#1A1A1A]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
              General Diagnostics &amp; Engineering Excellence
            </h2>
            <p className="mb-6 text-base leading-relaxed" style={{ color: "#555" }}>
              Optimus PK is a full-service construction and engineering firm with over 15 years of proven expertise. We blend modern techniques with rigorous quality standards to deliver projects on time and within budget.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                "ISO-certified construction processes",
                "Experienced team of 40+ engineers",
                "Transparent project timelines & budgets",
                "Post-completion support & warranty",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "#444" }}>
                  <CheckCircle size={17} style={{ color: "#E8621A" }} />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-white text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#E8621A", fontWeight: 600 }}
            >
              Get in Touch <ArrowRight size={15} />
            </a>
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?w=600&h=400&fit=crop"
              alt="Construction site"
              className="rounded-xl w-full object-cover"
              style={{ height: "220px" }}
            />
            <img
              src="https://images.unsplash.com/photo-1591955506264-3f5a6834570a?w=600&h=400&fit=crop"
              alt="Building"
              className="rounded-xl w-full object-cover mt-8"
              style={{ height: "220px" }}
            />
            <img
              src="https://images.unsplash.com/photo-1527335988388-b40ee248d80c?w=600&h=400&fit=crop"
              alt="Engineering"
              className="rounded-xl w-full object-cover"
              style={{ height: "180px" }}
            />
            <img
              src="https://images.unsplash.com/photo-1625447521754-764d517239e6?w=600&h=400&fit=crop"
              alt="Architecture"
              className="rounded-xl w-full object-cover mt-8"
              style={{ height: "180px" }}
            />
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-20" style={{ backgroundColor: "#F7F7F7" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm mb-2" style={{ color: "#E8621A", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              What We Do
            </p>
            <h2 className="text-[#1A1A1A]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
              Our Core Services
            </h2>
            <p className="mt-3 text-sm max-w-lg mx-auto" style={{ color: "#666" }}>
              Comprehensive construction and engineering solutions for every stage of your project lifecycle.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-6 flex flex-col gap-4 group cursor-pointer transition-shadow hover:shadow-lg"
                style={{ border: "1px solid #EBEBEB" }}
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center transition-colors group-hover:bg-[#E8621A]"
                  style={{ backgroundColor: "#FFF1EB" }}
                >
                  <Icon size={20} style={{ color: "#E8621A" }} className="group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-[#1A1A1A]" style={{ fontWeight: 700 }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                  {desc}
                </p>
                <a href="#" className="flex items-center gap-1 text-sm mt-auto transition-colors hover:gap-2" style={{ color: "#E8621A", fontWeight: 600 }}>
                  Learn more <ChevronRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Banner ── */}
      <section style={{ backgroundColor: "#E8621A" }} className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1 }}>
                {value}
              </span>
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Recent Projects ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-sm mb-2" style={{ color: "#E8621A", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Portfolio
              </p>
              <h2 className="text-[#1A1A1A]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
                Featured Projects
              </h2>
            </div>
            <a
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm transition-colors hover:opacity-80"
              style={{ color: "#E8621A", fontWeight: 600 }}
            >
              View All Projects <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {recentProjects.map(({ title, category, img }) => (
              <div
                key={title}
                className="group relative rounded-xl overflow-hidden cursor-pointer"
                style={{ border: "1px solid #EBEBEB" }}
              >
                <div className="overflow-hidden" style={{ height: "220px" }}>
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col gap-1">
                  <span
                    className="text-xs px-2 py-0.5 rounded w-fit"
                    style={{ backgroundColor: "#FFF1EB", color: "#E8621A", fontWeight: 600 }}
                  >
                    {category}
                  </span>
                  <h3 className="text-[#1A1A1A]" style={{ fontWeight: 700 }}>
                    {title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-20" style={{ backgroundColor: "#F7F7F7" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm mb-2" style={{ color: "#E8621A", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Our Team
            </p>
            <h2 className="text-[#1A1A1A]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
              Meet the Experts
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ name, role, img }) => (
              <div key={name} className="bg-white rounded-xl overflow-hidden group" style={{ border: "1px solid #EBEBEB" }}>
                <div className="overflow-hidden" style={{ height: "240px" }}>
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 flex flex-col gap-0.5">
                  <h3 className="text-[#1A1A1A]" style={{ fontWeight: 700 }}>
                    {name}
                  </h3>
                  <p className="text-sm" style={{ color: "#E8621A", fontWeight: 500 }}>
                    {role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8"
            style={{ backgroundColor: "#1A1A1A" }}
          >
            <div className="max-w-lg">
              <h2 className="text-white mb-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
                Ready to Start Your Project?
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "#9CA3AF" }}>
                Contact our team today for a free consultation and project estimate. Let's build something great together.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href="mailto:info@optimuspk.com"
                className="px-6 py-3 rounded text-white text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#E8621A", fontWeight: 600 }}
              >
                Email Us
              </a>
              <a
                href="tel:+923001234567"
                className="px-6 py-3 rounded text-sm transition-colors hover:bg-white/10"
                style={{ color: "white", border: "1px solid rgba(255,255,255,0.25)", fontWeight: 600 }}
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
