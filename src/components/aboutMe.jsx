import pictMe from '../assets/meandmonkey.png';

const AboutMe = ()=> {
    return(
        <div className='flex justify-between'>
            <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-2'>
                    <h1 className="font-bold font-SpaceMono text-6xl">ADHITYA RAYNAR <span className="text-Tertiary drop-shadow-[0px_0px_15px_rgba(0,240,255,0.6)]">INDRA</span>STA</h1>
                    
                    <p className='text-Primary'>Mahasiswa Sistem Informasi yang memadukan keahlian <span className='font-medium text-Secondary'>Full-Stack Software Engineering</span> dengan minat kuat pada dunia Cyber Security. Keahlian lainnya ialah pemahaman kuat dalam Networking baik dari pengalamatan hingga infrastrukturnya</p>
                </div>
                
                <div className='flex gap-4'>
                    <div className='bg-Secondary drop-shadow-[0px_0px_15px_rgba(0,240,255,0.5)]'>
                        <p className='font-SpaceMono font-semibold text-bgNeutral py-3 min-w-48 text-center'>LIHAT PROYEK</p>
                    </div>
                    <div className='bg-bgBorder'>
                        <p className='font-SpaceMono font-semibold py-3 min-w-48 text-center'>CV/RESUME</p>
                    </div>
                </div>
            </div>
            <div className='min-w-2/5 flex justify-center'>
                <img src={pictMe} alt="me" className='h-75 w-75 object-cover rounded-full' />
            </div>
        </div>
    );
};

export default AboutMe;