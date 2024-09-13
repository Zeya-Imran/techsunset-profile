import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/projectjs";
import Resume from "./components/Resume";

const HomeRoute = () => {
  return (
    <>
      <Home />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
};

export default HomeRoute;
