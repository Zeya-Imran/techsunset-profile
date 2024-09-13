import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/projectjs";
import Resume from "./components/Resume";

const maintRoute = () => {
  return (
    <>
      <Resume />
      <Projects />
      <Home />
      <Contact />
    </>
  );
};

export default maintRoute;
