import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import ceoPhoto from "../assets/images/gallery/colleges/ceo.png";
import Shanmukh from "../assets/images/B.Shanmukh.jpg";
import Yeshwanth from "../assets/images/B.Yeshwanth.jpg";
import Bhanusrinivasareddy from "../assets/images/C.Bhanusrinivasreddy.jpg";
import Rajesh from "../assets/images/T.Rajesh.jpg";
import Hemanthkumar from "../assets/images/M.Hemanthkumar.jpg";
import VijayBhaskarreddy from "../assets/images/P.VijayaBhaskarreddy.jpg";
import Sarathsai from "../assets/images/C.Sarathsai.jpg";
import Abbas from "../assets/images/A.Afroz Abbas.jpg";
import Yamini from "../assets/images/K.yamini.jpg";
import Hemabindu from "../assets/images/B.Hemabindu.jpg";
import Manjunath from "../assets/images/G.Manjunath.jpg";
import Surya from "../assets/images/G.Surya.jpg";
import Damodhar from "../assets/images/K.Damodhar.jpg";
import Udaykiran from "../assets/images/R.Udaykiran.jpg";

/* =======================
   Data
======================= */

// Put CEO first in this array. Any additional founders you add here will
// automatically show under the CEO hero as a compact grid.
const leaders = [
  {
    name: "M. Shameer Basha",
    title: "CEO & Founder",
    image: ceoPhoto,
    bio:
      "Technohub, founded in 2021, has grown into a bridge between learning and career success. With a strong focus on hands-on training, industry mentorship, and real-world exposure, we prepare every learner to step confidently into the future of technology.",
  stats: [
      { label: "Founded", value: "2021" },
      { label: "Students Trained", value: "5,000+" },
      { label: "Students Placed", value: "2,000+" },
      { label: "Workshops & Webinars", value: "20+" },
    ],
    quote:
      "At Technohub, we don’t just teach technology—we connect ambition with opportunity, building a true bridge to success.",
  },
  // Add more founders/co-founders like this:
  // {
  //   name: "Jane Doe",
  //   title: "Co-Founder",
  //   image: janeImg,
  //   bio: "Focuses on curriculum strategy and partnerships.",
  // },
];

const placements = [
  { name: "B. Shanmukh", image: Shanmukh, company: "Revature" },
  { name: "B. Yeshwanth", image: Yeshwanth, company: "ASAR IT Technologies" },
  { name: "C. Bhanusrinivas Reddy", image: Bhanusrinivasareddy, company: "ASAR IT Technologies" },
  { name: "T. Rajesh", image: Rajesh, company: "Virtusa" },
  { name: "M. Hemanth Kumar", image: Hemanthkumar, company: "Synechron" },
  { name: "P. Vijay Bhaskar Reddy", image: VijayBhaskarreddy, company: "Revature" },
  { name: "C. Sarath Sai", image: Sarathsai, company: "ASAR IT Technologies" },
  { name: "K. Yamini", image: Yamini, company: "ASAR IT Technologies" },
  { name: "A. Afroz Abbas", image: Abbas, company: "Amazon" },
  { name: "B. Hema Bindu", image: Hemabindu, company: "ASAR IT Technologies" },
];

const interns = [
  { name: "G. Manjunath", image: Manjunath, company: "ASAR IT Technologies" },
  { name: "G. Surya", image: Surya, company: "ASAR IT Technologies" },
  { name: "K. Damodhar", image: Damodhar, company: "ASAR IT Technologies" },
  { name: "R. Uday Kiran", image: Udaykiran, company: "ASAR IT Technologies" },
];

/* =======================
   Animation / Slider
======================= */

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.3 + i * 0.1, ease: "easeOut" },
  }),
};

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2800,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

/* =======================
   Small UI helpers
======================= */

const Pill = ({ children }) => (
  <span
    style={{
      display: "inline-block",
      padding: "4px 10px",
      borderRadius: 999,
      background: "#e3f2fd",
      color: "#1976d2",
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: 0.2,
      whiteSpace: "nowrap",
    }}
  >
    {children}
  </span>
);

