import { motion } from "framer-motion";
import profile from "../assets/araku.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "60px",
        padding: "100px 20px",
        flexWrap: "wrap"
      }}
    >
      {/* TEXT SECTION */}
      <div style={{ maxWidth: "500px", textAlign: "center" }}>
        <h1
          style={{
            fontSize: "clamp(32px, 6vw, 52px)",
            background: "linear-gradient(90deg, #38bdf8, #a78bfa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold"
          }}
        >
          Hi, I'm Chandu 👋
        </h1>

        <h2 style={{ marginTop: "15px", fontWeight: "400" }}>
          Frontend Developer
        </h2>

        <p style={{ marginTop: "20px", opacity: 0.8 }}>
          I build modern and data-driven web applications.
        </p>
      </div>

      {/* IMAGE + SOCIAL SECTION */}
      <div style={{ textAlign: "center" }}>
        {/* Profile Image */}
        <div
          style={{
            width: "260px",
            height: "260px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "4px solid #38bdf8",
            boxShadow: "0 0 40px rgba(56,189,248,0.7)",
            margin: "0 auto"
          }}
        >
          <img
            src={profile}
            alt="Profile"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        </div>

        {/* Social Icons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "20px"
          }}
        >
          <a
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="mailto:your@email.com"
            style={iconStyle}
          >
            <MdEmail size={22} />
          </a>
        </div>
      </div>
    </motion.section>
  );
}

const iconStyle = {
  color: "white",
  background: "rgba(255,255,255,0.05)",
  padding: "12px",
  borderRadius: "50%",
  border: "1px solid rgba(255,255,255,0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "0.3s"
};

export default Hero;