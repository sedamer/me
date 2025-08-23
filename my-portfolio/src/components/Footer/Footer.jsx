import "../Styles/footer.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaHeart } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-social">
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

          <div className="footer-info">
            <p>
              Made with <FaHeart className="heart-icon" /> by{" "}
              <span className="highlight">Seda Mercan</span> © {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;