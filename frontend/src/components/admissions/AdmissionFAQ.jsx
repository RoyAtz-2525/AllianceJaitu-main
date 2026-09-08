import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What classes are available for admission?",
    answer: "Admissions are available for Pre-Nursery and Classes I to VIII.",
  },
  {
    question: "How can I apply for admission?",
    answer: "You can submit the admission application online through the Apply Now option on our website.",
  },
  {
    question: "What happens after I submit the application?",
    answer: "After receiving your application, the school team will review the details and contact you regarding the next steps.",
  },
  {
    question: "What information is required in the admission application?",
    answer: "The application requires basic student and parent/guardian details, including the student's name, date of birth, gender, parent/guardian name, relationship, email address, and phone number.",
  },
  {
    question: "Can I contact the school for admission-related queries?",
    answer: "Yes. You can contact the school at +91 94646-22222 or allianceinternationaljaitu@gmail.com for admission-related queries.",
  },
  {
    question: "Where is the school located?",
    answer: "Alliance International School is located at Opp. Hanuman Mandir, Gaushala Road, Jaitu (Jaito), Faridkot, Punjab.",
  },
];

const AdmissionFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#2859B8]/[0.07] px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#2859B8]">
            <span className="h-2 w-2 rounded-full bg-[#F59A01]" />
            ADMISSION SUPPORT
          </div>

          <h3 className="mt-4 text-3xl font-extrabold text-[#092451] sm:text-4xl">
            Frequently Asked Questions
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Find quick answers to common questions about admissions at Alliance International School.
          </p>

          <div className="mx-auto mt-5 flex items-center justify-center gap-2">
            <span className="h-1 w-8 rounded-full bg-[#2859B8]/20" />
            <span className="h-1 w-12 rounded-full bg-[#F59A01]" />
            <span className="h-1 w-8 rounded-full bg-[#2859B8]/20" />
          </div>
        </div>

        {/* ACCORDION */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const number = String(index + 1).padStart(2, "0");

            return (
              <div
                key={index}
                className={`overflow-hidden rounded-[20px] border transition-all duration-300 ${
                  isOpen
                    ? "border-[#F59A01]/30 bg-white shadow-[0_10px_30px_rgba(245,154,1,0.08)]"
                    : "border-slate-200 bg-white shadow-[0_5px_15px_rgba(20,50,100,0.03)] hover:border-slate-300 hover:shadow-[0_8px_20px_rgba(20,50,100,0.06)]"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-3 p-5 text-left transition-colors sm:p-6"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="text-[#F59A01] font-bold shrink-0">{number}.</span>
                    <span
                      className={`font-semibold text-[15px] sm:text-base transition-colors duration-300 ${
                        isOpen ? "text-[#F59A01]" : "text-[#092451]"
                      } whitespace-normal md:whitespace-nowrap`}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                      isOpen
                        ? "bg-[#F59A01] text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm sm:text-[15px] leading-relaxed text-slate-600 sm:px-6 sm:pb-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdmissionFAQ;
