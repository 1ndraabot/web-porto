import Navbar from './components/navbar';
import '@fontsource/hanken-grotesk';
import '@fontsource/space-mono';
import './index.css';
import './App.css';
import Projects2 from './components/Projects';
import AboutMe2 from './components/AboutMe2';
import Academy2 from './components/Academy2';

function App() {
  return (
    <>
      <div className='flex flex-col gap-10'>
        <Navbar />
        <AboutMe2 />
        <Academy2 />
        <Projects2 /> 
      </div>
    </>
  )
}

export default App
