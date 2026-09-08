import { Quote } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const PrincipalMessage = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-slate-100">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
            alt="Principal at Alliance International School"
            className="h-[420px] w-full object-cover"
          />
        </div>

        <div>
          <SectionHeading
            badge="Principal's Message"
            title="A Message From Our Principal"
            align="left"
          />

          <Quote size={40} className="text-blue-200" />

          <p className="mt-4 text-base leading-8 text-slate-600">
            Education is not only about gaining knowledge. It is about building
            character, confidence, curiosity, and the ability to face future
            challenges. At Alliance School, we are committed to helping every
            child discover their potential.
          </p>

          <div className="mt-6">
            <h3 className="font-semibold text-slate-900">Principal Name</h3>

            <p className="text-sm text-blue-600">Principal, Alliance School</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
