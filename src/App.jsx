import MainLayout from "./layouts/MainLayout";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";


function App() {
  return (
    <MainLayout>
      <Hero />
      <Skills />
      <Experience />
      <Contact />
    </MainLayout>
  );
}

export default App;
