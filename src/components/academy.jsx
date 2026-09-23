const Academy = ()=> {
    return(
        <div>
            <h1 className="font-bold text-4xl font-SpaceMono">PENDIDIKAN & VALIDASI KEAHLIAN</h1>
            <div className="bg-bgBorder p-7">
                <div>
                    <div className="flex justify-between">
                        <p className="font-SpaceMono font-medium text-Primary text-xs">SARJANA (S1) - ON GOING</p>
                        <p className="font-SpaceMono font-medium text-Primary text-xs">2024 - Now</p>
                    </div>
                    <h1 className="text-xl font-SpaceMono">S1 Sistem Informasi - FMIPA</h1>
                    <p>Mendalami rancang bangun arsitektur sistem skala besar, tata kelola keamanan informasi (ISO 27001), rekayasa perangkat lunak berorientasi keamanan, dan sistem manajemen basis data relasional tervirtualisasi.</p>
                    <div>
                        <div>
                            <p>INDEKS PRESTASI KUMULATIF</p>
                            <h2>3.85 / 4.00</h2>
                        </div>
                        <div>
                            <p>Peran Tambahan</p>
                            <h2>Penghabis nasi prasmanan</h2>
                        </div>
                    </div>
                    <div>
                        <p>Fokus Mata Kuliah Utama:</p>
                        <h2>Pemrograman, Cyber Security, Management</h2>
                    </div>
                </div>
                <div>
                    <p>Side sebelah</p>
                    <div>
                        {/* icon */}
                        <div>
                            <h2>Cisco Cybersecurity Essentials</h2>
                            <p>Network Security, Information Security, Threat Assessment</p>
                        </div>
                        <div>
                            <p>TERVERIFIKASI</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Academy;