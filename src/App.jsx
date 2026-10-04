import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Destinations from "./components/Destinations";
import Experiences from "./components/Experiences";
import About from "./components/About";
import WhyAurelia from "./components/WhyAurelia";
import FeaturedJourney from "./components/FeaturedJourney";
import Journal from "./components/Journal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  return (
    <div className="site" id="top">
      <Header />
      <main>
        <Hero />
        <Intro />
        <Destinations />
        <Experiences />
        <About />
        <WhyAurelia />
        <FeaturedJourney />
        <Journal />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;