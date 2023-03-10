import "./App.css";

import Header from "./components/Header";
import About from "./components/About";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";
import Team from "./components/Team";
import Ad from "./components/Ad";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import bgMap from "./assets/images/map.png";

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <About />
        <Service />
        <Testimonial />
        <Team />
        <Ad />
        <Contact />
      </main>
      <div
        style={{ backgroundImage: `url(${bgMap})` }}
        className='h-28 bg-center sm:h-96'
      ></div>
      <Footer />
    </div>
  );
}

export default App;
