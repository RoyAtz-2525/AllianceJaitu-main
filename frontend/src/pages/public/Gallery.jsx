import GalleryGrid from "../../components/gallery/GalleryGrid";
import GalleryHero from "../../components/gallery/GalleryHero";
import SEO from "../../components/common/SEO";
import { seoConfig } from "../../components/common/seoConfig";

const Gallery = () => {
  return (
    <>
      <SEO
        title="School Gallery | Alliance International School Jaitu"
        description={`Explore the vibrant campus, student activities, learning environment, modern facilities, and school life at ${seoConfig.schoolName} in Jaitu, Faridkot, Punjab through our photo gallery.`}
        canonical={`${seoConfig.websiteUrl}gallery`}
      />
      <GalleryHero />
      <GalleryGrid />
    </>
  );
};

export default Gallery;
