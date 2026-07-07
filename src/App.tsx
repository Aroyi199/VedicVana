import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/home/Footer";

import HeroSection from "./components/home/Herosection";
import BenefitsSection from "./components/home/BenefitsSection";
import SacredGarden from "./components/home/ScaredGardens";
import IntroductionSection from "./components/home/Introduction";
import ThreeVanas from "./components/home/ThreeVanas";
import Projects from "./components/home/Projects";
import PartnersSection from "./components/home/PartnersSection";
import NakshatraTree from "./components/home/NakshatraTree";
import QuoteSection from "./components/home/QuoteSection";

import StorySection from "./components/About/StorySection";
import CoreBeliefsSection from "./components/About/CoreBeliefsSection";
import PhilosophySection from "./components/About/PhilosophySection";
import ResearchSection from "./components/About/ResearchSection";
import TimelineSection from "./components/About/TimelineSection";

import FullStoryHero from "./components/Fullstory/FullStoryHero";
import StoryOne from "./components/Fullstory/StoryOne";
import StoryTwo from "./components/Fullstory/StoryTwo";
import StoryThree from "./components/Fullstory/StoryThree";
import Consultation from "./components/Fullstory/Consulation";

import TempleGardensHero from "./components/TempleGarden/TempleGardenHero";
import PrimaryVanas from "./components/TempleGarden/PrimaryVanas";
import SecondaryVanas from "./components/TempleGarden/SecondaryVanas";

import RasiHero from "./components/RasiVana/RasiHero";
import RasiBenefits from "./components/RasiVana/RasiBenfits";
import RasiImage from "./components/RasiVana/RasiImage";
import RasiCards from "./components/RasiVana/RasiCards";

import NakshatraHero from "./components/NakshatraVana/NakshatraHero";
import NakshatraBenefits from "./components/NakshatraVana/NakshatraBenfits";
import NakshatraImage from "./components/NakshatraVana/NakshatraImage";
import NakshatraCards from "./components/NakshatraVana/NakshatraCards";

import NavagrahaHero from "./components/NavagrahaVana/NavagrahaHero";
import NavagrahaBenefits from "./components/NavagrahaVana/NavagrahaBenfits";
import NavagrahaImage from "./components/NavagrahaVana/NavagrahaImage";
import NavagrahaCards from "./components/NavagrahaVana/NavagrahaCards";

import ProjectHero from "./components/Projects/ProjectHero";
import FeaturedCaseStudy from "./components/Projects/FeaturedCaseStudy";
import ProjectOverview from "./components/Projects/ProjectOverview";
import ImageGallery from "./components/Projects/ImageGallery";
import ProjectImpact from "./components/Projects/ProjectImpact";
import OtherProjects from "./components/Projects/Otherproject";

import ServicesHero from "./components/Services/ServicesHero";
import ForMe from "./components/Services/ForMe";
import ForMyFamily from "./components/Services/ForMyFamily";
import ForMySpace from "./components/Services/ForMySpace";
import ForMyAncestors from "./components/Services/ForMyAncestors";
import ForThePlanet from "./components/Services/ForThePlanet";
import ServicesCTA from "./components/Services/ServicesCTA";

import MediaHero from "./components/Media/MediaHero";
import YouTubeSection from "./components/Media/YoutubeSection";
import PrintMediaSection from "./components/Media/PrintMedia";
import GuestLectures from "./components/Media/GuestLectures";
import ResearchTalks from "./components/Media/ResearchTalks";

import AwardsHero from "./components/Awards/AwardsHero";
import AwardsGallery from "./components/Awards/AwardsGallery";

import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <BenefitsSection />
              <SacredGarden />
              <IntroductionSection />
              <ThreeVanas />
              <Projects />
              <PartnersSection />
              <NakshatraTree />
              <QuoteSection />
            </>
          }
        />

        {/* About */}
        <Route
          path="/about"
          element={
            <>
              <StorySection />
              <CoreBeliefsSection />
              <PhilosophySection />
              <ResearchSection />
              <TimelineSection />
            </>
          }
        />

        {/* Full Story */}
        <Route
          path="/full-story"
          element={
            <>
              <FullStoryHero />
              <StoryOne/>
              <StoryTwo/>
              <StoryThree/>
               
              <Consultation />
            </>
          }
        />

        {/* Temple Gardens */}
        <Route
          path="/temple-gardens"
          element={
            <>
              <TempleGardensHero />
              <PrimaryVanas />
              <SecondaryVanas />
            </>
          }
        />

        {/* Rasi Vana */}
        <Route
          path="/rasi-vana"
          element={
            <>
              <RasiHero />
              <RasiBenefits/>
              <RasiImage />
              <RasiCards />
            </>
          }
        />

        {/* Nakshatra Vana */}
        <Route
          path="/nakshatra-vana"
          element={
            <>
              <NakshatraHero />
              <NakshatraBenefits/>
              <NakshatraImage />
              
              <NakshatraCards />
            </>
          }
        />

        {/* Navagraha Vana */}
        <Route
          path="/navagraha-vana"
          element={
            <>
              <NavagrahaHero />
              <NavagrahaBenefits/>
              <NavagrahaImage />
              
              <NavagrahaCards />
            </>
          }
        />

        {/* Projects */}
        <Route
          path="/projects"
          element={
            <>
              <ProjectHero />
              <FeaturedCaseStudy/>
              <ProjectOverview/>
              <ImageGallery/>
              <ProjectImpact/>
              <OtherProjects/>
            </>
          }
        />
        <Route
        path="/services"
        element={
          <>
          <ServicesHero/>
          <ForMe/>
          
          <ForMySpace/>
          <ForMyFamily/>
          <ForMyAncestors/>
          <ForThePlanet/>
          <ServicesCTA/>
          </>
        }
        />
        <Route
        path="/media"
        element={
          <>
          <MediaHero/>
          <YouTubeSection/>
          <PrintMediaSection/>
          <GuestLectures/>
          <ResearchTalks/>
          </>
        }
        />
        <Route
        path="/awards"
        element={
          <>
          <AwardsHero/>
          <AwardsGallery/>
          </>
        }
        />
        <Route
        path="/contact"
        element={
          <>
          <Contact/>
          </>
        }
        />


      </Routes>

      <Footer />
    </>
  );
}

export default App;