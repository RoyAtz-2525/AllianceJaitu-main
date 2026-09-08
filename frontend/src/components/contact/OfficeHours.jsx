import {
  CalendarClock,
  Clock3,
  Sun,
  Snowflake,
} from "lucide-react";

const officeHours = [
  {
    season: "Summer Timings",
    icon: Sun,
    time: "07:50 AM – 02:00 PM",
    description: "School timing during the summer session.",
    accent: "#F59A01",
  },
  {
    season: "Winter Timings",
    icon: Snowflake,
    time: "08:50 AM – 03:00 PM",
    description: "School timing during the winter session.",
    accent: "#2859B8",
  },
];

const OfficeHours = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20">
      {/* Decorative background */}
      <div className="absolute -left-20 top-10 h-48 w-48 rounded-full bg-[#2859B8]/5 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-56 w-56 rounded-full bg-[#F59A01]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#2859B8]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#2859B8]">
            <CalendarClock size={14} />
            School Schedule
          </span>

          <h2 className="mt-5 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            School Timings
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Please plan your visit according to the seasonal school timings
            below.
          </p>
        </div>

        {/* Timing cards */}
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
          {officeHours.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.season}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8"
              >
                {/* Accent line */}
                <div
                  className="absolute left-0 top-0 h-1.5 w-full"
                  style={{ backgroundColor: item.accent }}
                />

                <div className="flex items-start justify-between gap-5">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl transition duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: `${item.accent}15`,
                      color: item.accent,
                    }}
                  >
                    <Icon size={28} />
                  </div>

                  <div className="flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-500">
                    <Clock3 size={13} />
                    School Hours
                  </div>
                </div>

                <h3 className="mt-7 text-xl font-bold text-slate-900">
                  {item.season}
                </h3>

                <div className="mt-3">
                  <p
                    className="text-2xl font-extrabold sm:text-3xl"
                    style={{ color: item.accent }}
                  >
                    {item.time}
                  </p>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>

                {/* Bottom decorative dots */}
                <div className="mt-7 flex gap-1.5">
                  <span
                    className="h-1.5 w-8 rounded-full"
                    style={{ backgroundColor: item.accent }}
                  />

                  <span className="h-1.5 w-2 rounded-full bg-slate-200" />

                  <span className="h-1.5 w-2 rounded-full bg-slate-200" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Small note */}
        <div className="mx-auto mt-8 flex max-w-4xl items-start gap-3 rounded-2xl border border-[#2859B8]/10 bg-[#2859B8]/5 p-4 sm:items-center">
          <Clock3
            size={18}
            className="mt-0.5 shrink-0 text-[#2859B8] sm:mt-0"
          />

          <p className="text-xs leading-5 text-slate-600 sm:text-sm">
            For admissions and important enquiries, we recommend contacting
            the school before planning an in-person visit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfficeHours;