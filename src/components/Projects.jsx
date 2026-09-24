const IconCode = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="8 6 2 12 8 18" />
    <polyline points="16 6 22 12 16 18" />
  </svg>
);

const IconDoc = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <polyline points="14 3 14 8 19 8" />
  </svg>
);

const IconPlay = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <polygon points="10 8.5 16 12 10 15.5" fill="currentColor" stroke="none" />
  </svg>
);

const IconEye = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const IconFigma = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M8 3h4a3 3 0 0 1 0 6H8z" />
    <path d="M12 3h4a3 3 0 0 1 0 6h-4z" />
    <path d="M8 9h4v6H8a3 3 0 0 1 0-6z" />
    <path d="M8 15h4v3a3 3 0 1 1-4-2.8z" />
    <circle cx="16" cy="12" r="3" />
  </svg>
);

const icons = {
  code: IconCode,
  doc: IconDoc,
  play: IconPlay,
  eye: IconEye,
  figma: IconFigma,
};

const accents = {
  primary: {
    badge: "bg-Primary/10 text-Primary",
    firstTag: "text-Primary",
  },
  secondary: {
    badge: "bg-Secondary/10 text-Secondary",
    firstTag: "text-Secondary",
  },
  tertiary: {
    badge: "bg-Tertiary/10 text-Tertiary",
    firstTag: "text-Tertiary",
  },
};

const projects = [
  {
    id: "WEB-0x01",
    category: "Fullstack Website",
    accent: "secondary",
    title: "NessUP — Sistem Informasi Event Kampus",
    description:
      "Aplikasi sistem informasi event skala universitas. Panitia dapat membuat event, membuka pendaftaran peserta, dan mengelola presensi lewat QR code. Dilengkapi dashboard statistik dan sertifikat digital otomatis.",
    stack: ["Laravel", "React", "Supabase", "Tailwind CSS"],
    links: [
      { label: "Repositori GitHub", href: "#", icon: "code", primary: true },
      { label: "Live Demo", href: "#", icon: "play" },
    ],
  },
  {
    id: "UIX-0x02",
    category: "UI/UX Design",
    accent: "primary",
    title: "ANSI — Desain Pendaftaran Mahasiswa Baru",
    description:
      "Perancangan UI/UX alur pendaftaran mahasiswa baru: mulai dari riset pengguna, user flow, wireframe, hingga prototype interaktif berfidelitas tinggi yang sudah diuji usability dengan calon mahasiswa.",
    stack: ["Figma", "User Flow", "Wireframe", "Prototype"],
    links: [
      { label: "Lihat di Figma", href: "#", icon: "figma", primary: true },
      { label: "Case Study", href: "#", icon: "eye" },
    ],
  },
  {
    id: "MOB-0x03",
    category: "Mobile App",
    accent: "tertiary",
    title: "TaniLink — Marketplace Hasil Tani Lokal",
    description:
      "Aplikasi mobile yang menghubungkan petani langsung dengan pembeli. Fitur katalog produk, chat real-time, pelacakan pesanan, dan pembayaran terintegrasi melalui payment gateway lokal.",
    stack: ["Flutter", "Firebase", "Midtrans", "Google Maps API"],
    links: [
      { label: "Repositori GitHub", href: "#", icon: "code", primary: true },
      { label: "Dokumentasi", href: "#", icon: "doc" },
    ],
  },
  {
    id: "API-0x04",
    category: "Backend / REST API",
    accent: "primary",
    title: "PustakaKu — REST API Perpustakaan Digital",
    description:
      "REST API manajemen peminjaman buku dengan autentikasi JWT, role-based access, pagination, dan pencarian full-text. Terdokumentasi lengkap dengan Swagger serta dilindungi rate limiting berbasis Redis.",
    stack: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
    links: [
      { label: "Repositori GitHub", href: "#", icon: "code", primary: true },
      { label: "Dokumen API", href: "#", icon: "doc" },
    ],
  },
];

const ProjectCard = ({ project }) => {
  const accent = accents[project.accent];

  return (
    <article className="flex flex-col border border-bgBorder bg-bgBorderDark/40 p-7 transition-colors hover:border-Secondary/40">
      <div className="flex items-center justify-between gap-4">
        <span
          className={`px-2 py-0.5 font-SpaceMono text-[10px] font-bold uppercase tracking-wider ${accent.badge}`}
        >
          {project.category}
        </span>
        <span className="font-SpaceMono text-xs text-slate-400">
          {project.id}
        </span>
      </div>

      <h3 className="mt-5 font-SpaceMono text-xl font-bold leading-snug text-slate-100">
        {project.title}
      </h3>

      <p className="mt-3 font-HankenGrotesk text-sm leading-relaxed text-slate-400">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech, i) => (
          <li
            key={tech}
            className={`bg-bgBorderDark px-2 py-1 font-SpaceMono text-xs ${
              i === 0 ? accent.firstTag : "text-slate-300"
            }`}
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 pt-6">
        {project.links.map((link) => {
          const Icon = icons[link.icon];
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1.5 font-SpaceMono text-[11px] font-bold uppercase tracking-wider transition-colors ${
                link.primary
                  ? "text-Secondary hover:text-Tertiary"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <Icon />
              {link.label}
              <span aria-hidden="true">&gt;</span>
            </a>
          );
        })}
      </div>
    </article>
  );
};

const Projects2 = () => {
  return (
    <section
      id="projects"
      className=" bg-bgNeutral font-HankenGrotesk text-slate-200"
    >
      <div>
        {/* Header */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-SpaceMono text-3xl font-bold uppercase tracking-widest text-slate-300 md:text-4xl">
            Proyek &amp; Eksplorasi
          </h2>
          <span className="font-SpaceMono text-[11px] uppercase tracking-wider text-slate-500">
            Filter: {String(projects.length).padStart(2, "0")} proyek pilihan
          </span>
        </div>

        {/* Grid kartu */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects2;