const PersonCard = ({ person, i, borderColor = "#d9e5fe", bg = "#f2f8ff" }) => (
  <motion.div
    key={person.name}
    custom={i}
    initial="hidden"
    animate="visible"
    variants={cardVariants}
    style={{
      background: "#fff",
      borderRadius: 20,
      boxShadow: "0 6px 20px rgba(44,104,216,0.10)",
      padding: "22px 16px",
     margin: "0 14px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: 200,
      outline: "none",
      height: "100%",
    }}
    whileHover={{
      scale: 1.04,
      y: -6,
      boxShadow: "0 14px 30px rgba(44, 104, 216, 0.18)",
    }}
  >
    <img
      src={person.image}
      alt={person.name}
      loading="lazy"
      style={{
        width: 96,
        height: 96,
        objectFit: "cover",
        borderRadius: "50%",
        marginBottom: 12,
        border: `4px solid ${borderColor}`,
        boxShadow: "0 3px 14px rgba(44, 104, 216, 0.10)",
        background: bg,
        display: "block",
      }}
      onError={(e) => {
        e.currentTarget.style.objectFit = "contain";
      }}
    />
    <div style={{ textAlign: "center", width: "100%" }}>
      <h3
        style={{
          fontSize: "1.08rem",
          color: "#0f3d8a",
          fontWeight: 700,
          margin: "2px 0 4px",
          letterSpacing: "0.2px",
          lineHeight: 1.2,
        }}
      >
        {person.name}
      </h3>
      <span
        style={{
          fontSize: "0.98rem",
          color: "#1976d2",
          fontWeight: 600,
          display: "block",
          lineHeight: 1.2,
          marginBottom: 2,
          wordBreak: "break-word",
        }}
      >
        {person.company}
      </span>
    </div>
  </motion.div>
);

/* =======================
   Spotlight Components
======================= */

