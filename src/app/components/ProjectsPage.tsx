import { useState } from "react";
import { ArrowRight, MapPin, Calendar } from "lucide-react";

const categories = ["All", "Commercial", "Residential", "Infrastructure", "Industrial", "Interior"];

const projects = [
  {
    title: "Skyline Tower Complex",
    category: "Commercial",
    location: "Karachi, Pakistan",
    year: "2024",
    desc: "A 25-storey mixed-use tower with retail floors, premium offices, and sky-garden terraces.",
    img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    title: "Al-Noor Residential Estate",
    category: "Residential",
    location: "Lahore, Pakistan",
    year: "2023",
    desc: "A gated community of 120 luxury villas with shared amenities and landscaped green belts.",
    img: "https://images.unsplash.com/photo-1453586857165-eb78d44460ca?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    title: "Harbor Bridge Expansion",
    category: "Infrastructure",
    location: "Gwadar, Pakistan",
    year: "2023",
    desc: "Structural expansion of a 1.2km coastal bridge to accommodate increased port traffic.",
    img: "https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    title: "Vertex Industrial Park",
    category: "Industrial",
    location: "Faisalabad, Pakistan",
    year: "2022",
    desc: "A 50-acre industrial complex housing manufacturing units, warehousing, and logistics hubs.",
    img: "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    title: "Pearl Heights Apartments",
    category: "Residential",
    location: "Islamabad, Pakistan",
    year: "2024",
    desc: "Modern 18-storey apartment tower with panoramic mountain views and smart home systems.",
    img: "https://images.unsplash.com/photo-1625447521754-764d517239e6?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    title: "Crescent Mall Renovation",
    category: "Interior",
    location: "Karachi, Pakistan",
    year: "2023",
    desc: "Complete interior overhaul of a 300,000 sqft shopping mall, modernising retail and dining zones.",
    img: "https://images.unsplash.com/photo-1542438814-524d0640ecdd?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    title: "Blue Lagoon Hotel",
    category: "Commercial",
    location: "Lahore, Pakistan",
    year: "2022",
    desc: "A 5-star 200-room hotel with a rooftop pool, conference centre, and signature restaurants.",
    img: "https://images.unsplash.com/photo-1546629313-ea9c287a8b9f?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    title: "Motorway Interchange",
    category: "Infrastructure",
    location: "Multan, Pakistan",
    year: "2024",
    desc: "Design and construction of a multi-level motorway interchange improving regional connectivity.",
    img: "https://images.unsplash.com/photo-1546414701-81cc6963c67f?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    title: "Sunrise Villas Phase II",
    category: "Residential",
    location: "Islamabad, Pakistan",
    year: "2022",
    desc: "80 smart eco-villas powered by solar energy with rainwater harvesting systems.",
    img: "https://images.unsplash.com/photo-1534138807944-7b5dd2954e1a?w=800&h=600&fit=crop",
    featured: false,
  },
];

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="pt-16">
      {/* Hero banner */}
      <section
        className="relative flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1527335988388-b40ee248d80c?w=1920&h=600&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "320px",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(15,15,15,0.72)" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <p
            className="text-sm mb-3"
            style={{ color: "#E8621A", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}
          >
            Portfolio
          </p>
          <h1
            className="text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.15 }}
          >
            Our Projects
          </h1>
          <p className="mt-3 text-sm" style={{ color: "#D1D5DB", maxWidth: "420px" }}>
            Explore our portfolio of completed and ongoing projects across Pakistan.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="bg-white sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="shrink-0 px-4 py-1.5 rounded-full text-sm transition-colors"
              style={
                activeCategory === cat
                  ? { backgroundColor: "#E8621A", color: "white", fontWeight: 600 }
                  : { backgroundColor: "#F3F3F3", color: "#555", fontWeight: 500 }
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16" style={{ backgroundColor: "#F7F7F7" }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm mb-8" style={{ color: "#888" }}>
            Showing{" "}
            <span style={{ color: "#1A1A1A", fontWeight: 600 }}>{filtered.length}</span>{" "}
            {filtered.length === 1 ? "project" : "projects"}
            {activeCategory !== "All" && ` in ${activeCategory}`}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(({ title, category, location, year, desc, img, featured }) => (
              <div
                key={title}
                className="bg-white rounded-xl overflow-hidden group cursor-pointer transition-shadow hover:shadow-xl flex flex-col"
                style={{ border: "1px solid #EBEBEB" }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: "220px" }}>
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: "#E8621A", color: "white", fontWeight: 600 }}
                    >
                      {category}
                    </span>
                    {featured && (
                      <span
                        className="text-xs px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: "#1A1A1A", color: "white", fontWeight: 600 }}
                      >
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-[#1A1A1A]" style={{ fontWeight: 700, lineHeight: 1.3 }}>
                      {title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="flex items-center gap-1.5 text-xs" style={{ color: "#888" }}>
                      <MapPin size={12} style={{ color: "#E8621A" }} />
                      {location}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs" style={{ color: "#888" }}>
                      <Calendar size={12} style={{ color: "#E8621A" }} />
                      {year}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                    {desc}
                  </p>

                  <a
                    href="#"
                    className="flex items-center gap-1 text-sm mt-auto pt-1 transition-colors hover:gap-2"
                    style={{ color: "#E8621A", fontWeight: 600 }}
                  >
                    View Details <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p style={{ color: "#888" }}>No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
            style={{ backgroundColor: "#1A1A1A" }}
          >
            <div className="max-w-lg">
              <h2
                className="text-white mb-3"
                style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 800, letterSpacing: "-0.02em" }}
              >
                Have a Project in Mind?
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "#9CA3AF" }}>
                Let's discuss your vision. Our team is ready to bring your next construction project to life.
              </p>
            </div>
            <a
              href="/#contact"
              className="px-7 py-3 rounded text-white text-sm transition-opacity hover:opacity-90 shrink-0"
              style={{ backgroundColor: "#E8621A", fontWeight: 600 }}
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
