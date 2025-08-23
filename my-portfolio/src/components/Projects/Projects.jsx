import "./Projects.css";

import Mempass from "../../assets/mempass.png";
import ProjectsCard from "./ProjectsCard";
import RanBlock from "../../assets/RanBlock.png";
import React from "react";
import UmutHikayeler from "../../assets/umutHikayeler.png";

const Projects = () => {
  const services = [
    {
      id: 1,
      title: "Proje Yönetimi",
      description:
        "Projeleri planlı bir şekilde ilerletiyor, ekibi organize edip hedefe en verimli şekilde ulaşmayı sağlıyorum.",
      icon: "💻",
    },
    {
      id: 2,
      title: "Sosyal Medya Yönetimi Ve Reklamcılık",
      description:
        "Instagram reklamları ve Google Ads kampanyalarını yöneterek markaların daha fazla kişiye ulaşmasına destek oluyorum.",
      icon: "🤳🏻",
    },
    {
      id: 3,
      title: "Web Geliştirme",
      description:
        "Modern ve kullanıcı dostu web siteleri tasarlayıp hayata geçiriyorum.",
      icon: "📱",
    },
  ];

  const projects = [
    {
      id: 1,
      title:
        "Mempass | Yapay Zeka Destekli Sadakat ve Kampanya Yönetim Platformu",
      description:
        "Mempass Projesi kapsamında, ilgili birimlerle iş birliği içinde iş akışlarını oluşturarak proje planlamasına katkı sağladım. Kampanya yönetimi ve müşteri etkileşimi gereksinimlerini belirleyip ekipler arası koordinasyonu yürüttüm. Platformun web sitesini geliştirerek kullanıcı deneyimini iyileştirdim. Proje, <b>Google Play</b> ve <b>App Store</b>’da yayınlanan bir mobil uygulama olarak başarıyla tamamlandı.",
      image: Mempass,
      technologies: [
        "Mobil Uygulama",
        "Wix",
        "Sosyal Medya Yönetimi",
        "Proje Yönetimi",
      ],
      link: "https://mempass.com/",
    },
    {
      id: 2,
      title:
        "Umut Hikayeler | Depremden Etkilenen Çocuklar İçin Terapötik Hikayeler",
      description:
        "Umut Hikayeler, depremden etkilenen çocuklar için iyileşme ve psikolojik dayanıklılığı destekleyen terapötik hikayelerden oluşan bir <b>TÜBİTAK</b> destekli sosyal sorumluluk projesidir. Bu projede Proje Yöneticisi olarak görev aldım. Ekip planlaması, görev dağılımı ve proje yönetiminin yanı sıra, projenin dijital yüzü olan web sitesini tasarlayıp geliştirdim. Ayrıca, yapay zeka destekli araçlar kullanarak projenin görsel ve içerik üretim süreçlerini yönettim. Hikaye görselleri ve metinlerinin hazırlanmasında aktif rol alarak, projenin hem yaratıcı hem teknik aşamalarında katkı sağladım",
      image: UmutHikayeler,
      technologies: ["Proje Yönetimi", "Yapay Zeka", "Wix", "Mobil Uygulama"],
      link: "https://www.umuthikayeler.com/",
    },
    {
      id: 3,
      title: "Ranbox | Eğitim Kodlama ve Teknoloji Seti",
      description:
        "Ranbox projesi, <b> KOSGEB</b> destekli bir girişim olarak yürütülmekte olup, proje planlama süreçlerine destek verdim. Teknik gereksinimlerin belirlenmesi ve bileşenlerin entegrasyonunun takibini yaptım. Ekipler arasındaki koordinasyona katkıda bulunarak sürecin zamanında ilerlemesine yardımcı oldum. Ayrıca, proje planlamasında olası riskleri değerlendirerek çözüm önerileri sundum.",
      image: RanBlock,
      technologies: ["Proje Yönetimi", "E-Ticaret", "Kaynak Tahsis", "Wix"],
      link: "https://www.ranblockgames.com/",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        {/* Services Section */}
        <div className="services-container">
          <div className="section-header">
            <h2>Neler Yapıyorum?</h2>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <span className="service-icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="projects-container">
          <div className="section-header">
            <h2>Projelerim</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectsCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
