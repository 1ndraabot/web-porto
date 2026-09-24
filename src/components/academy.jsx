const Academy = ()=> {
    return(
        <div>
            <h1 className="font-bold text-4xl font-SpaceMono">PENDIDIKAN & VALIDASI KEAHLIAN</h1>
            <div className="flex gap-5 mt-4">
                <div className="bg-bgBorder p-7 flex flex-col gap-4 w-4xl">
                    <div className="flex justify-between">
                        <p className="font-SpaceMono font-medium text-Primary text-xs">SARJANA (S1) - ON GOING</p>
                        <p className="font-SpaceMono font-medium text-Primary text-xs">2024 - Now</p>
                    </div>
                    <h1 className="text-3xl font-SpaceMono font-semibold">S1 Sistem Informasi - FMIPA</h1>
                    <p className="text-Primary ">Mendalami rancang bangun arsitektur sistem skala besar, tata kelola keamanan informasi (ISO 27001), rekayasa perangkat lunak berorientasi keamanan, dan sistem manajemen basis data relasional tervirtualisasi.</p>
                    <div className="flex gap-4">
                        <div className="min-w-80 bg-bgBorderDark py-3 ">
                            <p className="text-center font-SpaceMono text-Primary text-xs">INDEKS PRESTASI KUMULATIF</p>
                            <h2 className="text-center font-SpaceMono text-xl font-bold">3.85 / 4.00</h2>
                        </div>
                        <div className="min-w-80 bg-bgBorderDark py-3 ">
                            <p className="text-center font-SpaceMono text-Primary text-xs">Peran Tambahan</p>
                            <h2 className="text-center font-SpaceMono text-xl font-bold">Penghabis nasi prasmanan</h2>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-xs text-Primary font-SpaceMono">Fokus Mata Kuliah Utama:</p>
                        <div className="flex gap-2 font-SpaceMono">
                            <p className="p-2 bg-bgBorderDark">Pemrograman</p>
                            <p className="p-2 bg-bgBorderDark">Cyber Security</p>
                            <p className="p-2 bg-bgBorderDark">Management</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between px-5 py-4 bg-bgBorder items-center">
                        {/* icon */}
                        <div className="flex flex-col gap-1">
                            <h2 className="font-SpaceMono text-xl">Cisco Cybersecurity Essentials</h2>
                            <p className="font-SpaceMono text-Primary text-xs w-64">Network Security, Information Security, Threat Assessment</p>
                        </div>
                        <div className="bg-bgBorderDark h-fit">
                            <p className="px-4 py-1 font-SpaceMono text-Primary text-xs font-bold">TERVERIFIKASI</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Academy;