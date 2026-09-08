import AdmissionHero from "../../components/admissions/AdmissionHero";
import AdmissionInfo from "../../components/admissions/AdmissionInfo";
import AdmissionProcess from "../../components/admissions/AdmissionProcess";
import ClassesAvailable from "../../components/admissions/FeeStructure";
import SEO from "../../components/common/SEO";
import { seoConfig } from "../../components/common/seoConfig";

const Admission = () => {
  return (
    <>
      <SEO
        title="School Admissions 2026-27 in Jaitu | Alliance International School"
        description={`Looking for school admissions in Jaitu, Faridkot, Punjab? ${seoConfig.schoolName} is now accepting applications for classes Pre-Nursery to VIII. Enroll your child today.`}
        canonical={`${seoConfig.websiteUrl}admissions`}
      />
      <main className="bg-[#f7faff]">
        <AdmissionHero />

        <AdmissionInfo />

        <AdmissionProcess />

        <ClassesAvailable />
      </main>
    </>
  );
};

export default Admission;
