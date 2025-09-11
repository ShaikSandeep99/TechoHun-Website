import { motion } from "framer-motion";

const About = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    style={{
      background: "linear-gradient(180deg, #e3f2fd 0%, #90caf9 100%)",
      minHeight: "100vh",
      fontFamily: "Segoe UI, Arial, sans-serif"
    }}
  >
    {/* Header Section */}
    <div style={{ maxWidth: 900, margin: "0 auto", paddingTop: 40 }}>
      <h1 style={{ color: "#1565c0", marginTop: 20, fontSize: "2.8rem", textAlign: "center" }}>
        About Technohub
      </h1>
      <p style={{ marginTop: 30, color: "#37474f", fontSize: "1.1rem", textAlign: "center" }}>
        Welcome to Technohub, where we help people gain the knowledge and skills needed to succeed in the fast-changing world of technology. We offer a variety of online and offline courses for both beginners and professionals looking to grow their careers in tech.
      </p>
      <p style={{ marginTop: 18, color: "#37474f", fontSize: "1.1rem", textAlign: "center" }}>
        Our courses cover a range of topics, including Software Development, Data Science, Cybersecurity, Mobile App Development, and more. We focus on providing hands-on experience through real-world projects,
        helping you learn practical skills that can be applied directly in the industry.
      </p>
      <p style={{ marginTop: 18, color: "#37474f", fontSize: "1.1rem", textAlign: "center" }}>
        At Technohub, we believe learning is a continuous process. That’s why we offer lifetime access to our course materials and keep them updated to ensure you stay current in your field. With expert instructors and personalized support, we’re here to help you reach your goals and advance your career.
      </p>
    </div>
  </motion.div>
);

export default About;