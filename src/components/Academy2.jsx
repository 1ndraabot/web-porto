import useInView from './useInView';

const IconShield = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3l8 3v6c0 4.5-3.2 8.2-8 9-4.8-.8-8-4.5-8-9V6z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const IconCheck = () => (
  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const focusCourses = ['Pemrograman', 'Cyber Security', 'Management'];

const certifications = [
  {
    name: 'Cisco Cybersecurity Essentials',
    skills: ['Network Security', 'Information Security', 'Threat Assessment'],
  },
];

const Academy2 = () => {
    const [ref, visible] = useInView(0.1);
    const reveal = visible ? 'reveal-scroll is-visible' : 'reveal-scroll';

    return (
        <section id="academy" ref={ref} className="flex flex-col gap-8">
            <h2 className={`${reveal} font-SpaceMono text-4xl font-bold uppercase`}>
                Pendidikan &amp;{' '}
                <span
                    className={`${visible ? 'glow-on' : ''} text-Tertiary drop-shadow-[0px_0px_15px_rgba(0,240,255,0.6)]`}
                    style={{ '--delay': '500ms' }}
                >
                    Validasi Keahlian
                </span>
            </h2>

            <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-3">
                <article
                    className={`${reveal} flex flex-col gap-4 border border-bgBorder bg-bgBorderDark/40 p-7 transition-colors hover:border-Secondary/40 lg:col-span-2`}
                    style={{ '--delay': '120ms' }}
                >
                    <div className="flex items-center justify-between gap-4">
                        <span className="bg-Primary/15 px-2 py-0.5 font-SpaceMono text-[10px] font-bold uppercase tracking-wider text-Primary">
                            Sarjana (S1) - On Going
                        </span>
                        <span className="font-SpaceMono text-xs text-Tertiary">2024 - Now</span>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-SpaceMono text-2xl font-bold leading-snug text-Secondary">
                            S1 Sistem Informasi - FMIPA
                        </h3>
                        <p className="text-sm leading-relaxed text-Primary">
                            Mendalami rancang bangun arsitektur sistem skala besar, tata kelola keamanan informasi (ISO 27001), rekayasa perangkat lunak berorientasi keamanan, dan sistem manajemen basis data relasional tervirtualisasi.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <div className="flex flex-col gap-1 bg-bgBorder px-4 py-3 text-center">
                            <p className="font-SpaceMono text-xs uppercase text-Primary">Indeks Prestasi Kumulatif</p>
                            <p className="font-SpaceMono text-xl font-bold text-Secondary">3.85 / 4.00</p>
                        </div>
                        <div className="flex flex-col gap-1 bg-bgBorder px-4 py-3 text-center">
                            <p className="font-SpaceMono text-xs uppercase text-Primary">Peran Tambahan</p>
                            <p className="font-SpaceMono text-xl font-bold text-Secondary">Penghabis nasi prasmanan</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="font-SpaceMono text-xs text-Primary">Fokus Mata Kuliah Utama:</p>
                        <ul className="flex flex-wrap gap-2">
                            {focusCourses.map((course) => (
                                <li key={course} className="bg-bgBorderDark px-2 py-1 font-SpaceMono text-xs text-Secondary">
                                    {course}
                                </li>
                            ))}
                        </ul>
                    </div>
                </article>

                <div className="flex flex-col gap-5">
                    {certifications.map((cert, i) => (
                        <article
                            key={cert.name}
                            className={`${reveal} flex flex-col gap-4 border border-bgBorder bg-bgBorderDark/40 p-7 transition-colors hover:border-Secondary/40`}
                            style={{ '--delay': `${240 + i * 120}ms` }}
                        >
                            <div className="flex items-center justify-between gap-4">
                                <div className="bg-bgBorderDark p-2 text-Primary">
                                    <IconShield />
                                </div>
                                <span className="inline-flex items-center gap-1 bg-Primary/15 px-2 py-0.5 font-SpaceMono text-[10px] font-bold uppercase tracking-wider text-Primary">
                                    <IconCheck />
                                    Terverifikasi
                                </span>
                            </div>

                            <h3 className="font-SpaceMono text-xl font-bold leading-snug text-Secondary">
                                {cert.name}
                            </h3>

                            <ul className="flex flex-wrap gap-2">
                                {cert.skills.map((skill) => (
                                    <li key={skill} className="bg-bgBorderDark px-2 py-1 font-SpaceMono text-xs text-Secondary">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Academy2;
