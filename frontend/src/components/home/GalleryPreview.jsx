import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

/* =========================================================
   GALLERY IMAGES
========================================================= */

// CREATIVE / ART
import creative01 from "../../assets/gallery/creative/creative-01.jpg";
import creative02 from "../../assets/gallery/creative/creative-02.jpg";
import creative03 from "../../assets/gallery/creative/creative-03.jpg";

// SPORTS
import sports01 from "../../assets/gallery/sports/sports-01.jpg";
import sports02 from "../../assets/gallery/sports/sports-02.jpg";
import sports03 from "../../assets/gallery/sports/sports-03.jpg";

// SCHOOL EVENTS
import event01 from "../../assets/gallery/events/event-01.jpg";
import event02 from "../../assets/gallery/events/event-02.jpg";
import event03 from "../../assets/gallery/events/event-03.jpg";

// LEARNING / LIBRARY
import learning01 from "../../assets/gallery/learning/learning-01.jpg";
import learning02 from "../../assets/gallery/learning/learning-02.jpg";
import learning03 from "../../assets/gallery/learning/learning-03.jpg";

/* =========================================================
   GALLERY DATA

   ORDER:
   1. LEARNING
   2. EVENTS
   3. SPORTS
   4. CREATIVITY
========================================================= */

const galleryItems = [
  {
    id: 1,
    images: [learning01, learning02, learning03],
    title: "Library & Learning",
    category: "DISCOVER & LEARN",
    description:
      "Our library encourages curiosity, reading, exploration, and independent thinking beyond the everyday classroom experience.",
    theme: "blue",
  },

  {
    id: 2,
    images: [event01, event02, event03],
    title: "School Events",
    category: "SPECIAL MOMENTS",
    description:
      "Celebrations, performances, cultural programmes, and school events bring students together and create memories to cherish.",
    theme: "orange",
  },

  {
    id: 3,
    images: [sports01, sports02, sports03],
    title: "Sports Activities",
    category: "ACTIVE & ENERGETIC",
    description:
      "Students build confidence, teamwork, discipline, and a healthy competitive spirit through sports and physical activities.",
    theme: "blue",
  },

  {
    id: 4,
    images: [creative01, creative02, creative03],
    title: "Art & Creativity",
    category: "CREATIVE MOMENTS",
    description:
      "Students explore their imagination through art, colours, crafts, and creative activities that make learning joyful and expressive.",
    theme: "orange",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const GalleryPreview = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  /*
   * Current photo of each category
   *
   * Example:
   * Learning -> photo 1
   * Events   -> photo 2
   * Sports   -> photo 1
   * etc.
   */
  const [photoIndexes, setPhotoIndexes] = useState(galleryItems.map(() => 0));

  const [isAnimating, setIsAnimating] = useState(false);

  const touchStartX = useRef(null);

  const total = galleryItems.length;

  const active = galleryItems[activeIndex];

  const activePhotoIndex = photoIndexes[activeIndex];

  /* =========================================================
     GET CARD BY POSITION
  ========================================================== */

  const getItem = (offset) => {
    return galleryItems[(activeIndex + offset + total) % total];
  };

  const behindOne = getItem(1);
  const behindTwo = getItem(2);
  const behindThree = getItem(3);

  /* =========================================================
     AUTO PHOTO CHANGE
     EVERY 3 SECONDS
  ========================================================== */

  useEffect(() => {
    const timer = setInterval(() => {
      setPhotoIndexes((previous) => {
        const updated = [...previous];

        updated[activeIndex] =
          (updated[activeIndex] + 1) % galleryItems[activeIndex].images.length;

        return updated;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  /* =========================================================
     MANUAL PHOTO CHANGE
     LEFT / RIGHT SWIPE INSIDE CARD
  ========================================================== */

  const changeActivePhoto = (direction) => {
    setPhotoIndexes((previous) => {
      const updated = [...previous];

      const current = updated[activeIndex];

      const totalPhotos = galleryItems[activeIndex].images.length;

      updated[activeIndex] =
        direction === "next"
          ? (current + 1) % totalPhotos
          : (current - 1 + totalPhotos) % totalPhotos;

      return updated;
    });
  };

  /* =========================================================
     TOUCH START
  ========================================================== */

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  /* =========================================================
     TOUCH END
  ========================================================== */

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) {
      return;
    }

    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;

    const distance = endX - touchStartX.current;

    /*
     * Small swipe:
     * change PHOTO
     *
     * Large swipe outside front card:
     * change CATEGORY
     */

    if (Math.abs(distance) > 45) {
      if (Math.abs(distance) < 120) {
        if (distance < 0) {
          changeActivePhoto("next");
        } else {
          changeActivePhoto("previous");
        }
      } else if (!isAnimating) {
        if (distance < 0) {
          nextSlide();
        } else {
          previousSlide();
        }
      }
    }

    touchStartX.current = null;
  };

  /* =========================================================
     CATEGORY NEXT
  ========================================================== */

  const nextSlide = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    setTimeout(() => {
      setActiveIndex((previous) => (previous + 1) % total);

      setIsAnimating(false);
    }, 450);
  };

  /* =========================================================
     CATEGORY PREVIOUS
  ========================================================== */

  const previousSlide = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    setTimeout(() => {
      setActiveIndex((previous) => (previous - 1 + total) % total);

      setIsAnimating(false);
    }, 450);
  };

  /* =========================================================
     CHANGE CATEGORY USING ARROW
  ========================================================== */

  const handlePrevious = () => {
    previousSlide();
  };

  const handleNext = () => {
    nextSlide();
  };

  return (
    <section
      className="
        gallery-preview
        relative
        overflow-hidden
        bg-white
        py-14
        sm:py-20
        lg:py-24
      "
    >
      {/* =====================================================
          SOFT BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-24
          h-72
          w-72
          rounded-full
          bg-blue-50
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-10
          h-80
          w-80
          rounded-full
          bg-orange-50
          blur-3xl
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="
            gallery-heading
            mx-auto
            mb-8
            flex
            max-w-4xl
            flex-col
            items-center
            justify-center
            text-center
            sm:mb-10
          "
        >
          {/* BADGE */}

          <div
            className="
              mb-7
              inline-flex
              items-center
              gap-2
              gallery-badge
              rounded-full
              border
              border-transparent
              bg-white
              px-4
              py-2
              text-[10px]
              font-bold
              uppercase
              tracking-[0.22em]
              text-blue-600
              shadow-sm
              sm:text-xs
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-orange-500
              "
            />
            School Gallery
          </div>

          {/* HEADING */}

          <h2
            className="
              text-center
              text-[32px]
              font-extrabold
              leading-[1.08]
              tracking-tight
              text-[#173B82]
              sm:text-5xl
              md:text-6xl
              lg:text-6xl
            "
          >
            <span
              className="
                bg-gradient-to-r
                from-[#173B82]
                via-[#2859B8]
                to-[#5F79C4]
                bg-clip-text
                text-transparent
              "
            >
              Moments that Tell
            </span>

            <span
              className="
                block
                bg-gradient-to-r
                from-[#6073A8]
                via-[#A48783]
                to-[#F59A01]
                bg-clip-text
                text-transparent
              "
            >
              Our Story
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mt-9
              max-w-xl
              text-center
              text-xs
              leading-5
              text-slate-500
              sm:text-sm
              sm:leading-6
              md:text-base
            "
          >
            Explore the learning, activities, celebrations, and memorable
            experiences of Alliance School.
          </p>

          {/* VIEW GALLERY */}

          <Link
            to="/gallery"
            className="
              mt-7
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-blue-600
              transition-all
              duration-300
              hover:gap-3
            "
          >
            View Full Gallery
            <ArrowUpRight size={17} />
          </Link>
        </div>

        {/* =====================================================
            CAROUSEL
        ====================================================== */}

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[1120px]
          "
        >
          <div
            className="
              gallery-carousel-shell
              relative
              flex
              min-h-[540px]
              items-center
              justify-center
              px-1
              py-8
              sm:min-h-[550px]
              sm:px-8
              lg:min-h-[560px]
              lg:px-10
            "
          >
            {/* =================================================
                LEFT CATEGORY ARROW
            ================================================== */}

            <button
              type="button"
              onClick={handlePrevious}
              disabled={isAnimating}
              aria-label="Previous gallery category"
              className="
                gallery-arrow
                gallery-arrow-left
                absolute
                left-0
                top-1/2
                z-[100]
                flex
                h-9
                w-9
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                text-slate-700
                shadow-lg
                transition-all
                duration-300
                hover:scale-105
                hover:border-blue-500
                hover:bg-blue-600
                hover:text-white
                sm:left-[-18px]
                sm:h-11
                sm:w-11
                lg:left-[-22px]
              "
            >
              <ArrowLeft size={17} />
            </button>

            {/* =================================================
                CARDS AREA
            ================================================== */}

            <div
              className="
                gallery-cards-area
                relative
                flex
                h-[420px]
                w-full
                max-w-[970px]
                items-center
                justify-center
                touch-pan-y
              "
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* =================================================
                  BACK CARD 3
              ================================================== */}

              <div
                className="
                  gallery-back-card-3
                  absolute
                  left-[1%]
                  top-1/2
                  z-10
                  hidden
                  h-[240px]
                  w-[200px]
                  -translate-y-1/2
                  overflow-hidden
                  rounded-[14px]
                  border-4
                  border-white
                  bg-white
                  shadow-[0_15px_35px_rgba(15,23,42,0.10)]
                  lg:block
                "
              >
                <img
                  src={
                    behindThree.images[photoIndexes[(activeIndex + 3) % total]]
                  }
                  alt={behindThree.title}
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />
              </div>

              {/* =================================================
                  BACK CARD 2
              ================================================== */}

              <div
                className="
                  gallery-back-card-2
                  absolute
                  left-[7%]
                  top-1/2
                  z-20
                  hidden
                  h-[285px]
                  w-[240px]
                  -translate-y-1/2
                  overflow-hidden
                  rounded-[16px]
                  border-4
                  border-white
                  bg-white
                  shadow-[0_18px_40px_rgba(15,23,42,0.12)]
                  sm:block
                  lg:left-[10%]
                "
              >
                <img
                  src={
                    behindTwo.images[photoIndexes[(activeIndex + 2) % total]]
                  }
                  alt={behindTwo.title}
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />
              </div>

              {/* =================================================
                  BACK CARD 1
              ================================================== */}

              <div
                className={`
                  gallery-back-card-1
                  absolute
                  left-[15%]
                  top-1/2
                  z-30
                  h-[330px]
                  w-[275px]
                  -translate-y-1/2
                  overflow-hidden
                  rounded-[18px]
                  border-4
                  border-white
                  bg-white
                  shadow-[0_20px_45px_rgba(15,23,42,0.14)]
                  sm:left-[17%]
                  sm:h-[370px]
                  sm:w-[305px]
                  lg:left-[19%]
                  lg:h-[400px]
                  lg:w-[330px]
                `}
              >
                <img
                  src={
                    behindOne.images[photoIndexes[(activeIndex + 1) % total]]
                  }
                  alt={behindOne.title}
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />
              </div>

              {/* =================================================
                  FRONT ACTIVE CARD
              ================================================== */}

              <div
                className={`
                  gallery-front-card
                  absolute
                  left-1/2
                  top-1/2
                  z-50
                  h-[370px]
                  w-[280px]
                  -translate-x-1/2
                  -translate-y-1/2
                  overflow-hidden
                  rounded-[20px]
                  border-4
                  border-white
                  bg-white
                  shadow-[0_25px_55px_rgba(15,23,42,0.24)]
                  transition-all
                  duration-500
                  sm:h-[400px]
                  sm:w-[315px]
                  lg:h-[420px]
                  lg:w-[340px]
                  ${
                    isAnimating
                      ? "scale-[0.96] opacity-80"
                      : "scale-100 opacity-100"
                  }
                `}
              >
                {/* IMAGE */}

                <img
                  src={active.images[activePhotoIndex]}
                  alt={active.title}
                  draggable="false"
                  className="
                    h-full
                    w-full
                    select-none
                    object-cover
                    transition-all
                    duration-500
                  "
                />

                {/* IMAGE NUMBER */}

                <div
                  className="
                    absolute
                    bottom-4
                    left-4
                    rounded-full
                    bg-white
                    px-3
                    py-1.5
                    text-[10px]
                    font-bold
                    text-slate-800
                    shadow-lg
                    sm:px-4
                    sm:py-2
                    sm:text-xs
                  "
                >
                  {String(active.id).padStart(2, "0")}

                  {" / "}

                  {String(total).padStart(2, "0")}
                </div>

                {/* PHOTO INDICATORS */}

                <div
                  className="
                    absolute
                    right-4
                    top-4
                    flex
                    gap-1.5
                  "
                >
                  {active.images.map((_, index) => (
                    <span
                      key={index}
                      className={`
                          h-1.5
                          rounded-full
                          transition-all
                          duration-300
                          ${
                            index === activePhotoIndex
                              ? "w-7 bg-white"
                              : "w-1.5 bg-white/60"
                          }
                        `}
                    />
                  ))}
                </div>

                {/* MANUAL PHOTO SWIPE HINT */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-4
                    right-4
                    rounded-full
                    bg-black/30
                    px-2.5
                    py-1.5
                    text-[9px]
                    font-medium
                    text-white
                    backdrop-blur-sm
                    sm:hidden
                  "
                >
                  Swipe
                </div>
              </div>

              {/* =================================================
                  UNIFIED RESPONSIVE CONTENT
              ================================================== */}

              <div
                className={`
                  gallery-desktop-content
                  absolute
                  left-1/2
                  top-1/2
                  z-40
                  -translate-y-1/2
                  rounded-[14px] sm:rounded-[18px] lg:rounded-[20px]
                  p-5 sm:p-6 lg:p-8
                  text-white
                  shadow-[0_25px_55px_rgba(15,23,42,0.18)]
                  w-[250px] sm:w-[300px] lg:w-[350px]
                  translate-x-[20px] sm:translate-x-[90px] lg:translate-x-[145px]
                  ${active.theme === "orange" ? "bg-orange-500" : "bg-blue-600"}
                `}
              >
                <p
                  className="
                    text-[9px] sm:text-[10px] lg:text-xs
                    font-bold
                    uppercase
                    tracking-[0.2em] sm:tracking-[0.28em]
                    text-white/80 lg:text-orange-200
                  "
                >
                  {active.category}
                </p>

                <h3
                  className="
                    mt-2 sm:mt-4
                    text-xl sm:text-2xl lg:text-3xl
                    font-bold
                    leading-tight
                  "
                >
                  {active.title}
                </h3>

                <div
                  className="
                    mt-3 sm:mt-5
                    h-1
                    w-8 sm:w-12
                    rounded-full
                    bg-white/80
                  "
                />

                <p
                  className="
                    mt-4 sm:mt-6
                    text-[11px] sm:text-xs lg:text-sm
                    leading-[1.5] sm:leading-6
                    text-white/95
                  "
                >
                  {active.description}
                </p>

                <Link
                  to="/gallery"
                  className="
                    mt-4 sm:mt-7
                    inline-flex
                    items-center
                    gap-2
                    text-[10px] sm:text-[11px] lg:text-xs
                    font-bold
                    uppercase
                    tracking-[0.15em] sm:tracking-[0.2em]
                    text-white
                    transition-all
                    duration-300
                    hover:gap-3
                  "
                >
                  Explore Gallery
                  <ArrowRight size={14} className="lg:w-4 lg:h-4" />
                </Link>
              </div>
            </div>

            {/* =================================================
                RIGHT CATEGORY ARROW
            ================================================== */}

            <button
              type="button"
              onClick={handleNext}
              disabled={isAnimating}
              aria-label="Next gallery category"
              className="
                gallery-arrow
                gallery-arrow-right
                absolute
                right-0
                top-1/2
                z-[100]
                flex
                h-9
                w-9
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-blue-600
                text-white
                shadow-lg
                shadow-blue-200
                transition-all
                duration-300
                hover:scale-105
                hover:bg-blue-700
                disabled:cursor-not-allowed
                sm:right-[-18px]
                sm:h-11
                sm:w-11
                lg:right-[-22px]
              "
            >
              <ArrowRight size={17} />
            </button>
          </div>

          {/* =====================================================
              CATEGORY DOTS
          ====================================================== */}

          <div
            className="
              mt-7
              flex
              justify-center
              gap-2
            "
          >
            {galleryItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  if (!isAnimating) {
                    setActiveIndex(index);
                  }
                }}
                aria-label={`Show ${item.title}`}
                className={`
                    h-1.5
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      activeIndex === index
                        ? "w-10 bg-orange-500"
                        : "w-2.5 bg-slate-300 hover:bg-blue-400"
                    }
                  `}
              />
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          RESPONSIVE CSS
      ====================================================== */}

      <style>
        {`

          /* =================================================
             SCHOOL GALLERY BORDER ANIMATION
          ================================================= */

          .gallery-badge {
            background:
              linear-gradient(white, white) padding-box,
              conic-gradient(
                from 0deg,
                #f59e0b,
                #2563eb,
                #f59e0b
              ) border-box;
            animation: galleryBadgeBorderRotate 3s linear infinite;
          }

          @keyframes galleryBadgeBorderRotate {
            from {
              background:
                linear-gradient(white, white) padding-box,
                conic-gradient(
                  from 0deg,
                  #f59e0b,
                  #2563eb,
                  #f59e0b
                ) border-box;
            }

            to {
              background:
                linear-gradient(white, white) padding-box,
                conic-gradient(
                  from 360deg,
                  #f59e0b,
                  #2563eb,
                  #f59e0b
                ) border-box;
            }
          }

          /* =================================================
             TABLET / IPAD
          ================================================= */

          @media (max-width: 1023px) {

            .gallery-carousel-shell {
              min-height: 500px;
            }

            .gallery-cards-area {
              max-width: 760px;
            }

          }


          /* =================================================
             MOBILE
          ================================================= */

          @media (max-width: 767px) {

            .gallery-preview {
              padding-top: 48px !important;
              padding-bottom: 105px !important;
            }


            .gallery-heading {
              margin-bottom: 12px !important;
            }


            .gallery-heading h2 {
              font-size: 30px !important;
              font-weight: 800 !important;
              line-height: 1.08 !important;
              text-align: center !important;
            }


            .gallery-heading p {
              max-width: 330px !important;
              font-size: 12px !important;
              line-height: 1.5 !important;
              text-align: center !important;
            }


            .gallery-heading a {
              font-size: 12px !important;
            }


            /* CAROUSEL */

            .gallery-carousel-shell {
              min-height: 465px !important;
              padding: 0 !important;
            }


            .gallery-cards-area {
              height: 350px !important;
              width: 100% !important;
              max-width: 100% !important;
            }


            /* =================================================
               THREE MOBILE CARDS
            ================================================== */


            /* BACK CARD - RIGHT */

            .gallery-back-card-3 {
              display: block !important;

              left: auto !important;
              right: 2% !important;

              height: 220px !important;
              width: 118px !important;

              border-width: 2px !important;
              border-radius: 13px !important;

              opacity: 0.72;
            }


            /* BACK CARD - LEFT */

            .gallery-back-card-1 {
              display: block !important;

              left: 2% !important;

              height: 250px !important;
              width: 135px !important;

              border-width: 2px !important;
              border-radius: 14px !important;

              opacity: 0.88;
            }


            /* HIDE EXTRA FOURTH CARD */

            .gallery-back-card-2 {
              display: none !important;
            }


            /* =================================================
               FRONT CARD
            ================================================== */

            .gallery-front-card {
              height: 285px !important;
              width: 190px !important;

              border-width: 2px !important;
              border-radius: 16px !important;
            }


            /* =================================================
               DESKTOP CONTENT HIDDEN
            ================================================== */

            .gallery-desktop-content {
              display: none !important;
            }


            /* =================================================
               MOBILE CONTENT
            ================================================== */

            .gallery-mobile-content {
              width: 270px !important;
              max-width: calc(100vw - 90px) !important;

              bottom: -8px !important;

              padding: 14px !important;

              border-radius: 14px !important;

              transform:
                translateX(-50%)
                translateY(82%) !important;
            }


            .gallery-mobile-content h3 {
              font-size: 17px !important;
            }


            .gallery-mobile-content p {
              font-size: 10px !important;
              line-height: 1.45 !important;
            }


            /* =================================================
               CATEGORY ARROWS
            ================================================== */

            .gallery-arrow {
              height: 34px !important;
              width: 34px !important;

              z-index: 120 !important;
            }


            .gallery-arrow-left {
              left: 0 !important;
            }


            .gallery-arrow-right {
              right: 0 !important;
            }


            .gallery-arrow svg {
              width: 15px !important;
              height: 15px !important;
            }

          }


          /* =================================================
             430px AND BELOW
          ================================================= */

          @media (max-width: 430px) {

            .gallery-preview {
              padding-top: 42px !important;
            }


            .gallery-heading h2 {
              font-size: 27px !important;
            }


            .gallery-heading p {
              font-size: 11px !important;
            }


            .gallery-carousel-shell {
              min-height: 440px !important;
            }


            .gallery-cards-area {
              height: 325px !important;
            }


            /* RIGHT CARD */

            .gallery-back-card-3 {
              right: 0% !important;

              height: 205px !important;
              width: 108px !important;
            }


            /* LEFT CARD */

            .gallery-back-card-1 {
              left: 0% !important;

              height: 230px !important;
              width: 122px !important;
            }


            /* FRONT */

            .gallery-front-card {
              height: 265px !important;
              width: 178px !important;
            }


            /* MOBILE CONTENT */

            .gallery-mobile-content {
              width: 255px !important;
              max-width: calc(100vw - 85px) !important;

              padding: 13px !important;
            }


            .gallery-mobile-content h3 {
              font-size: 16px !important;
            }


            .gallery-mobile-content p {
              font-size: 10px !important;
            }


            /* ARROWS */

            .gallery-arrow {
              height: 32px !important;
              width: 32px !important;
            }

          }


          /* =================================================
             390px AND BELOW
          ================================================== */

          @media (max-width: 390px) {

            .gallery-heading h2 {
              font-size: 25px !important;
            }


            .gallery-cards-area {
              height: 310px !important;
            }


            .gallery-back-card-3 {
              height: 190px !important;
              width: 100px !important;
            }


            .gallery-back-card-1 {
              height: 215px !important;
              width: 112px !important;
            }


            .gallery-front-card {
              height: 250px !important;
              width: 168px !important;
            }


            .gallery-mobile-content {
              width: 245px !important;
              padding: 12px !important;
            }


            .gallery-mobile-content h3 {
              font-size: 15px !important;
            }


            .gallery-mobile-content p {
              font-size: 9.5px !important;
            }

          }


          /* =================================================
             360px AND BELOW
          ================================================== */

          @media (max-width: 360px) {

            .gallery-preview {
              padding-top: 38px !important;
            }


            .gallery-heading h2 {
              font-size: 23px !important;
            }


            .gallery-heading p {
              font-size: 10px !important;
            }


            .gallery-carousel-shell {
              min-height: 410px !important;
            }


            .gallery-cards-area {
              height: 290px !important;
            }


            /* RIGHT */

            .gallery-back-card-3 {
              height: 175px !important;
              width: 92px !important;
            }


            /* LEFT */

            .gallery-back-card-1 {
              height: 200px !important;
              width: 102px !important;
            }


            /* FRONT */

            .gallery-front-card {
              height: 235px !important;
              width: 155px !important;
            }


            /* CONTENT */

            .gallery-mobile-content {
              width: 225px !important;
              max-width: calc(100vw - 70px) !important;

              padding: 11px !important;

              transform:
                translateX(-50%)
                translateY(80%) !important;
            }


            .gallery-mobile-content h3 {
              font-size: 14px !important;
            }


            .gallery-mobile-content p {
              font-size: 9px !important;
              line-height: 1.4 !important;
            }


            .gallery-arrow {
              height: 30px !important;
              width: 30px !important;
            }


            .gallery-arrow svg {
              width: 13px !important;
              height: 13px !important;
            }

          }


          /* =================================================
             REDUCED MOTION
          ================================================== */

          @media (prefers-reduced-motion: reduce) {

            .gallery-preview *,
            .gallery-preview *::before,
            .gallery-preview *::after {
              scroll-behavior: auto !important;
              transition-duration: 0.01ms !important;
              animation-duration: 0.01ms !important;
            }

            .gallery-badge {
              animation: none !important;
            }

          }

        `}
      </style>
    </section>
  );
};

export default GalleryPreview;
