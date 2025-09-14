import { motion } from "framer-motion";
import ceoPhoto from "../assets/images/aicte.png"; // CEO photo
import Shanmukh from "../assets/images/bg-imges/shannu.jpg";
import Yeshwanth from "../assets/images/bg-imges/yeshwanth.jpg";
import Bhanusrinivasareddy from "../assets/images/bg-imges/bhanu.jpg";
import Rajesh from "../assets/images/bg-imges/rajesh.jpg";
import Hemanthkumar from "../assets/images/bg-imges/hemanth.jpg";
import VijayBhaskarreddy from "../assets/images/bg-imges/vijay.jpg";
import Sarathsai from "../assets/images/bg-imges/sarath.jpg";
import Abbas from "../assets/images/bg-imges/abbas.jpg";
import Yamini from "../assets/images/bg-imges/yamini.jpg"; 
import Bhaskar from "../assets/images/bg-imges/bhaskar.jpg";  
import Anilkumar from "../assets/images/bg-imges/anil.jpg";
import Hemabindu from "../assets/images/bg-imges/bindu.jpg";
import Manjunath from "../assets/images/bg-imges/g.manjunath.jpg";
import Surya from "../assets/images/bg-imges/surya.jpg";
import Balaji from "../assets/images/bg-imges/balaji.jpg";
import Damodhar from "../assets/images/bg-imges/damodhar.jpg";
import Udaykiran from "../assets/images/bg-imges/uday.jpg";
import VManjunath from "../assets/images/bg-imges/manjunath.jpg";
import Bayanna from "../assets/images/bg-imges/bayanna.jpg";
import Sneha from "../assets/images/bg-imges/sneha.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const placements = [
  { name: "B. Shanmukh", image: Shanmukh, company: "REVARTURE" },
  { name: "B. Yeshwanth", image: Yeshwanth, company: "ASAR IT TECHNOLOGIES" },
  { name: "C. Bhanusrinivas reddy", image: Bhanusrinivasareddy, company: "ASAR IT TECHNOLOGIES" },
  { name: "T. Rajesh", image: Rajesh, company: "VIRTUSA" },
  { name: "M. Hemanthkumar", image: Hemanthkumar, company: "SYNECHRON" },
  { name: "P. VijayBhaskar reddy", image: VijayBhaskarreddy, company: "REVARTURE" },
  { name: "C. Sarathsai ", image: Sarathsai, company: "ASAR IT TECHNOLOGIES" },
  { name: "K. Yamini", image: Yamini, company: "ASAR IT TECHNOLOGIES" },
  { name: "A. Afroz Abbas", image: Abbas, company: "Amazon" },
];

const interns = [
  { name: "Bhaskar", image: Bhaskar, company: "ASAR IT TECHNOLOGIES" },
  { name: "Anil kumar", image: Anilkumar, company: "ASAR IT TECHNOLOGIES" },
  { name: "Hemabindu", image: Hemabindu, company: "ASAR IT TECHNOLOGIES" },
  { name: "G.Manjunath", image: Manjunath, company: "ASAR IT TECHNOLOGIES" },
  { name: "G. Surya", image: Surya, company: "ASAR IT TECHNOLOGIES" },
  { name: "K. Balaji", image: Balaji, company: "ASAR IT TECHNOLOGIES" },
  { name: "K. Damodhar", image: Damodhar, company: "ASAR IT TECHNOLOGIES" },
  { name: "R. Udaykiran", image: Udaykiran, company: "ASAR IT TECHNOLOGIES" },
  { name: "V. Manjunath", image: VManjunath, company: "ASAR IT TECHNOLOGIES" },
  { name: "Y. Bayanna", image: Bayanna, company: "ASAR IT TECHNOLOGIES" },
  { name: "Sneha", image: Sneha, company: "ASAR IT TECHNOLOGIES" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 1.2 + i * 0.13, ease: "easeOut" },
  }),
};

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    { breakpoint: 900, settings: { slidesToShow: 2 } },
    { breakpoint: 600, settings: { slidesToShow: 1 } },
  ],
};

