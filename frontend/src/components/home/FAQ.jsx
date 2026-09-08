import { useState } from "react";
import { Plus, Minus, MessageCircleQuestion } from "lucide-react";

const faqs = [
  {
    question: "Which classes does Alliance International School offer?",
    answer:
      "Alliance International School offers education from Pre-Nursery to Class VIII.",
  },
  {
    question: "Is admission currently open for the 2026 academic session?",
    answer: "Yes, admissions are currently open for the 2026 academic session.",
  },
  {
    question: "How can I apply for admission?",
    answer:
      "You can apply online through the Apply Now option on our website or contact the school directly.",
  },
  {
    question: "What facilities does the school provide?",
    answer:
      "The school provides smart classrooms, a computer lab, music & dance activities, Wi-Fi campus, sports & activities, experienced faculty, and a safe & secure learning environment.",
  },
  {
    question: "How can I contact the school?",
    answer:
      "You can contact the school at +91 94646-22222 or email allianceinternationaljaitu@gmail.com.",
  },
  {
    question: "What makes Alliance International School different?",
    answer:
      "We focus on quality education, strong values, holistic development, and a safe, caring environment where every child is encouraged to learn, grow, and succeed.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#2859B8]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#2859B8]">
            <MessageCircleQuestion size={14} />
            Have Questions?
          </span>

          <h2 className="mt-4 text-3xl font-extrabold text-[#0a1930] sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Find quick answers to some of the most common questions about
            Alliance International School.
          </p>
        </div>

        {/* Accordion Grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const number = String(index + 1).padStart(2, "0");

            return (
              <div
                key={index}
                className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "border-orange-500/30 bg-white shadow-md shadow-orange-500/5"
                    : "border-slate-200 bg-white shadow-sm hover:border-slate-300 hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-3 p-4 text-left transition-colors sm:p-5"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 md:gap-4 min-w-0">
                    <span className="text-orange-500 font-bold shrink-0">
                      {number}.
                    </span>
                    <span
                      className={`font-semibold text-[14px] md:text-[15px] xl:text-base transition-colors duration-300 ${
                        isOpen ? "text-orange-500" : "text-[#0a1930]"
                      } whitespace-normal md:whitespace-nowrap`}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                      isOpen
                        ? "bg-orange-500 text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-4 text-sm leading-relaxed text-slate-600 sm:px-5 sm:pb-5">
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

export default FAQ;
