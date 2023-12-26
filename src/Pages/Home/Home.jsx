import Contact from "../Contact/Contact";
import About from "./About";
import Banner from "./Banner/Banner";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
    return (
        <div className="text-white min-h-screen">
          <Banner/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    );
};

export default Home;