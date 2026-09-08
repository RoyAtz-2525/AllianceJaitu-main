import { useState, useEffect } from "react";
import { CalendarDays, MapPin, ArrowUpRight, Loader2 } from "lucide-react";
import apiClient from "../../api/apiClient";

// =========================================================
// EVENT IMAGES
// =========================================================

// =========================================================
// EASY CONTENT POSITION CONTROL
// =========================================================

const CONTENT_SHIFT_Y = -35;

const Events = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        const { data } = await apiClient.get("/events");

        const formattedEvents = data.map((ev, idx) => ({
          ...ev,
          number: String(idx + 1).padStart(2, "0"),
          image: ev.imageUrl,
          date: new Date(ev.date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
          }),
        }));

        setAllEvents(formattedEvents);
      } catch {
        setError("Unable to load events at this time.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvents();
  }, []);

  if (isLoading) {
    return (
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-5 sm:px-8 lg:px-10">
          <Loader2 className="h-10 w-10 animate-spin text-blue-500" />
          <p className="mt-4 font-medium text-slate-500">Loading events...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-5 sm:px-8 lg:px-10">
          <div className="rounded-2xl border border-red-100 bg-red-50 p-8 text-center">
            <h3 className="text-lg font-bold text-red-800">
              Error Loading Events
            </h3>
            <p className="mt-2 text-sm text-red-600">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  if (allEvents.length === 0) {
    return (
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-5 sm:px-8 lg:px-10">
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
            <CalendarDays className="mx-auto h-12 w-12 text-slate-400" />
            <h3 className="mt-4 text-lg font-bold text-slate-900">
              No Events Found
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Check back soon for our next featured school events!
            </p>
          </div>
        </div>
      </section>
    );
  }

  const activeEvent = allEvents[activeIndex];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            MAIN EVENTS AREA
        ====================================================== */}

        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 xl:gap-20">
          {/* ===================================================
              LEFT: EVENT LIST
          ==================================================== */}

          <div
            className="events-left-content mx-auto w-full max-w-[570px]"
            style={{
              transform: `translateY(${CONTENT_SHIFT_Y}px)`,
            }}
          >
            <div className="relative">
              {/* Vertical timeline */}

              <div
                className="
                  absolute
                  bottom-7
                  left-[29px]
                  top-7
                  hidden
                  w-px
                  bg-gradient-to-b
                  from-slate-200
                  via-slate-300
                  to-transparent
                  sm:block
                "
              />

              <div className="space-y-8 sm:space-y-10">
                {allEvents.map((event, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={event._id}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Show ${event.title}`}
                      className="
                        group
                        relative
                        flex
                        w-full
                        items-start
                        gap-5
                        text-left
                        outline-none
                        sm:gap-7
                      "
                    >
                      {/* =================================================
                          NUMBER
                      ================================================== */}

                      <span
                        className={`
                          relative
                          z-10
                          flex
                          h-[58px]
                          w-[58px]
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          text-base
                          font-medium
                          transition-all
                          duration-300

                          ${
                            isActive
                              ? "border-black bg-black text-white shadow-[0_12px_30px_rgba(0,0,0,0.16)]"
                              : "border-slate-200 bg-slate-100 text-slate-500 group-hover:border-blue-500 group-hover:bg-white group-hover:text-blue-600"
                          }
                        `}
                      >
                        {event.number}

                        {isActive && (
                          <span
                            className="
                              absolute
                              -right-[2px]
                              top-1/2
                              h-7
                              w-[2px]
                              -translate-y-1/2
                              bg-orange-400
                            "
                          />
                        )}
                      </span>

                      {/* =================================================
                          EVENT TEXT
                      ================================================== */}

                      <div className="min-w-0 flex-1 pt-1">
                        <h3
                          className={`
                            text-xl
                            font-semibold
                            leading-tight
                            transition-colors
                            duration-300
                            sm:text-[22px]

                            ${
                              isActive
                                ? "text-slate-950"
                                : "text-slate-400 group-hover:text-slate-700"
                            }
                          `}
                        >
                          {event.title}
                        </h3>

                        <p
                          className={`
                            mt-3
                            max-w-[500px]
                            text-[15px]
                            leading-7
                            transition-colors
                            duration-300
                            sm:text-base

                            ${
                              isActive
                                ? "text-slate-600"
                                : "text-slate-400 group-hover:text-slate-500"
                            }
                          `}
                        >
                          {event.description}
                        </p>

                        {/* Date + Location */}

                        {isActive && (
                          <div
                            className="
                              mt-4
                              flex
                              flex-wrap
                              items-center
                              gap-x-6
                              gap-y-2
                              text-sm
                              font-medium
                              text-slate-500
                            "
                          >
                            <span
                              className="
                                inline-flex
                                items-center
                                gap-2
                              "
                            >
                              <CalendarDays
                                size={15}
                                className="text-blue-600"
                              />

                              {event.date}
                            </span>

                            <span
                              className="
                                inline-flex
                                items-center
                                gap-2
                              "
                            >
                              <MapPin size={15} className="text-blue-600" />

                              {event.location}
                            </span>
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ===================================================
              RIGHT: IMAGE + EVENT CONTENT
          ==================================================== */}

          <div
            className="
              mx-auto
              flex
              w-full
              max-w-[700px]
              flex-col
              justify-center
            "
          >
            {/* =================================================
                EVENT IMAGE
            ================================================== */}

            <div
              key={activeEvent._id}
              className="
                relative
                mx-auto
                w-full
                max-w-[650px]
                overflow-hidden
                bg-slate-100
                shadow-[0_22px_55px_rgba(15,23,42,0.12)]
              "
            >
              <div className="aspect-[16/9] w-full">
                <img
                  src={activeEvent.image}
                  alt={activeEvent.title}
                  className="
                    block
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-[1.02]
                  "
                />
              </div>

              {/* Category */}

              <div
                className="
                  absolute
                  left-5
                  top-5
                  bg-white
                  px-4
                  py-2.5
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-slate-900
                  shadow-sm
                  sm:left-6
                  sm:top-6
                "
              >
                {activeEvent.category}
              </div>

              {/* Number */}

              <div
                className="
                  absolute
                  bottom-5
                  right-5
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  bg-black
                  text-xs
                  font-semibold
                  text-white
                  sm:bottom-6
                  sm:right-6
                "
              >
                {activeEvent.number}
              </div>
            </div>

            {/* =================================================
                ACTIVE EVENT DETAILS
            ================================================== */}

            <div
              className="
                mx-auto
                mt-7
                w-full
                max-w-[650px]
              "
            >
              <div
                className="
                  flex
                  flex-col
                  gap-5
                  sm:flex-row
                  sm:items-end
                  sm:justify-between
                "
              >
                <div>
                  <p
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.24em]
                      text-blue-600
                    "
                  >
                    Featured School Event
                  </p>

                  <h3
                    className="
                      mt-2
                      text-3xl
                      font-bold
                      leading-tight
                      tracking-tight
                      text-slate-950
                      sm:text-[38px]
                    "
                  >
                    {activeEvent.title}
                  </h3>

                  <div
                    className="
                      mt-4
                      flex
                      flex-wrap
                      items-center
                      gap-x-6
                      gap-y-2
                      text-sm
                      text-slate-500
                    "
                  >
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                      "
                    >
                      <CalendarDays size={16} className="text-blue-600" />

                      {activeEvent.date}
                    </span>

                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                      "
                    >
                      <MapPin size={16} className="text-blue-600" />

                      {activeEvent.location}
                    </span>
                  </div>
                </div>

                {/* Gallery Link */}

                <a
                  href="/gallery"
                  className="
                    inline-flex
                    shrink-0
                    items-center
                    gap-2
                    self-start
                    pb-1
                    text-sm
                    font-semibold
                    text-blue-600
                    transition-all
                    duration-300
                    hover:gap-3
                    sm:self-auto
                  "
                >
                  View Gallery
                  <ArrowUpRight size={17} />
                </a>
              </div>

              {/* =================================================
                  EVENT INDICATORS
              ================================================== */}

              <div
                className="
                  mt-7
                  flex
                  items-center
                  gap-2
                "
              >
                {allEvents.map((event, index) => (
                  <button
                    key={event._id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show event ${event.number}`}
                    className={`
                      h-1
                      transition-all
                      duration-300

                      ${
                        activeIndex === index
                          ? "w-12 bg-blue-600"
                          : "w-5 bg-slate-200 hover:bg-slate-400"
                      }
                    `}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          RESPONSIVE
      ====================================================== */}

      <style>{`

        @media (max-width: 1023px) {

          .events-left-content {
            transform:
              translateY(${CONTENT_SHIFT_Y}px);
          }

        }


        @media (max-width: 640px) {

          .events-left-content {
            transform:
              translateY(
                ${Math.min(CONTENT_SHIFT_Y, -20)}px
              );
          }

        }


        @media (prefers-reduced-motion: reduce) {

          *,
          *::before,
          *::after {

            animation-duration: 0.01ms !important;

            transition-duration: 0.01ms !important;

          }

        }

      `}</style>
    </section>
  );
};

export default Events;
