import React from "react";
import LocalGemsHero from "../components/sections/LocalGemsHero";
import ToolsShowcase from "../components/sections/ToolsShowcase";
import FrameworksSection from "../components/sections/FrameworksSection";
import ProjectsGallery from "../components/sections/ProjectsGallery";
import DeveloperSpotlight from "../components/sections/DeveloperSpotlight";
import ContributeSection from "../components/sections/ContributeSection";

const LocalGems = () => {
  return (
    <>
      <LocalGemsHero />
      <ToolsShowcase />
      <FrameworksSection />
      {/* <ProjectsGallery /> */}
      {/* <DeveloperSpotlight /> */}
      <ContributeSection />
    </>
  );
};

export default LocalGems;
