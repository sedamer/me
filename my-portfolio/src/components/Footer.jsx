import "./Styles/footer.css";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { MdAlternateEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-name">Seda Mercan</h3>
            <p className="footer-title">UI/UX Designer & Web Developer</p>
          </div>

          <div className="footer-links">
            <div className="footer-nav">
              <h4>Hızlı Erişim</h4>
              <nav>
                <a href="#home">Ana Sayfa</a>
                <a href="#about">Hakkımda</a>
                <a href="#projects">Projeler</a>
                <a href="#contact">İletişim</a>
              </nav>
            </div>

            <div className="footer-social">
              <h4>Sosyal Medya</h4>
              <div className="social-links">
                <motion.a
                  href="https://www.linkedin.com/in/seda-mercan-b8b7a5222/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaLinkedinIn />
                </motion.a>
                <motion.a
                  href="mailto:mrcnsedaa@gmail.com"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <MdAlternateEmail />
                </motion.a>
                <motion.a
                  href="https://github.com/sedamer"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaGithub />
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {currentYear} Seda Mercan. Tüm hakları saklıdır.</p>
          </div>
          <div className="footer-extra">
            <motion.a
              href="#contact"
              className="contact-link"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              İletişime Geç
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
