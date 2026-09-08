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
        "@id": "https://alliance-jaitu-eight.vercel.app/#organization",
        name: seoConfig.schoolName,
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
        "@id": "https://alliance-jaitu-eight.vercel.app/#website",
        url: seoConfig.websiteUrl,
        name: seoConfig.schoolName,
        description: seoConfig.tagline,
        publisher: {
          "@id": "https://alliance-jaitu-eight.vercel.app/#organization",
        },
      },
    ],
  };

  return (
    <>
      <SEO
        title="Alliance International School Jaitu, Punjab | Admissions Open"
        description={`Welcome to ${seoConfig.schoolName} in Jaitu, Faridkot, Punjab. We offer quality education from classes Pre-Nursery to VIII. Admissions are now open.`}
        canonical="https://allianceinternationaljaitu.com/"
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
