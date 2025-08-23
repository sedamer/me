import "./About.css";

import { FaExternalLinkAlt } from "react-icons/fa";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const ExpItem = ({
  company,
  companyUrl,
  position,
  duration,
  description,
  skills,
}) => {
  return (
    <motion.div
      className="exp-item"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="exp-header">
        <div className="exp-title">
          <h4>{position}</h4>
          <div className="company-link">
            <p className="company">{company}</p>
            {companyUrl && (
              <motion.a
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="company-url"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <FaExternalLinkAlt />
              </motion.a>
            )}
          </div>
        </div>
        <span className="duration">{duration}</span>
      </div>

      <p
        className="description"
        dangerouslySetInnerHTML={{ __html: description }}
      />

      <div className="skills">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

ExpItem.propTypes = {
  company: PropTypes.string.isRequired,
  companyUrl: PropTypes.string,
  position: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ExpItem;
