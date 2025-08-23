import "./Styles/hero.css";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MdAlternateEmail } from "react-icons/md";
import me from "../assets/me.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="title-container">
              <span className="pre-title">Merhaba, ben</span>
              <h1 className="main-title">
                <span className="name-highlight">Seda</span>
                <span className="title-dot">.</span>
              </h1>
              <div className="title-bg"></div>
            </div>

            <div className="hero-description">
              <p className="profession">
                Proje Yöneticisi & Bilgisayar Mühendisi
              </p>
              <p className="description-text">
                Proje yönetimi ve ürün geliştirme süreçlerine odaklanan bir
                bilgisayar mühendisiyim. Teknik altyapımı, frontend
                deneyimlerimle destekleyerek yenilikçi projelerde değer üretmeyi
                hedefliyorum.
              </p>
            </div>

            <div className="hero-cta">
              <motion.div
                className="cta-container"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <a href="#contact" className="cta-button">
                  İletişim
                  <HiOutlineArrowNarrowRight className="arrow-icon" />
                </a>
              </motion.div>

              <div className="social-links">
                <motion.a
                  href="https://www.linkedin.com/in/seda-mercan-b8b7a5222/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link linkedin"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <span className="social-icon">
                    <FaLinkedinIn />
                  </span>
                  <span className="social-text">LinkedIn</span>
                </motion.a>

                <motion.a
                  href="mailto:mrcnsedaa@gmail.com"
                  className="social-link email"
                  whileHover={{
                    scale: 1.1,
                    rotate: -5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <span className="social-icon">
                    <MdAlternateEmail />
                  </span>
                  <span className="social-text">Gmail</span>
                </motion.a>

                <motion.a
                  href="https://github.com/sedamer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link github"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <span className="social-icon">
                    <FaGithub />
                  </span>
                  <span className="social-text">GitHub</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="geometric-bg">
              <div className="geo-shape shape1"></div>
              <div className="geo-shape shape2"></div>
              <div className="geo-shape shape3"></div>
            </div>
            <div className="image-container">
              <img src={me} alt="Seda Mercan" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
