import Hero from "../../components/home/Hero";
import AboutPreview from "../../components/home/AboutPreview";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import Statistics from "../../components/home/Statistics";
import FacilitiesPreview from "../../components/home/FacilitiesPreview";
import GalleryPreview from "../../components/home/GalleryPreview";
import Academics from "../../components/home/Academics";
import UpcomingEvents from "../../components/home/UpcomingEvents";
import AdmissionCTA from "../../components/home/AdmissionCTA";
import SEO from "../../components/common/SEO";
import { seoConfig } from "../../components/common/seoConfig";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "School",
        "@id": "https://www.aisjaito.com/#organization",
        name: seoConfig.schoolName,
        alternateName: "Alliance International School Jaito",
        url: seoConfig.websiteUrl,
        telephone: seoConfig.phone,
        email: seoConfig.email,
        description: seoConfig.tagline,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Opp. Hanuman Mandir, Gaushala Road",
          addressLocality: "Jaitu",
          addressRegion: "Punjab",
          addressCountry: "IN",
        },
        makesOffer: {
          "@type": "Offer",
          name: `Classes ${seoConfig.classes}`,
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.aisjaito.com/#website",
        url: seoConfig.websiteUrl,
        name: seoConfig.schoolName,
        description: seoConfig.tagline,
        publisher: {
          "@id": "https://www.aisjaito.com/#organization",
        },
      },
    ],
  };

  return (
    <>
      <SEO
        title="Alliance International School Jaitu, Punjab | Admissions Open"
        description="Welcome to Alliance International School in Jaitu (Jaito), Faridkot, Punjab. We offer quality education from classes Pre-Nursery to VIII. Admissions are now open."
        canonical="https://www.aisjaito.com/"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Hero />

      <AboutPreview />

      <WhyChooseUs />

      <Statistics />

      <Academics />

      <FacilitiesPreview />

      <GalleryPreview />

      <UpcomingEvents />

      <AdmissionCTA />
    </>
  );
};

export default Home;
