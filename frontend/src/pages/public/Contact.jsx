import ContactInfo from "../../components/contact/ContactInfo";
import ContactForm from "../../components/contact/ContactForm";
import GoogleMap from "../../components/contact/GoogleMap";
import OfficeHours from "../../components/contact/OfficeHours";

import illustration1 from "../../assets/illustration1.png";
import illustration2 from "../../assets/illustration2.png";
import illustration3 from "../../assets/illustration3.png";

import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  MapPin,
  PhoneCall,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import SEO from "../../components/common/SEO";

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Alliance International School Jaitu | Get in Touch"
        description="Get in touch with Alliance International School in Jaitu, Faridkot, Punjab. Find our address, phone number, email, school timings, and contact information."
        canonical="https://www.aisjaito.com/contact"
      />
      <main className="overflow-hidden bg-[#f7faff] text-[#092451]">
        {/* =========================================================
          HERO
      ========================================================= */}

        <section className="relative isolate overflow-hidden bg-[#2859B8]">
          {/* School background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=2200&q=85')",
            }}
          />

          {/* Blue overlay */}
          <div className="absolute inset-0 bg-[#123d82]/80" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#173d83]/95 via-[#2859B8]/80 to-[#2859B8]/55" />

          {/* =====================================================
            DECORATIVE ANIMATED ELEMENTS
        ===================================================== */}

          {/* Large left circle */}
          <div
            className="absolute -left-28 -top-28 h-72 w-72 rounded-full border-[35px] border-white/5"
            style={{
              animation: "heroCircleLeft 9s ease-in-out infinite",
            }}
          />

          {/* Large right circle */}
          <div
            className="absolute -right-32 top-20 h-80 w-80 rounded-full border-[40px] border-[#F59A01]/10"
            style={{
              animation: "heroCircleRight 11s ease-in-out infinite",
            }}
          />

          {/* 🎓 Graduation Cap */}
          <div
            className="absolute left-[7%] top-[28%] hidden text-white/20 lg:block"
            style={{
              animation: "heroCapFloat 5s ease-in-out infinite",
            }}
          >
            <GraduationCap size={115} strokeWidth={1} />
          </div>

          {/* 📖 Book */}
          <div
            className="absolute right-[9%] top-[25%] hidden text-white/20 lg:block"
            style={{
              animation: "heroBookFloat 6s ease-in-out infinite",
            }}
          >
            <BookOpen size={100} strokeWidth={1} />
          </div>

          {/* Floating square left */}
          <div
            className="absolute left-[18%] top-[22%] hidden h-14 w-14 rotate-12 rounded-2xl border border-white/20 lg:block"
            style={{
              animation: "heroSquareFloat 7s ease-in-out infinite",
            }}
          />

          {/* Floating square right */}
          <div
            className="absolute right-[22%] bottom-[28%] hidden h-10 w-10 -rotate-12 rounded-xl border border-[#F59A01]/50 lg:block"
            style={{
              animation: "heroSmallSquare 5s ease-in-out infinite",
            }}
          />

          {/* Sparkle */}
          <div
            className="absolute left-[13%] bottom-[28%] hidden text-[#F59A01]/80 lg:block"
            style={{
              animation: "heroSparkle 3s ease-in-out infinite",
            }}
          >
            <Sparkles size={28} />
          </div>

          {/* Extra small sparkle */}
          <div
            className="absolute right-[15%] top-[42%] hidden text-white/30 lg:block"
            style={{
              animation: "heroSparkle 4s ease-in-out infinite reverse",
            }}
          >
            <Sparkles size={20} />
          </div>

          {/* Small floating dots */}
          <span
            className="absolute left-[27%] top-[32%] hidden h-2.5 w-2.5 rounded-full bg-[#F59A01]/60 lg:block"
            style={{
              animation: "heroDot 4s ease-in-out infinite",
            }}
          />

          <span
            className="absolute right-[28%] top-[30%] hidden h-2 w-2 rounded-full bg-white/40 lg:block"
            style={{
              animation: "heroDot 5s ease-in-out infinite reverse",
            }}
          />

          {/* =====================================================
            HERO CONTENT
        ===================================================== */}

          <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-4 pb-40 pt-28 sm:px-6 sm:pb-44 lg:px-8">
            <div className="mx-auto max-w-4xl text-center text-white">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] shadow-lg backdrop-blur-md sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-[#F59A01]" />
                Alliance International School
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Let's Stay
                <span className="block text-[#F59A01]">Connected</span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-blue-50 sm:text-base lg:text-lg">
                We are always happy to connect with parents, students and
                families. Reach out to Alliance International School for
                admissions, enquiries or any school-related information.
              </p>

              <div className="mx-auto mt-7 flex items-center justify-center gap-2">
                <span className="h-1 w-8 rounded-full bg-white/40" />
                <span className="h-1 w-16 rounded-full bg-[#F59A01]" />
                <span className="h-1 w-8 rounded-full bg-white/40" />
              </div>
            </div>
          </div>

          {/* Smooth curved transition */}
          <div className="absolute bottom-[-1px] left-[-5%] h-24 w-[110%] rounded-[50%_50%_0_0] bg-[#f7faff]" />
        </section>

        {/* =========================================================
          CONTACT CARD
      ========================================================= */}

        <section className="relative z-20 -mt-28 pb-14 sm:-mt-32 sm:pb-16 lg:-mt-36">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[30px] border border-white/80 bg-white/95 shadow-[0_25px_80px_rgba(22,55,110,0.18)] backdrop-blur-sm">
              <div className="grid lg:grid-cols-[0.88fr_1.12fr]">
                <ContactInfo />

                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
          QUICK CONNECT
      ========================================================= */}

        <section className="relative overflow-hidden bg-gradient-to-b from-[#f7faff] via-[#f5f8fd] to-[#f4f8fd] py-20 sm:py-24">
          {/* Animated blue glow */}
          <div
            className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-[#2859B8]/10 blur-[70px]"
            style={{
              animation: "contactGlowLeft 8s ease-in-out infinite",
            }}
          />

          {/* Animated orange glow */}
          <div
            className="pointer-events-none absolute -right-32 bottom-0 h-[450px] w-[450px] rounded-full bg-[#F59A01]/10 blur-[75px]"
            style={{
              animation: "contactGlowRight 10s ease-in-out infinite",
            }}
          />

          {/* Moving dots */}
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(40,89,184,0.18) 1.2px, transparent 1.2px)",
              backgroundSize: "30px 30px",
              animation: "contactDots 18s linear infinite",
            }}
          />

          {/* Left decorative circle */}
          <div
            className="pointer-events-none absolute left-[4%] top-[12%] h-32 w-32 rounded-full border-[8px] border-[#2859B8]/10"
            style={{
              animation: "contactFloatLarge 7s ease-in-out infinite",
            }}
          />

          {/* Right decorative circle */}
          <div
            className="pointer-events-none absolute right-[5%] top-[13%] h-44 w-44 rounded-full border-[14px] border-[#2859B8]/[0.07]"
            style={{
              animation: "contactFloatLarge 9s ease-in-out infinite reverse",
            }}
          />

          {/* Orange floating shape */}
          <div
            className="pointer-events-none absolute right-[11%] bottom-[14%] h-24 w-24 rotate-45 rounded-[30%] border-2 border-[#F59A01]/15"
            style={{
              animation: "contactShapeMove 7s ease-in-out infinite",
            }}
          />

          {/* Sparkle */}
          <div
            className="pointer-events-none absolute left-[18%] top-[15%] text-[#F59A01]/50"
            style={{
              animation: "contactSparkle 3s ease-in-out infinite",
            }}
          >
            <Sparkles size={30} />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full bg-[#2859B8]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#2859B8]">
                Quick Connect
              </span>

              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#092451] sm:text-4xl lg:text-5xl">
                Need Help Quickly?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Choose the easiest way to connect with Alliance International
                School.
              </p>
            </div>

            {/* =====================================================
              THREE CARDS
          ===================================================== */}

            <div className="mx-auto mt-14 grid max-w-6xl gap-12 md:grid-cols-3 md:gap-7 lg:gap-10">
              {/* CALL */}

              <a href="tel:+919464622222" className="group relative block">
                <div className="absolute inset-0 translate-x-3 translate-y-3 rotate-[-3deg] rounded-2xl bg-[#2859B8] transition-all duration-500 group-hover:translate-x-4 group-hover:translate-y-4 group-hover:rotate-[-5deg]" />

                <div className="relative min-h-[235px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_12px_35px_rgba(40,89,184,0.10)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_22px_45px_rgba(40,89,184,0.18)]">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full border-[12px] border-[#2859B8]/5" />

                  <div className="relative flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#2859B8]/10 text-[#2859B8] transition-all duration-300 group-hover:bg-[#2859B8] group-hover:text-white">
                      <PhoneCall size={27} />
                    </div>

                    <span className="text-4xl font-extrabold text-[#2859B8]/10">
                      01
                    </span>
                  </div>

                  <div className="relative mt-8">
                    <h3 className="text-xl font-extrabold text-[#092451]">
                      Call the School
                    </h3>

                    <p className="mt-2 text-sm text-slate-600">94646-22222</p>
                  </div>

                  <div className="absolute bottom-6 right-7 flex h-9 w-9 items-center justify-center rounded-full bg-[#2859B8]/10 text-[#2859B8] transition-all group-hover:bg-[#F59A01] group-hover:text-white">
                    <ArrowRight size={17} />
                  </div>
                </div>
              </a>

              {/* WHATSAPP */}

              <a
                href="https://api.whatsapp.com/send?phone=919464622222"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block"
              >
                <div className="absolute inset-0 translate-x-3 translate-y-3 rotate-[3deg] rounded-2xl bg-[#F59A01] transition-all duration-500 group-hover:translate-x-4 group-hover:translate-y-4" />

                <div className="relative min-h-[235px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_12px_35px_rgba(245,154,1,0.10)] transition-all duration-500 group-hover:-translate-y-2">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full border-[12px] border-[#F59A01]/10" />

                  <div className="relative flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#F59A01]/10 text-[#F59A01] transition-all group-hover:bg-[#F59A01] group-hover:text-white">
                      <svg
                        viewBox="0 0 32 32"
                        className="h-7 w-7"
                        fill="currentColor"
                      >
                        <path d="M16 3.2C8.93 3.2 3.2 8.65 3.2 15.36c0 2.38.72 4.59 1.96 6.43L3.1 28.8l7.24-2.25a13.15 13.15 0 0 0 5.66 1.27c7.07 0 12.8-5.45 12.8-12.46C28.8 8.65 23.07 3.2 16 3.2Zm0 22.43c-1.82 0-3.51-.48-4.98-1.32l-.36-.21-4.3 1.34 1.3-4.05-.24-.38a10.36 10.36 0 0 1-1.59-5.55C5.83 10.1 10.38 5.76 16 5.76s10.17 4.34 10.17 9.7S21.62 25.63 16 25.63Zm5.57-7.28c-.3-.15-1.77-.84-2.05-.94-.28-.1-.48-.15-.68.15-.2.3-.78.94-.96 1.14-.18.2-.35.22-.65.07-.3-.15-1.26-.45-2.4-1.44-.89-.77-1.49-1.72-1.67-2.02-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.61-.93-2.2-.24-.57-.49-.49-.68-.5h-.58c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.35.2 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.58-.35Z" />
                      </svg>
                    </div>

                    <span className="text-4xl font-extrabold text-[#F59A01]/15">
                      02
                    </span>
                  </div>

                  <div className="relative mt-8">
                    <h3 className="text-xl font-extrabold text-[#092451]">
                      WhatsApp Us
                    </h3>

                    <p className="mt-2 text-sm text-slate-600">
                      Chat with our school team
                    </p>
                  </div>

                  <div className="absolute bottom-6 right-7 flex h-9 w-9 items-center justify-center rounded-full bg-[#F59A01]/10 text-[#F59A01] transition-all group-hover:bg-[#2859B8] group-hover:text-white">
                    <ArrowRight size={17} />
                  </div>
                </div>
              </a>

              {/* VISIT */}

              <a
                href="https://www.google.com/maps/search/?api=1&query=Alliance+International+School+Jaitu+Punjab"
                target="_blank"
                rel="noreferrer"
                className="group relative block"
              >
                <div className="absolute inset-0 translate-x-3 translate-y-3 rotate-[-3deg] rounded-2xl bg-[#2859B8] transition-all duration-500 group-hover:translate-x-4 group-hover:translate-y-4" />

                <div className="relative min-h-[235px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_12px_35px_rgba(40,89,184,0.10)] transition-all duration-500 group-hover:-translate-y-2">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full border-[12px] border-[#2859B8]/5" />

                  <div className="relative flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#2859B8]/10 text-[#2859B8] transition-all group-hover:bg-[#2859B8] group-hover:text-white">
                      <MapPin size={27} />
                    </div>

                    <span className="text-4xl font-extrabold text-[#2859B8]/10">
                      03
                    </span>
                  </div>

                  <div className="relative mt-8">
                    <h3 className="text-xl font-extrabold text-[#092451]">
                      Visit Our School
                    </h3>

                    <p className="mt-2 text-sm text-slate-600">
                      Get directions to Jaitu
                    </p>
                  </div>

                  <div className="absolute bottom-6 right-7 flex h-9 w-9 items-center justify-center rounded-full bg-[#2859B8]/10 text-[#2859B8] transition-all group-hover:bg-[#F59A01] group-hover:text-white">
                    <ArrowRight size={17} />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================
          COMMUNICATION ILLUSTRATIONS
      ========================================================= */}

        <section className="relative overflow-hidden bg-gradient-to-b from-[#f4f8fd] via-[#f7faff] to-[#f9fbfe] py-20 sm:py-24">
          <div
            className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#2859B8]/10 blur-[80px]"
            style={{
              animation: "contactGlowLeft 9s ease-in-out infinite",
            }}
          />

          <div
            className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[#F59A01]/10 blur-[80px]"
            style={{
              animation: "contactGlowRight 11s ease-in-out infinite",
            }}
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#F59A01]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#F59A01]">
                <MessageCircle size={15} />
                We're Here to Listen
              </span>

              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#092451] sm:text-4xl lg:text-5xl">
                Let's Talk About Your
                <span className="text-[#2859B8]"> Child's Future</span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Whether you want to know about admissions, academics, school
                activities or anything else, our team is always ready to help.
              </p>
            </div>

            {/* Three illustrations */}

            <div className="mt-14 grid items-center gap-14 md:grid-cols-3 md:gap-14 lg:mt-16 lg:gap-20 xl:gap-24">
              {/* Illustration 1 */}

              <div className="relative flex min-h-[270px] items-center justify-center">
                <div className="absolute h-44 w-44 rounded-full bg-[#2859B8]/10 blur-3xl" />

                <div
                  className="absolute left-[2%] top-[4%] z-20 rounded-2xl border border-[#2859B8]/10 bg-white px-4 py-3 shadow-lg"
                  style={{
                    animation: "speechBubble 3s ease-in-out infinite",
                  }}
                >
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#2859B8]" />
                    <span className="h-2 w-2 rounded-full bg-[#2859B8]" />
                    <span className="h-2 w-2 rounded-full bg-[#2859B8]" />
                  </div>
                </div>

                <img
                  src={illustration1}
                  alt=""
                  className="relative z-10 max-h-[240px] w-[82%] object-contain drop-shadow-[0_18px_30px_rgba(40,89,184,0.10)] sm:max-h-[250px]"
                  style={{
                    animation: "illustrationTalk 5s ease-in-out infinite",
                  }}
                />
              </div>

              {/* Illustration 2 */}

              <div className="relative flex min-h-[270px] items-center justify-center">
                <div className="absolute h-44 w-44 rounded-full bg-[#F59A01]/10 blur-3xl" />

                <div
                  className="absolute right-[2%] top-[5%] z-20 rounded-2xl bg-[#2859B8] px-4 py-3 text-white shadow-xl"
                  style={{
                    animation: "speechBubble 3.5s ease-in-out infinite",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <MessageCircle size={17} />
                    <span className="text-xs font-semibold">
                      Let's connect!
                    </span>
                  </div>
                </div>

                <img
                  src={illustration2}
                  alt=""
                  className="relative z-10 max-h-[240px] w-[82%] object-contain drop-shadow-[0_18px_30px_rgba(245,154,1,0.10)] sm:max-h-[250px]"
                  style={{
                    animation: "illustrationFloat 6s ease-in-out infinite",
                  }}
                />
              </div>

              {/* Illustration 3 */}

              <div className="relative flex min-h-[270px] items-center justify-center">
                <div className="absolute h-44 w-44 rounded-full bg-[#2859B8]/10 blur-3xl" />

                <div
                  className="absolute left-[2%] top-[6%] z-20 rounded-2xl border border-[#F59A01]/15 bg-white px-4 py-3 shadow-lg"
                  style={{
                    animation: "speechBubble 4s ease-in-out infinite",
                  }}
                >
                  <div className="flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#F59A01]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#F59A01]/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#F59A01]/30" />
                  </div>
                </div>

                <img
                  src={illustration3}
                  alt=""
                  className="relative z-10 max-h-[240px] w-[82%] object-contain drop-shadow-[0_18px_30px_rgba(40,89,184,0.10)] sm:max-h-[250px]"
                  style={{
                    animation: "illustrationTalk 5.5s ease-in-out infinite",
                  }}
                />
              </div>
            </div>

            <div className="mx-auto mt-8 flex max-w-2xl items-center gap-3 text-center">
              <div className="h-px flex-1 bg-[#2859B8]/10" />

              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#2859B8]/60">
                Parents • Students • Teachers
              </span>

              <div className="h-px flex-1 bg-[#2859B8]/10" />
            </div>
          </div>
        </section>

        {/* =========================================================
          GOOGLE MAP + OFFICE HOURS
      ========================================================= */}

        <div className="relative bg-gradient-to-b from-[#f9fbfe] via-[#f8fbff] to-[#f7faff]">
          <OfficeHours />

          <GoogleMap />
        </div>

        {/* =========================================================
          ALL ANIMATIONS
      ========================================================= */}

        <style>{`

        /* HERO CAP */
        @keyframes heroCapFloat {
          0%,100% {
            transform: translate3d(0,0,0) rotate(-4deg);
          }

          50% {
            transform: translate3d(12px,-18px,0) rotate(4deg);
          }
        }

        /* HERO BOOK */
        @keyframes heroBookFloat {
          0%,100% {
            transform: translate3d(0,0,0) rotate(8deg);
          }

          50% {
            transform: translate3d(-14px,-20px,0) rotate(-4deg);
          }
        }

        /* BIG CIRCLES */
        @keyframes heroCircleLeft {
          0%,100% {
            transform: translate(0,0) scale(1);
          }

          50% {
            transform: translate(25px,20px) scale(1.08);
          }
        }

        @keyframes heroCircleRight {
          0%,100% {
            transform: translate(0,0) scale(1);
          }

          50% {
            transform: translate(-25px,25px) scale(1.07);
          }
        }

        /* SQUARE */
        @keyframes heroSquareFloat {
          0%,100% {
            transform: translate(0,0) rotate(12deg);
          }

          50% {
            transform: translate(20px,-15px) rotate(25deg);
          }
        }

        @keyframes heroSmallSquare {
          0%,100% {
            transform: translate(0,0) rotate(-12deg);
          }

          50% {
            transform: translate(-15px,-20px) rotate(12deg);
          }
        }

        /* SPARKLE */
        @keyframes heroSparkle {
          0%,100% {
            opacity:.35;
            transform:scale(.8) rotate(0deg);
          }

          50% {
            opacity:1;
            transform:scale(1.2) rotate(15deg);
          }
        }

        /* DOTS */
        @keyframes heroDot {
          0%,100% {
            transform:translateY(0);
            opacity:.45;
          }

          50% {
            transform:translateY(-18px);
            opacity:1;
          }
        }

        /* QUICK CONNECT GLOW */
        @keyframes contactGlowLeft {
          0%,100% {
            transform:translate3d(0,0,0) scale(1);
            opacity:.65;
          }

          50% {
            transform:translate3d(90px,35px,0) scale(1.2);
            opacity:1;
          }
        }

        @keyframes contactGlowRight {
          0%,100% {
            transform:translate3d(0,0,0) scale(1);
            opacity:.55;
          }

          50% {
            transform:translate3d(-80px,-40px,0) scale(1.18);
            opacity:1;
          }
        }

        /* MOVING DOT BACKGROUND */
        @keyframes contactDots {
          from {
            background-position:0 0;
          }

          to {
            background-position:30px 30px;
          }
        }

        /* LARGE FLOATING CIRCLES */
        @keyframes contactFloatLarge {
          0%,100% {
            transform:translate3d(0,0,0) rotate(0deg);
          }

          50% {
            transform:translate3d(25px,-25px,0) rotate(8deg);
          }
        }

        /* SHAPE */
        @keyframes contactShapeMove {
          0%,100% {
            transform:translateY(0) rotate(12deg);
          }

          50% {
            transform:translateY(-22px) rotate(30deg);
          }
        }

        /* SPARKLE */
        @keyframes contactSparkle {
          0%,100% {
            opacity:.25;
            transform:scale(.8);
          }

          50% {
            opacity:.9;
            transform:scale(1.2) rotate(15deg);
          }
        }

        /* ILLUSTRATIONS */
        @keyframes illustrationFloat {
          0%,100% {
            transform:translateY(0);
          }

          50% {
            transform:translateY(-12px);
          }
        }

        @keyframes illustrationTalk {
          0%,100% {
            transform:rotate(0deg) translateY(0);
          }

          25% {
            transform:rotate(-1deg) translateY(-3px);
          }

          50% {
            transform:rotate(1deg) translateY(0);
          }

          75% {
            transform:rotate(-.5deg) translateY(-2px);
          }
        }

        /* CHAT BUBBLES */
        @keyframes speechBubble {
          0%,100% {
            opacity:.65;
            transform:scale(.95) translateY(5px);
          }

          50% {
            opacity:1;
            transform:scale(1.04) translateY(-5px);
          }
        }

        /* MOBILE */
        @media (max-width: 767px) {

          .hero-decoration {
            display:none;
          }

        }

        /* ACCESSIBILITY */
        @media (prefers-reduced-motion: reduce) {

          *,
          *::before,
          *::after {
            animation-duration:.01ms !important;
            animation-iteration-count:1 !important;
            scroll-behavior:auto !important;
          }

        }

      `}</style>
      </main>
    </>
  );
};

export default Contact;
