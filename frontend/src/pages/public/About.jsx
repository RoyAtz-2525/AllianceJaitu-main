import AboutHero from "../../components/about/AboutHero";
import SchoolIntroduction from "../../components/about/SchoolIntroduction";
import CoreValues from "../../components/about/CoreValues";
import VisionMission from "../../components/about/VisionMission";
import SchoolHistory from "../../components/about/SchoolHistory";
import ManagementMessages from "../../components/about/ManagementMessages";
import SEO from "../../components/common/SEO";
import { seoConfig } from "../../components/common/seoConfig";

const About = () => {
  return (
    <>
      <SEO
        title="About Alliance International School Jaitu | Vision & Values"
        description={`Discover ${seoConfig.schoolName} in Jaitu, Faridkot, Punjab. Learn about our educational vision, core values, and dedicated approach to nurturing young minds.`}
        canonical={`${seoConfig.websiteUrl}about`}
      />
      <AboutHero />

      <SchoolIntroduction />

      <CoreValues />

      <VisionMission />

      <SchoolHistory />

      <ManagementMessages />
    </>
  );
};

export default About;
