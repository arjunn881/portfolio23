
import '../src/App.css'; 
import { About } from './component/About/About';
import { Contact } from './component/Contact/Contact';
import { Experience } from './component/Experience/Experience';
import { Footer } from './component/Footer/Footer';
import { Header } from './component/Header/Header';
import { Nav } from './component/Nav/Nav';
import { Portfolio } from './component/Portfolio/Portfolio';
import { Services } from './component/Services/Services';
import { Testimonials } from './component/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
