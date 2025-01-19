import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-[#000]'>
      <Navbar />
      <div className='relative z-0'>
        
          <Hero />
           <StarsCanvas />
          </div> 
       
        <About />
        <Experience />
        <Tech />
        <Works />
       
          <Contact />
         
      
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
