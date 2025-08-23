# Seda Mercan - Portfolio Website

Modern ve minimalist tasarıma sahip kişisel portfolio websitesi. React ve Vite kullanılarak geliştirilmiştir.

![Portfolio Preview](public/preview.png)

## 🚀 Özellikler

- ✨ Modern ve minimalist tasarım
- 📱 Tam responsive yapı
- 🎯 Optimize edilmiş performans
- 🎨 Özelleştirilebilir renk şeması
- 🌟 Smooth scroll ve animasyonlar
- 📬 Entegre iletişim formu

## 🛠 Kullanılan Teknolojiler

- [React](https://reactjs.org/) - UI geliştirme
- [Vite](https://vitejs.dev/) - Build tool
- [Framer Motion](https://www.framer.com/motion/) - Animasyonlar
- [EmailJS](https://www.emailjs.com/) - İletişim formu
- [React Icons](https://react-icons.github.io/react-icons/) - İkonlar

## 🚀 Kurulum

1. Projeyi klonlayın:

```bash
git clone https://github.com/yourusername/portfolio-website.git
```

2. Proje dizinine gidin:

```bash
cd portfolio-website
```

3. Bağımlılıkları yükleyin:

```bash
npm install
```

4. Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

## 📁 Proje Yapısı

```
src/
├── components/         # React bileşenleri
│   ├── About/         # Hakkımda bölümü
│   ├── Contact/       # İletişim formu
│   ├── Hero/          # Ana sayfa
│   ├── Projects/      # Projeler bölümü
│   └── Styles/        # CSS dosyaları
├── assets/            # Görseller ve medya dosyaları
└── App.jsx            # Ana uygulama bileşeni
```

## 🎨 Özelleştirme

Renk şemasını ve diğer tasarım değişkenlerini `src/components/Styles/variables.css` dosyasından özelleştirebilirsiniz:

```css
:root {
  --primary: #ff7f00;
  --primary-light: #ff9933;
  --accent: #ffd700;
  /* ... diğer değişkenler */
}
```

## 📧 İletişim Formu Kurulumu

1. [EmailJS](https://www.emailjs.com/) hesabı oluşturun
2. Servis ID, Template ID ve Public Key bilgilerinizi alın
3. Bu bilgileri `Contact.jsx` içindeki ilgili alanlara ekleyin

## 📱 Responsive Tasarım

- Desktop (1024px ve üzeri)
- Tablet (768px - 1023px)
- Mobil (480px - 767px)
- Küçük Mobil (479px ve altı)

## 🤝 Katkıda Bulunma

1. Bu repository'yi fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 👩‍💻 Geliştirici

**Seda Mercan**

- LinkedIn: [Seda Mercan](https://www.linkedin.com/in/seda-mercan-b8b7a5222/)
- GitHub: [@sedamer](https://github.com/sedamer)
- Email: mrcnsedaa@gmail.com

---
