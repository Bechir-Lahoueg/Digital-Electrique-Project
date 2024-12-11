import {
  Features,
  Blog,
  Footer,
  Header,
  Possibility,
  Digital,
  Contact,
} from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';
const App = () => {
  return (
    <div className='App'>
      <header className='gradient__bg'>
        <Navbar />
        <Header />
      </header>

      <Brand />
      <Digital />
      
      <Features />
      
      <Possibility />
      
      <CTA />

      <Blog />
     
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
