import Navbar from './components/Header/Navbar';
import Home from './Home/Homepage';
import Footer from './components/Footer/Footer';
import Aboutme from './About/Aboutme';
import Skills from "./Skills/Skills"
import './App.css';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Aboutme />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
