import NavbarMain from "./components/navbar/NavbarMain";
// import "./App.css";
import HeroMain from "./components/heroSection/HeroMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import SubHeroSection from "./components/heroSection/SubHeroSection";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import HelperSection from "./components/HelperSection";
import ExperienceMain from "./components/experienceSection/ExperienceMain";

function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />

      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <HelperSection />
    </main>
  );
}

export default App;
