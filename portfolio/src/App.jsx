import NavbarMain from "./components/navbar/NavbarMain";
// import "./App.css";
import HeroMain from "./components/heroSection/HeroMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import SubHeroSection from "./components/heroSection/SubHeroSection";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import ProjectMain from "./components/projectsSection/ProjectMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import FooterMain from "./components/footer/FooterMain";
import ReviewSection from "./components/ReviewSection/ReviewSection";
import ReviewShow from "./components/ReviewSection/ReviewShow";
import Reviews from "./components/ReviewSection/Reviews";
import GitHubContributions from "./components/GitHubContributions/GitHubContributions";

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
      <ProjectMain />
      <Reviews />
      <ContactMeMain />
      <GitHubContributions />

      <FooterMain />
    </main>
  );
}

export default App;
