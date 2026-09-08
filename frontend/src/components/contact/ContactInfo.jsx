import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="relative overflow-hidden bg-[#2859B8] p-7 text-white sm:p-10 lg:p-12">
      {/* Decorative shapes */}
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full border-[20px] border-white/5" />
      <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full border-[18px] border-[#F59A01]/10" />

      <div className="relative">
        <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-50">
          Get in Touch
        </div>

        <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
          We’d Love to
          <span className="block text-[#F59A01]">Hear From You</span>
        </h2>

        <p className="mt-4 max-w-md text-sm leading-7 text-blue-100 sm:text-base">
          Whether you are looking for admission information, have a question
          about the school, or simply want to connect with us, our team is ready
          to help.
        </p>

        <div className="mt-9 space-y-5">
          {/* Address */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Alliance+International+School+Jaitu+Punjab"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex gap-4"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#F59A01] transition duration-300 group-hover:bg-[#F59A01] group-hover:text-white">
              <MapPin size={21} />
            </div>

            <div>
              <p className="text-sm font-bold text-white">School Address</p>

              <p className="mt-1 text-sm leading-6 text-blue-100 transition-colors group-hover:text-white">
                Opp. Hanuman Mandir, Gaushala Road,
                <br />
                Jaitu, Faridkot, Punjab
              </p>
            </div>
          </a>

          {/* Phone */}
          <a href="tel:+919464622222" className="group flex gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#F59A01] transition duration-300 group-hover:bg-[#F59A01] group-hover:text-white">
              <Phone size={21} />
            </div>

            <div>
              <p className="text-sm font-bold text-white">Call Us</p>

              <p className="mt-1 text-sm text-blue-100">+91 94646-22222</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://api.whatsapp.com/send?phone=919464622222"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex gap-4"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#F59A01] transition duration-300 group-hover:bg-[#F59A01] group-hover:text-white">
              <MessageCircle size={21} />
            </div>

            <div>
              <p className="text-sm font-bold text-white">WhatsApp</p>

              <p className="mt-1 text-sm text-blue-100">+91 94646-22222</p>
            </div>
          </a>

          {/* Email */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=allianceinternationaljaitu@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex gap-4"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#F59A01] transition duration-300 group-hover:bg-[#F59A01] group-hover:text-white">
              <Mail size={21} />
            </div>

            <div className="min-w-0">
              <p className="text-sm font-bold text-white">Email Us</p>

              <p className="mt-1 break-all text-sm text-blue-100">
                allianceinternationaljaitu@gmail.com
              </p>
            </div>
          </a>

          {/* Timing */}
          <div className="group flex gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#F59A01] transition duration-300 group-hover:bg-[#F59A01] group-hover:text-white">
              <Clock3 size={21} />
            </div>

            <div>
              <p className="text-sm font-bold text-white">School Timings</p>

              <p className="mt-1 text-sm leading-6 text-blue-100">
                Summer: 07:50 AM – 02:00 PM
                <br />
                Winter: 08:50 AM – 03:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Established */}
        <div className="mt-9 border-t border-white/15 pt-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-blue-100">Established</span>

            <span className="rounded-full bg-[#F59A01] px-4 py-1.5 text-sm font-bold text-white">
              2015
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
