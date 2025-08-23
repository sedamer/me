import "./About.css";

import EduItem from "./EduItem";
import ExpItem from "./ExpItem";
import { motion } from "framer-motion";

const About = () => {
  const education = [
    {
      school: "Gaziantep Üniversitesi",
      degree: "Yüksek Lisans Derecesi",
      field: "Endüstri Mühendisliği",
      year: "2015- Halen",
      description:
        "Başarılarınız ve önemli projeleriniz hakkında kısa açıklama.",
    },
    {
      school: "Adana Alparslan Türkeş Bilim ve Teknoloji Üniversitesi",
      degree: "Lisans Derecesi",
      field: "Bilgisayar Mühendisliği",
      year: "2019-2024",
      description: `2024 Haziran’ında Adana Alparslan Türkeş Bilim ve Teknoloji Üniversitesi 
      Bilgisayar Mühendisliği bölümünden <b>bölüm üçüncüsü</b> olarak mezun oldum. 
      Eğitimim boyunca yaptığım frontend stajları, React ve modern web teknolojilerine hâkimiyet 
      kazandırırken aynı zamanda kullanıcı deneyimi, responsive tasarım ve ekip çalışması 
      konularında beni geliştirdi.`,
    },
  ];

  const experience = [
    {
      company: "Octa Works Teknoloji",
      companyUrl: "https://www.octaworks.co/",
      position: "Proje Planlama Mühendisi",
      duration: "12/2024 - Halen",
      description:
        "Octa Works'te yürütülen çeşitli <b>Tübitak/ KOSGEB</b> projelerinde <b>Proje Planlama Mühendisi</b> olarak görev yapıyorum. Bu kapsamda, projelerin planlanması ve yönetimi için kaynak tahsisi, zaman çizelgelerinin oluşturulması ve maliyet analizleri gibi görevleri üstleniyorum.",
      skills: [
        "Proje Planlama",
        "Web Tasarım",
        "Proje Yönetimi",
        "Sosyal Medya Yönetimi",
      ],
    },
    {
      company: "Brew Software",
      companyUrl: "https://brewww.com/",
      position: "Front-end Developer Intern",
      duration: "02/2024 - 07/2024",
      description:
        "React.js, Remix.js, Sass gibi modern teknolojiler kullanarak Atomic Design prensibi ile bileşenler oluşturup web sitesi geliştirme. Yer aldığım projeler : - <b>KoçSistem Web Sitesi Yenileme Projesi</b> - <b>VillaSepeti Admin Paneli Geliştirmesi</b>",
      skills: ["React.js", "Remix.js", "Sass", "Atomic Design"],
    },
    {
      company: "SCA Social",
      companyUrl: "https://scasocial.com",
      position: "Proje Yönetimi Stajyeri",
      duration: "09/2024 - 10/2024",
      description:
        "Yeni Medya ve Dijital Dönüşüm, Proje Yönetim ve Organizasyon, Reklamcılık ve Pazarlama alanlarında tecrübe kazanarak Proje Yönetimi departmanının operasyonlarına ve kreatif süreçlerine katkı sağladım.",
      skills: [
        "Dijital Dönüşüm",
        "Proje Yönetimi",
        "Organizasyon",
        "Reklamcılık",
      ],
    },
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Hakkımda</h2>
          <p className="about-intro">
            <b>Bilgisayar Mühendisliği</b> altyapımı, proje yönetimi ve ürün
            geliştirme konularına olan ilgimle birleştirerek kariyerime yön
            veriyorum. Teknoloji odaklı ekiplerde aktif rol almayı, yenilikçi
            projelerde sorumluluk üstlenmeyi ve <b>Project Manager</b> olarak
            uzmanlığımı adım adım geliştirmeyi hedefliyorum.
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="experience-section"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Deneyim</h3>
            <div className="experience-list">
              {experience.map((exp, index) => (
                <ExpItem
                  key={index}
                  company={exp.company}
                  companyUrl={exp.companyUrl}
                  position={exp.position}
                  duration={exp.duration}
                  description={exp.description}
                  skills={exp.skills}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="education-section"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Eğitim</h3>
            <div className="education-list">
              {education.map((edu, index) => (
                <EduItem
                  key={index}
                  school={edu.school}
                  degree={edu.degree}
                  field={edu.field}
                  year={edu.year}
                  description={edu.description}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
