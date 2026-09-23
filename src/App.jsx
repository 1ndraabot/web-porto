import Navbar from './components/navbar';
import AboutMe from './components/aboutMe';
import Academy from './components/academy';
import Projects from './components/project';
import '@fontsource/hanken-grotesk';
import '@fontsource/space-mono';
import './index.css';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <Academy />
      <Projects />
    </>
  )
}

export default App
