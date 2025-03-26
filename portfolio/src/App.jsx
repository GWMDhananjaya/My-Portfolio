import NavbarMain from "./components/navbar/NavbarMain";
// import "./App.css";
import HeroMain from "./components/heroSection/HeroMain";
import HeroGradient from "./components/heroSection/HeroGradient";

import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import HelperSection from "./components/HelperSection";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import ProjectMain from "./components/projectsSection/ProjectMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import FooterMain from "./components/footer/FooterMain";

function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />

      <AboutMeMain />

      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectMain />
      <ContactMeMain />
      <FooterMain />
      <HelperSection />
    </main>
  );
}

export default App;