const CEOSpotlight = ({ leader }) => {
  const { image, name, title, bio, stats = [], quote } = leader || {};
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      aria-label="CEO Person Spotlight"
      style={{ marginTop: 48 }}
    >
      <div
        style={{
          position: "relative",
          borderRadius: 28,
          padding: "28px 22px 26px",
          overflow: "hidden",
          background:
            "linear-gradient(180deg, #ffffff 0%, #f7fbff 55%, #eef6ff 100%)",
          boxShadow:
            "0 10px 35px rgba(15, 61, 138, 0.14), inset 0 1px 0 rgba(255,255,255,0.6)",
        }}
      >
        {/* soft gradient halo */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: "-30% -10% auto -10%",
            height: 260,
            background:
              "radial-gradient(600px 180px at 50% 0, rgba(25,118,210,0.18), transparent 65%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "120px 1fr",
            gap: 18,
            alignItems: "center",
          }}
        >
          {/* Photo with conic ring */}
          <div style={{ justifySelf: "center" }}>
            <div
              style={{
                position: "relative",
                width: 120,
                height: 120,
                borderRadius: "50%",
                padding: 4,
                background:
                  "conic-gradient(from 140deg, #7bb4ff, #1976d2, #7bb4ff)",
                boxShadow: "0 10px 30px rgba(25,118,210,0.25)",
              }}
            >
              <img
                src={image}
                alt={`${name} — ${title}`}
                loading="eager"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "block",
                  border: "4px solid #ffffff",
                  background: "#eef6ff",
                }}
                onError={(e) => {
                  e.currentTarget.style.objectFit = "contain";
                }}
              />
            </div>
          </div>

          {/* Text */}
          <div style={{ minWidth: 0 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              <h2
                style={{
                  color: "#0f3d8a",
                  fontSize: "1.9rem",
                  fontWeight: 800,
                  letterSpacing: 0.2,
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                {name}
              </h2>
              <Pill>{title}</Pill>
            </div>

            <p
              style={{
                color: "#263238",
                fontSize: "1.02rem",
                lineHeight: 1.55,
                marginTop: 10,
                marginBottom: 0,
              }}
            >
              {bio}
            </p>

            {/* Quick stats */}
            {stats?.length ? (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                  gap: 10,
                  marginTop: 14,
                }}
              >
                {stats.map((s) => (
                  <div
                    key={s.label}
                    style={{
                      background: "rgba(25,118,210,0.06)",
                      border: "1px solid rgba(25,118,210,0.12)",
                      borderRadius: 12,
                      padding: "10px 12px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 18,
                        fontWeight: 800,
                        color: "#0f3d8a",
                        lineHeight: 1.1,
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{
                        fontSize: 12.5,
                        color: "#315e9d",
                        fontWeight: 600,
                        letterSpacing: 0.2,
                        marginTop: 2,
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        {/* Quote bar */}
        {quote ? (
          <div
            style={{
              marginTop: 18,
              background:
                "linear-gradient(90deg, rgba(25,118,210,0.08), rgba(123,180,255,0.10))",
              border: "1px solid rgba(25,118,210,0.14)",
              borderRadius: 14,
              padding: "12px 14px",
              display: "flex",
              gap: 10,
              alignItems: "flex-start",
            }}
          >
            <span
              aria-hidden
              style={{
                fontSize: 22,
                lineHeight: 1,
                color: "#0f3d8a",
                marginTop: -2,
                userSelect: "none",
              }}
            >
              ❝
            </span>
            <p
              style={{
                margin: 0,
                color: "#12396f",
                fontSize: "0.98rem",
                lineHeight: 1.6,
                fontWeight: 600,
              }}
            >
              {`“${quote}”`}
            </p>
          </div>
        ) : null}
      </div>

      {/* small-screen tweak */}
      <style>{`
        @media (max-width: 640px) {
          section[aria-label="CEO Person Spotlight"] > div > div {
            grid-template-columns: 1fr !important;
          }
          section[aria-label="CEO Person Spotlight"] img {
            margin: 0 auto 6px auto;
          }
        }
      `}</style>
    </motion.section>
  );
};

const CoFoundersGrid = ({ items }) => {
  if (!items?.length) return null;
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: 0.1 }}
      aria-label="Founders Grid"
      style={{ marginTop: 18 }}
    >
      <h3
        style={{
          color: "#0f3d8a",
          fontSize: "1.4rem",
          textAlign: "center",
          margin: "0 0 12px 0",
          fontWeight: 800,
        }}
      >
        Founders
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 16,
        }}
      >
        {items.map((f, i) => (
          <motion.article
            key={`${f.name}-${i}`}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            style={{
              display: "flex",
              gap: 14,
              alignItems: "center",
              padding: 16,
              borderRadius: 16,
              background: "linear-gradient(180deg, #ffffff 0%, #f7fbff 100%)",
              boxShadow: "0 8px 22px rgba(15, 61, 138, 0.10)",
            }}
          >
            <img
              src={f.image}
              alt={`${f.name} — ${f.title}`}
              loading="lazy"
              style={{
                width: 84,
                height: 84,
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #d7e8ff",
                background: "#eef6ff",
                flexShrink: 0,
              }}
              onError={(e) => (e.currentTarget.style.objectFit = "contain")}
            />
            <div style={{ minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                <strong style={{ color: "#0f3d8a" }}>{f.name}</strong>
                <Pill>{f.title}</Pill>
              </div>
              <p style={{ margin: "6px 0 0", color: "#2b3c54", fontSize: "0.95rem", lineHeight: 1.45 }}>
                {f.bio}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

/* =======================
   Page Component
======================= */

const About = () => {
  const [ceo, ...founders] = leaders; // first item is CEO hero

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: "linear-gradient(180deg, #e8f3ff 0%, #bcdcff 55%, #e8f3ff 100%)",
        minHeight: "100vh",
        fontFamily: "Segoe UI, Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 16px 64px" }}>
        {/* Heading */}
        <h1
          style={{
            color: "#0f3d8a",
            marginTop: 8,
            fontSize: "2.6rem",
            textAlign: "center",
            letterSpacing: 0.4,
          }}
        >
          About Technohub
        </h1>

        {/* Intro */}
        <div
          style={{
            marginTop: 22,
            color: "#37474f",
            fontSize: "1.05rem",
            lineHeight: 1.65,
            textAlign: "center",
            maxWidth: 900,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <p>
            Welcome to Technohub—where ambitious learners build real, job-ready skills.
            We offer online and offline programs for beginners and professionals,
            driven by hands-on projects and strong industry alignment.
          </p>
          <p style={{ marginTop: 10 }}>
            Our curriculum spans Software Development, Data Science, Cybersecurity,
            Mobile App Development, and more. You get lifetime access to updated
            materials, expert mentorship, and personalized support to accelerate your career.
          </p>
        </div>

        {/* CEO Hero Spotlight */}
        {ceo ? <CEOSpotlight leader={ceo} /> : null}

        {/* Co-founders grid (shows only if you add more founders to leaders[]) */}
        <CoFoundersGrid items={founders} />

        {/* Placements Intro */}
        <p
          style={{
            marginTop: 42,
            fontSize: "1.08rem",
            color: "#12396f",
            textAlign: "center",
            fontWeight: 600,
            maxWidth: 820,
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.55,
          }}
        >
          We’re proud of our students—both successful placement achievers and dedicated interns—
          who translate learning into measurable impact in the industry.
        </p>

        {/* Placement Achievers Carousel */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          style={{ marginTop: 22, paddingBottom: 34 }}
        >
          <h2
            style={{
              fontSize: "1.8rem",
              color: "#0f3d8a",
              marginBottom: 16,
              textAlign: "center",
              fontWeight: 800,
            }}
          >
            Our Placement Achievers
          </h2>
          <Slider {...sliderSettings}>
            {placements.map((person, i) => (
              <PersonCard
                key={person.name}
                person={person}
                i={i}
                borderColor="#d9e5fe"
                bg="#f2f8ff"
              />
            ))}
          </Slider>
        </motion.section>

        {/* Interns Carousel */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          style={{ marginTop: 8, paddingBottom: 8 }}
        >
          <h2
            style={{
              fontSize: "1.8rem",
              color: "#0f3d8a",
              marginBottom: 16,
              textAlign: "center",
              fontWeight: 800,
            }}
          >
            Our Interns
          </h2>
          <Slider {...sliderSettings}>
            {interns.map((person, i) => (
              <PersonCard
                key={person.name}
                person={person}
                i={i}
                borderColor="#a5d7fd"
                bg="#e7f4ff"
              />
            ))}
          </Slider>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default About;