const About = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    style={{
      background:
        "linear-gradient(180deg, #e3f2fd 0%, #90caf9 100%)",
      minHeight: "100vh",
      fontFamily: "Segoe UI, Arial, sans-serif",
    }}
  >
    <div style={{ maxWidth: 900, margin: "0 auto", paddingTop: 40 }}>
      <h1
        style={{
          color: "#1565c0",
          marginTop: 20,
          fontSize: "2.8rem",
          textAlign: "center",
        }}
      >
        About Technohub
      </h1>
      <p
        style={{
          marginTop: 30,
          color: "#37474f",
          fontSize: "1.1rem",
          textAlign: "center",
        }}
      >
        Welcome to Technohub, where we help people gain the knowledge and skills
        needed to succeed in the fast-changing world of technology. We offer both
        online and offline courses for both beginners and professionals looking
        to grow their careers in tech.
      </p>
      <p
        style={{
          marginTop: 18,
          color: "#37474f",
          fontSize: "1.1rem",
          textAlign: "center",
        }}
      >
        Our courses cover a range of topics, including Software Development, Data
        Science, Cybersecurity, Mobile App Development, and more. We focus on
        providing hands-on experience through real-world projects, helping you
        learn practical skills that can be applied directly in the Industry.
      </p>
      <p
        style={{
          marginTop: 18,
          color: "#37474f",
          fontSize: "1.1rem",
          textAlign: "center",
        }}
      >
        At Technohub, we believe learning is a continuous process. That’s why we
        offer lifetime access to our course materials and keep them updated to
        ensure you stay current in your field. With expert instructors and
        personalized support, we’re here to help you reach your goals and advance
        your career.
      </p>

      {/* CEO Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.7, ease: "easeOut" }}
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          background: "#eaf4fb",
          borderRadius: 16,
          marginTop: 48,
          padding: "36px 28px",
          boxShadow: "0 2px 18px rgba(33, 150, 243, 0.13)",
        }}
      >
        <img
          src={ceoPhoto}
          alt="Jane Doe, CEO of Technohub"
          style={{
            width: 144,
            height: 144,
            borderRadius: "50%",
            objectFit: "cover",
            marginRight: 36,
            boxShadow: "0 2px 12px rgba(30, 136, 229, 0.12)",
          }}
        />
        <div style={{ flex: "1 1 320px", minWidth: 280 }}>
          <h2
            style={{
              color: "#1976d2",
              fontSize: "2rem",
              marginBottom: 6,
            }}
          >
            Jane Doe
          </h2>
          <p
            style={{
              color: "#2384c6",
              fontWeight: 600,
              fontSize: "1.07rem",
              marginBottom: 12,
            }}
          >
            CEO & Founder
          </p>
          <p
            style={{
              color: "#263238",
              fontSize: "1.13rem",
              lineHeight: 1.5,
            }}
          >
            Jane Doe leads Technohub with 12+ years of tech and education experience.
            Her forward-thinking approach ensures that Technohub empowers every learner
            with relevant, hands-on skills for today’s industry. Jane’s dedication to
            innovation and accessibility makes her a recognized leader in tech education,
            shaping the future one student at a time.
          </p>
        </div>
      </motion.div>

      {/* Combined Placement and Intern Introduction */}
      <p
        style={{
          marginTop: 50,
          fontSize: "1.15rem",
          color: "#1f2a6c",
          textAlign: "center",
          fontWeight: 600,
          maxWidth: 700,
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: 1.5,
        }}
      >
        At Technohub, we take pride in our talented students, including both our successful placement achievers and dedicated interns. These individuals have gained valuable industry experience and advanced their skills through our programs, contributing significantly to the growth and innovation in the tech world.
      </p>

      {/* Placement Achievers Carousel */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 1.3 }}
        style={{ marginTop: 30, paddingBottom: 40 }}
      >
        <h2
          style={{
            fontSize: "2.2rem",
            color: "#1565c0",
            marginBottom: 30,
            textAlign: "center",
            fontWeight: 700,
          }}
        >
          Our Placement Achievers
        </h2>
        <Slider {...sliderSettings}>
          {placements.map((person, i) => (
            <motion.div
              key={person.name}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              style={{
                background: "#fff",
                borderRadius: 20,
                boxShadow: "0 5px 25px rgba(235, 253, 165, 0.1)",
                padding: "24px 16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 180,
                cursor: "default",
                minWidth: 100,
                outline: "none",
                height: "100%",
              }}
              whileHover={{
                scale: 1.05,
                y: -6,
                boxShadow: "0 10px 30px rgba(44,104,216,0.16)",
              }}
            >
              <img
                src={person.image}
                alt={person.name}
                style={{
                  width: 92,
                  height: 92,
                  objectFit: "cover",
                  borderRadius: "50%",
                  marginBottom: 12,
                  margin: "0 auto",
                  border: "4px solid #d9e5fe",
                  boxShadow: "0 3px 16px rgba(44, 104, 216, 0.07)",
                  background: "#f2f8ff",
                  display: "block",
                }}
              />
              <div style={{ textAlign: "center", width: "100%" }}>
                <h3
                  style={{
                    fontSize: "1.17rem",
                    color: "#1565c0",
                    fontWeight: 700,
                    margin: "2px 0 4px 0",
                    letterSpacing: "0.2px",
                    lineHeight: 1.15,
                  }}
                >
                  {person.name}
                </h3>
                <span
                  style={{
                    fontSize: "1rem",
                    color: "#1976d2",
                    fontWeight: 500,
                    display: "block",
                    lineHeight: 1.15,
                    marginBottom: 0,
                    wordBreak: "break-word",
                  }}
                >
                  {person.company}
                </span>
              </div>
            </motion.div>
          ))}
        </Slider>
      </motion.section>

      {/* Interns Carousel */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 1.7 }}
        style={{ marginTop: 30, paddingBottom: 40 }}
      >
        <h2
          style={{
            fontSize: "2.2rem",
            color: "#1565c0",
            marginBottom: 30,
            textAlign: "center",
            fontWeight: 700,
          }}
        >
          Our Interns
        </h2>
        <Slider {...sliderSettings}>
          {interns.map((person, i) => (
            <motion.div
              key={person.name}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              style={{
                background: "#fff",
                borderRadius: 20,
                boxShadow: "0 5px 25px rgba(165, 235, 253, 0.1)",
                padding: "24px 16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 180,
                cursor: "default",
                minWidth: 100,
                outline: "none",
                height: "100%",
              }}
              whileHover={{
                scale: 1.05,
                y: -6,
                boxShadow: "0 10px 30px rgba(44,120,216,0.16)",
              }}
            >
              <img
                src={person.image}
                alt={person.name}
                style={{
                  width: 92,
                  height: 92,
                  objectFit: "cover",
                  borderRadius: "50%",
                  marginBottom: 12,
                  margin: "0 auto",
                  border: "4px solid #a5d7fd",
                  boxShadow: "0 3px 16px rgba(44, 104, 216, 0.07)",
                  background: "#e7f4ff",
                  display: "block",
                }}
              />
              <div style={{ textAlign: "center", width: "100%" }}>
                <h3
                  style={{
                    fontSize: "1.17rem",
                    color: "#1565c0",
                    fontWeight: 700,
                    margin: "2px 0 4px 0",
                    letterSpacing: "0.2px",
                    lineHeight: 1.15,
                  }}
                >
                  {person.name}
                </h3>
                <span
                  style={{
                    fontSize: "1rem",
                    color: "#1976d2",
                    fontWeight: 500,
                    display: "block",
                    lineHeight: 1.15,
                    marginBottom: 0,
                    wordBreak: "break-word",
                  }}
                >
                  {person.company}
                </span>
              </div>
            </motion.div>
          ))}
        </Slider>
      </motion.section>
    </div>
  </motion.div>
);

export default About;