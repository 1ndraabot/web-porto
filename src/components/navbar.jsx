import '@fontsource/space-mono';
import '../index.css';

const Navbar = ()=> {
    return (
        <div className='flex items-center justify-between py-5 font-HankenGrotesk'>
            <ul className='flex gap-5 font-semibold'>
                <li className="opacity-60 hover:opacity-100 transition-opacity duration-300 ease-in-out">ABOUT</li>
                <li className="opacity-60 hover:opacity-100 transition-opacity duration-300 ease-in-out">PENDIDIKAN</li>
                <li className="opacity-60 hover:opacity-100 transition-opacity duration-300 ease-in-out">PROJECTS</li>
                <li className="opacity-60 hover:opacity-100 transition-opacity duration-300 ease-in-out">KEAHLIAN</li>
                <li className="opacity-60 hover:opacity-100 transition-opacity duration-300 ease-in-out">CONTACT</li>
            </ul>

            <div>
                <h1 className='px-4 py-2 bg-Secondary text-bgNeutral font-bold font-SpaceMono hover:bg-Tertiary transition-all duration-200'>RESUME/CV</h1>
            </div>
        </div>
    );
};

export default Navbar;