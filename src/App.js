import { useEffect, useState } from 'react';
import Navbar from './scenes/Navbar';
import DotGroup from './scenes/DotGroup';
import Landing from './scenes/Landing'
import MySkills from './scenes/MySkills';
import Projects from './scenes/Projects';
import Testimonials from './scenes/Testimonials';
import Contact from './scenes/Contact';
import Footer from './scenes/Footer';
import LineGradient from './components/LineGradient'
import useMediaQuery from './hooks/useMediaQuery';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  //isAboveMediumScreens verifica si el que esta mirando tiene una anchura mayor o menor a 1060px
  // eslint-disable-next-line no-unused-vars
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      //revisa si la ventana que nos da el desplazamiento de Y y si es 0 es true si no es false
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    //y agregamos ese detector de eventos a la ventana de lo contrario no sucede
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    //y pasamos una matriz vacia para que esto se use como esta abajo []
    //el efecto basicamente se ejecuta cuando el componente esta cargado
  }, []);

  return <div className="app bg-deep-blue">
    <Navbar 
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage}
      setSelectedPage= {setSelectedPage}
    />
    <div className="w-5/6 mx-auto md:h-full">
      {isAboveMediumScreens && (
        //los puntos de navegacion que apareceran a la derecha del portfolio
        <DotGroup 
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      )}
      <Landing setSelectedPage={setSelectedPage} />
    </div>
    <LineGradient />
    <div className='w-5/6 mx-auto mb-32 md:h-full'>
        <MySkills />
    </div>
    <LineGradient />
    <div className='w-5/6 mx-auto'>
        <Projects />
    </div>
    <LineGradient />
    <div className='w-5/6 mx-auto md:h-full'>
        <Testimonials />
    </div>
    <LineGradient />
    <div className='w-5/6 mx-auto md:h-full'>
        <Contact />
    </div>
      <Footer />
  </div>
}

export default App;
