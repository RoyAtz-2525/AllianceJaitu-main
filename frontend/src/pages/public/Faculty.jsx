import FacultyHero from "../../components/faculty/FacultyHero";
import FacultyGrid from "../../components/faculty/FacultyGrid";
import SEO from "../../components/common/SEO";
import { seoConfig } from "../../components/common/seoConfig";

const Faculty = () => {
  return (
    <>
      <SEO
        title="Experienced Faculty | Alliance International School Jaitu"
        description={`Meet the dedicated educators at ${seoConfig.schoolName} in Jaitu, Faridkot, Punjab. Our experienced faculty is committed to nurturing young minds and fostering academic excellence.`}
        canonical={`${seoConfig.websiteUrl}faculty`}
      />
      <div className="bg-[#FDFBF6] overflow-hidden">
        <FacultyHero />
        <FacultyGrid />
      </div>
    </>
  );
};

export default Faculty;
