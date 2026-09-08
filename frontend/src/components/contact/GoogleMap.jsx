import { ExternalLink, MapPin, Navigation } from "lucide-react";

const GoogleMap = () => {
  const schoolAddress =
    "Alliance International School, Opp. Hanuman Mandir, Gaushala Road, Jaitu, Faridkot, Punjab 151202";

  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Alliance+International+School,+Gaushala+Road,+Near+Hanuman+Mandir,+Jaitu,+Punjab+151202";

  const mapEmbedUrl =
    "https://www.google.com/maps?q=Alliance+International+School,+Gaushala+Road,+Near+Hanuman+Mandir,+Jaitu,+Faridkot,+Punjab+151202&output=embed";

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-10 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#2859B8]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#2859B8]">
            <MapPin size={14} />
            Find Us
          </span>

          <h2 className="mt-5 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Visit Alliance International School
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Find us at Gaushala Road, Jaitu. Use Google Maps to plan your
            route and visit our school with ease.
          </p>
        </div>

        {/* Map card */}
        <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(40,89,184,0.12)]">
          {/* Map */}
          <div className="relative h-[360px] w-full sm:h-[430px] lg:h-[500px]">
            <iframe
              title="Alliance International School Location"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            />

            {/* Floating school location card */}
            <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-sm">
              <div className="rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur-md">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#2859B8] text-white">
                    <MapPin size={21} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-bold text-slate-900">
                      Alliance International School
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-600">
                      {schoolAddress}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map bottom action bar */}
          <div className="flex flex-col gap-4 border-t border-slate-100 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div>
              <p className="text-sm font-bold text-slate-900">
                Planning a visit?
              </p>

              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                Open the location in Google Maps for directions.
              </p>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#2859B8] px-5 py-3 text-sm font-bold text-white shadow-md shadow-[#2859B8]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#214da3] hover:shadow-lg"
            >
              <Navigation size={17} />

              Get Directions

              <ExternalLink
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;