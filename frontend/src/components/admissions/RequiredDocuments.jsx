import { FileCheck2 } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const documents = [
  "Student's birth certificate",
  "Previous school academic record, if applicable",
  "Passport-size photographs",
  "Parent or guardian identification details",
  "Any additional documents requested by the school",
];

const RequiredDocuments = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Required Documents"
          title="Documents You May Need"
          description="Please keep the following documents available. The school administration may request additional documents during the admission process."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {documents.map((document, index) => (
            <div
              key={document}
              className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <FileCheck2 size={20} />
              </div>

              <div>
                <p className="text-xs font-semibold text-blue-600">
                  Document {index + 1}
                </p>

                <p className="mt-1 text-sm text-slate-700">{document}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RequiredDocuments;
