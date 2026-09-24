import pictMe from '../assets/meandmonkey.png';

/* ---------- Ikon kecil (sama seperti di Projects) ---------- */
const IconArrowDown = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="12" y1="5" x2="12" y2="19" />
    <polyline points="19 12 12 19 5 12" />
  </svg>
);

const IconDoc = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <polyline points="14 3 14 8 19 8" />
  </svg>
);

/* Fokus keahlian — tampil sebagai tag, sama seperti tech stack di Projects */
const focus = ['Full-Stack', 'Cyber Security', 'Networking'];

const AboutMe2 = () => {
    return (
        <section className='flex flex-col-reverse items-center justify-between gap-10 md:flex-row'>
            {/* Kiri: teks */}
            <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-3'>
                    <h1 className="font-bold font-SpaceMono text-4xl md:text-6xl">ADHITYA RAYNAR <span className="text-Tertiary drop-shadow-[0px_0px_15px_rgba(0,240,255,0.6)]">INDRA</span>STA</h1>

                    <p className='text-Primary leading-relaxed'>Mahasiswa Sistem Informasi yang memadukan keahlian <span className='font-medium text-Secondary'>Full-Stack Software Engineering</span> dengan minat kuat pada dunia Cyber Security. Keahlian lainnya ialah pemahaman kuat dalam Networking baik dari pengalamatan hingga infrastrukturnya</p>
                </div>

                {/* Tag fokus */}
                <ul className='flex flex-wrap gap-2'>
                    {focus.map((item) => (
                        <li key={item} className='bg-bgBorderDark px-2 py-1 font-SpaceMono text-xs text-Secondary'>
                            {item}
                        </li>
                    ))}
                </ul>

                {/* Tombol */}
                <div className='flex flex-wrap gap-4'>
                    <a
                        href='#projects'
                        className='inline-flex min-w-48 items-center justify-center gap-2 border border-Secondary bg-Secondary py-3 font-SpaceMono font-semibold text-bgNeutral drop-shadow-[0px_0px_15px_rgba(0,240,255,0.5)]'
                    >
                        <IconArrowDown />
                        LIHAT PROYEK
                    </a>
                    {/* Gaya kartu: gelap + garis tepi, hover garis menyala */}
                    <a
                        href='#'
                        className='inline-flex min-w-48 items-center justify-center gap-2 border border-bgBorder bg-bgBorderDark/40 py-3 font-SpaceMono font-semibold text-Secondary transition-colors hover:border-Secondary/40'
                    >
                        <IconDoc />
                        CV/RESUME
                    </a>
                </div>
            </div>

            {/* Kanan: foto dalam bingkai bergaya kartu */}
            <div className='flex md:min-w-2/5 justify-center'>
                <div className='rounded-full border border-bgBorder bg-bgBorderDark/40 p-3 transition-colors hover:border-Secondary/40'>
                    <img
                        src={pictMe}
                        alt="me"
                        className='h-75 w-75 shrink-0 rounded-full object-cover'
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutMe2;
