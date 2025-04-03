import NavbarMain from "./components/navbar/NavbarMain";
// import "./App.css";
import HeroMain from "./components/heroSection/HeroMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import SubHeroSection from "./components/heroSection/SubHeroSection";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import ExperienceMain from "./components/experienceSection/ExperienceMain";

import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import FooterMain from "./components/footer/FooterMain";
import ReviewSection from "./components/ReviewSection/ReviewSection";
import ReviewShow from "./components/ReviewSection/ReviewShow";
import Reviews from "./components/ReviewSection/Reviews";
import GitHubContributions from "./components/GitHubContributions/GitHubContributions";
import AboutGradient from "./components/aboutMeSection/AboutGradient";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectMain from "./components/projectsSection/ProjectMain";
import ProjectDetails from "./components/projectsSection/ProjectDetails";
import ReviewForm from "./components/ReviewSection/ReviewForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <main className="font-body">
              <NavbarMain />
              <HeroMain />
              <HeroGradient />
              <SubHeroSection />
              <AboutMeMain />
              <AboutGradient />
              <SkillsMain />
              <SubSkills />
              <ExperienceMain />
              <ProjectMain />
              <Reviews />
              <ContactMeMain />
              <FooterMain />
            </main>
          }
        />

        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/review-form" element={<ReviewForm />} />
      </Routes>
    </Router>
  );
}

export default App;
