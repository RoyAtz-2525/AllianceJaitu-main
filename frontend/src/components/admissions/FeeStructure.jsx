const ClassesAvailable = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =========================================================
            FEE STRUCTURE
        ========================================================= */}

        <div className="relative mx-auto max-w-6xl">
          {/* HEADER */}

          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#2859B8]/[0.07] px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#2859B8]">
              <span className="h-2 w-2 rounded-full bg-[#F59A01]" />
              Fee Structure
            </div>

            <h3 className="mt-4 text-3xl font-extrabold text-[#092451] sm:text-4xl">
              School Fee Structure
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              A clear overview of the applicable school fees so parents can
              easily understand the fee structure for each admission category.
            </p>

            <div className="mx-auto mt-5 flex items-center justify-center gap-2">
              <span className="h-1 w-8 rounded-full bg-[#2859B8]/20" />
              <span className="h-1 w-12 rounded-full bg-[#F59A01]" />
              <span className="h-1 w-8 rounded-full bg-[#2859B8]/20" />
            </div>
          </div>

          {/* =========================================================
              PRE-NURSERY
          ========================================================= */}

          <div className="group relative mb-8 overflow-hidden rounded-[26px] border border-[#F59A01]/15 bg-white shadow-[0_15px_45px_rgba(20,50,100,0.07)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(20,50,100,0.10)]">
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#F59A01]/[0.05] transition-transform duration-700 group-hover:scale-125" />

            <div className="relative">
              <div className="flex flex-col gap-4 border-b border-slate-100 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                <div className="flex items-center gap-3">
                  <span className="h-8 w-1 rounded-full bg-[#F59A01]" />

                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#F59A01]">
                      Early Years
                    </p>

                    <h4 className="mt-1 text-xl font-extrabold text-[#092451]">
                      Pre-Nursery
                    </h4>
                  </div>
                </div>

                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#F59A01]/10 px-4 py-2 text-xs font-bold text-[#F59A01]">
                  New Student
                </div>
              </div>

              <div className="grid gap-0 sm:grid-cols-[1fr_auto]">
                <div className="divide-y divide-slate-100">
                  <div className="flex items-center justify-between px-6 py-4 sm:px-8">
                    <span className="text-sm text-slate-600">A. Funds</span>

                    <span className="font-semibold text-[#092451]">₹2,500</span>
                  </div>

                  <div className="flex items-center justify-between px-6 py-4 sm:px-8">
                    <span className="text-sm text-slate-600">
                      Activity Charges
                    </span>

                    <span className="font-semibold text-[#092451]">₹1,000</span>
                  </div>

                  <div className="flex items-center justify-between px-6 py-4 sm:px-8">
                    <span className="text-sm text-slate-600">SMS</span>

                    <span className="font-semibold text-[#092451]">₹400</span>
                  </div>

                  <div className="flex items-center justify-between px-6 py-4 sm:px-8">
                    <span className="text-sm text-slate-600">
                      Tuition Fee (1400 × 12)
                    </span>

                    <span className="font-semibold text-[#092451]">
                      ₹16,800
                    </span>
                  </div>

                  <div className="flex items-center justify-between px-6 py-4 sm:px-8">
                    <span className="text-sm text-slate-600">
                      Smart Class (450 × 4)
                    </span>

                    <span className="font-semibold text-[#092451]">₹1,800</span>
                  </div>
                </div>

                <div className="flex min-w-[190px] items-center justify-between bg-[#F59A01]/[0.06] px-6 py-5 sm:flex-col sm:items-start sm:justify-center sm:px-8">
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                    Total
                  </span>

                  <span className="mt-1 text-2xl font-black text-[#F59A01]">
                    ₹22,500
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================
              NURSERY – UKG
          ========================================================= */}

          <div className="group relative mb-8 overflow-hidden rounded-[26px] border border-[#2859B8]/10 bg-white shadow-[0_15px_45px_rgba(20,50,100,0.07)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(20,50,100,0.10)]">
            <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-[#2859B8]/[0.035] transition-transform duration-700 group-hover:scale-125" />

            <div className="relative border-b border-slate-100 px-6 py-6 sm:px-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-8 w-1 rounded-full bg-[#2859B8]" />

                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#2859B8]">
                      Foundation Classes
                    </p>

                    <h4 className="mt-1 text-xl font-extrabold text-[#092451]">
                      Nursery – UKG
                    </h4>
                  </div>
                </div>

                <p className="text-xs text-slate-500">
                  Admission category comparison
                </p>
              </div>
            </div>

            <div className="grid gap-px bg-slate-100 sm:grid-cols-2 lg:grid-cols-4">
              {/* NEW */}

              <div className="bg-white p-6 transition-all duration-300 hover:bg-[#2859B8]/[0.025]">
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-[#2859B8]/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#2859B8]">
                    New
                  </span>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">A. Funds</span>
                    <span className="font-semibold text-[#092451]">₹5,000</span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">SMS</span>
                    <span className="font-semibold text-[#092451]">₹400</span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">Tuition</span>
                    <span className="font-semibold text-[#092451]">
                      ₹32,400
                    </span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">Smart Class</span>

                    <span className="font-semibold text-[#092451]">₹1,800</span>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Total
                  </p>

                  <p className="mt-1 text-2xl font-black text-[#2859B8]">
                    ₹39,600
                  </p>
                </div>
              </div>

              {/* OLD */}

              <div className="bg-white p-6 transition-all duration-300 hover:bg-[#F59A01]/[0.025]">
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-[#F59A01]/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#F59A01]">
                    Old
                  </span>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">A. Funds</span>

                    <span className="font-semibold text-[#092451]">₹2,500</span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">SMS</span>

                    <span className="font-semibold text-[#092451]">₹400</span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">Tuition</span>

                    <span className="font-semibold text-[#092451]">
                      ₹32,400
                    </span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">Smart Class</span>

                    <span className="font-semibold text-[#092451]">₹1,800</span>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Total
                  </p>

                  <p className="mt-1 text-2xl font-black text-[#F59A01]">
                    ₹37,100
                  </p>
                </div>
              </div>

              {/* SIBLING */}

              <div className="bg-white p-6 transition-all duration-300 hover:bg-[#2859B8]/[0.025]">
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-[#2859B8]/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#2859B8]">
                    Sibling
                  </span>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">A. Funds</span>

                    <span className="font-semibold text-[#092451]">₹2,500</span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">SMS</span>

                    <span className="font-semibold text-[#092451]">₹400</span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">Tuition</span>

                    <span className="font-semibold text-[#092451]">
                      ₹29,400
                    </span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">Smart Class</span>

                    <span className="font-semibold text-[#092451]">₹1,800</span>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Total
                  </p>

                  <p className="mt-1 text-2xl font-black text-[#2859B8]">
                    ₹34,100
                  </p>
                </div>
              </div>

              {/* STAFF */}

              <div className="bg-white p-6 transition-all duration-300 hover:bg-[#F59A01]/[0.025]">
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-[#F59A01]/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#F59A01]">
                    Staff
                  </span>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">A. Funds</span>

                    <span className="font-semibold text-[#092451]">₹2,500</span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">SMS</span>

                    <span className="font-semibold text-[#092451]">₹400</span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">Tuition</span>

                    <span className="font-semibold text-[#092451]">
                      ₹28,800
                    </span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">Smart Class</span>

                    <span className="font-semibold text-[#092451]">₹1,800</span>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Total
                  </p>

                  <p className="mt-1 text-2xl font-black text-[#F59A01]">
                    ₹33,500
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================
              CLASS 1 – CLASS 8
          ========================================================= */}

          <div className="group relative mb-8 overflow-hidden rounded-[26px] border border-[#2859B8]/10 bg-white shadow-[0_15px_45px_rgba(20,50,100,0.07)] transition-all duration-500 hover:-translate-y-1">
            <div className="pointer-events-none absolute -right-20 -bottom-20 h-48 w-48 rounded-full bg-[#2859B8]/[0.035] transition-transform duration-700 group-hover:scale-125" />

            <div className="relative border-b border-slate-100 px-6 py-6 sm:px-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-8 w-1 rounded-full bg-[#2859B8]" />

                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#2859B8]">
                      Primary & Middle School
                    </p>

                    <h4 className="mt-1 text-xl font-extrabold text-[#092451]">
                      Class 1 – Class 8
                    </h4>
                  </div>
                </div>

                <p className="text-xs text-slate-500">Annual fee structure</p>
              </div>
            </div>

            <div className="grid gap-px bg-slate-100 sm:grid-cols-2 lg:grid-cols-4">
              {/* NEW */}

              <div className="bg-white p-6">
                <span className="rounded-full bg-[#2859B8]/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#2859B8]">
                  New
                </span>

                <div className="mt-5 space-y-3 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">A. Funds</span>

                    <span className="font-semibold text-[#092451]">₹5,000</span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">SMS</span>

                    <span className="font-semibold text-[#092451]">₹400</span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">Tuition</span>

                    <span className="font-semibold text-[#092451]">
                      ₹36,000
                    </span>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Total
                  </p>

                  <p className="mt-1 text-2xl font-black text-[#2859B8]">
                    ₹41,400
                  </p>
                </div>
              </div>

              {/* OLD */}

              <div className="bg-white p-6">
                <span className="rounded-full bg-[#F59A01]/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#F59A01]">
                  Old
                </span>

                <div className="mt-5 space-y-3 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">A. Funds</span>

                    <span className="font-semibold text-[#092451]">₹2,500</span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">SMS</span>

                    <span className="font-semibold text-[#092451]">₹400</span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">Tuition</span>

                    <span className="font-semibold text-[#092451]">
                      ₹36,000
                    </span>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Total
                  </p>

                  <p className="mt-1 text-2xl font-black text-[#F59A01]">
                    ₹38,900
                  </p>
                </div>
              </div>

              {/* SIBLING */}

              <div className="bg-white p-6">
                <span className="rounded-full bg-[#2859B8]/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#2859B8]">
                  Sibling
                </span>

                <div className="mt-5 space-y-3 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">A. Funds</span>

                    <span className="font-semibold text-[#092451]">₹2,500</span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">SMS</span>

                    <span className="font-semibold text-[#092451]">₹400</span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">Tuition</span>

                    <span className="font-semibold text-[#092451]">
                      ₹32,400
                    </span>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Total
                  </p>

                  <p className="mt-1 text-2xl font-black text-[#2859B8]">
                    ₹35,300
                  </p>
                </div>
              </div>

              {/* STAFF */}

              <div className="bg-white p-6">
                <span className="rounded-full bg-[#F59A01]/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#F59A01]">
                  Staff
                </span>

                <div className="mt-5 space-y-3 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">A. Funds</span>

                    <span className="font-semibold text-[#092451]">₹2,500</span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">SMS</span>

                    <span className="font-semibold text-[#092451]">₹400</span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">Tuition</span>

                    <span className="font-semibold text-[#092451]">
                      ₹31,200
                    </span>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Total
                  </p>

                  <p className="mt-1 text-2xl font-black text-[#F59A01]">
                    ₹34,100
                  </p>
                </div>
              </div>
            </div>
          </div>



          {/* NOTE */}

          <div className="mt-6 rounded-2xl border border-[#2859B8]/10 bg-[#2859B8]/[0.035] p-5">
            <p className="text-xs leading-6 text-slate-600 sm:text-sm">
              <span className="font-bold text-[#092451]">Note:</span> Fee
              details are provided for general guidance. Parents should confirm
              the latest applicable fee structure with the school administration
              before completing admission formalities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassesAvailable;
