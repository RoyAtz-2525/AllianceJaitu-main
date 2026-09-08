import FacilitiesHero from "../../components/facilities/FacilitiesHero";
import FacilitiesGrid from "../../components/facilities/FacilitiesGrid";
import SEO from "../../components/common/SEO";
import { seoConfig } from "../../components/common/seoConfig";

const Facilities = () => {
  return (
    <>
      <SEO
        title="School Facilities in Jaitu | Alliance International School"
        description={`Discover the modern facilities and learning environment at ${seoConfig.schoolName} in Jaitu, Faridkot, Punjab. We provide Smart Classrooms, a Computer Lab, Music & Dance, Sports & Activities, and a safe & secure environment for holistic development.`}
        canonical={`${seoConfig.websiteUrl}facilities`}
      />
      <FacilitiesHero />

      <FacilitiesGrid />
    </>
  );
};

export default Facilities;
