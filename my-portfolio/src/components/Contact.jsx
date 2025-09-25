import "./Styles/contact.css";

import React, { useRef, useState } from "react";

import { FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        "service_jvrx6o7",
        "template_hh1ocur", // Email Templates'den aldığınız Template ID'yi buraya yazın
        form.current,
        "QXHT1TC2O4nw4KYUH" // EmailJS'den aldığınız Public Key
      )
      .then(
        (result) => {
          setSubmitStatus("success");
          form.current.reset();
        },
        (error) => {
          setSubmitStatus("error");
          console.error("Error:", error);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>İletişime Geç</h2>
          <div className="header-line"></div>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="info-content">
              <h3>Tanıştığımıza Memnun Oldum!</h3>
              <p>
                Beraber harika işler çıkarabileceğimize inanıyorum! İster yeni
                bir proje fikriniz olsun, ister sadece merhaba demek isteyin -
                aşağıdaki formu doldurmanız yeterli.
              </p>
              <div className="contact-decoration">
                <div className="deco-circle"></div>
                <div className="deco-line"></div>
              </div>
            </div>
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="form-group">
              <input
                type="text"
                name="user_name"
                placeholder="Adınız"
                required
                className="form-input"
              />
              <div className="input-focus-bg"></div>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="user_email"
                placeholder="E-posta Adresiniz"
                required
                className="form-input"
              />
              <div className="input-focus-bg"></div>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Konu"
                required
                className="form-input"
              />
              <div className="input-focus-bg"></div>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Mesajınız"
                required
                className="form-input"
                rows="5"
              />
              <div className="input-focus-bg"></div>
            </div>

            <motion.button
              type="submit"
              className={`submit-button ${isSubmitting ? "submitting" : ""}`}
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="button-text">
                {isSubmitting ? "Gönderiliyor..." : "Mesajı Gönder"}
              </span>
              <FiSend className="send-icon" />
            </motion.button>

            {submitStatus && (
              <motion.div
                className={`status-message ${submitStatus}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {submitStatus === "success"
                  ? "Harika! Mesajınız bana ulaştı. En kısa sürede dönüş yapacağım! 🚀"
                  : "Ups! Bir şeyler ters gitti. Tekrar denemeye ne dersiniz? 🤔"}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
