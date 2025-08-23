import "./About.css";

import PropTypes from "prop-types";
import { motion } from "framer-motion";

const EduItem = ({ school, degree, field, year, description }) => {
  return (
    <motion.div
      className="edu-item"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="edu-header">
        <div className="edu-title">
          <h4>{school}</h4>
          <p className="degree">
            {degree} - {field}
          </p>
        </div>
        <span className="year">{year}</span>
      </div>

      <p className="description">{description}</p>
    </motion.div>
  );
};

EduItem.propTypes = {
  school: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default EduItem;
