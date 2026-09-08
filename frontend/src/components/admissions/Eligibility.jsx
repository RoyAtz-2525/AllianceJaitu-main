import { CheckCircle2 } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const eligibilityPoints = [
  "The student should meet the school's age requirements for the selected class.",
  "Previous academic details may be required for admission to higher classes.",
  "Parents must provide accurate student and parent information.",
  "Admission is subject to seat availability and school guidelines.",
];

const Eligibility = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeading
            badge="Eligibility"
            title="Who Can Apply?"
            description="Parents can apply for admission by ensuring that the student meets the basic requirements for the selected class."
            align="left"
          />
        </div>

        <div className="space-y-4">
          {eligibilityPoints.map((point) => (
            <div
              key={point}
              className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5"
            >
              <CheckCircle2 size={22} className="shrink-0 text-blue-600" />

              <p className="text-sm leading-6 text-slate-600">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
