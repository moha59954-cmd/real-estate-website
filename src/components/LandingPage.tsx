import { motion } from "motion/react";
import { 
  Search, MapPin, Building2, Wallet, Users, LayoutDashboard, 
  CheckSquare, Phone, Mail, Instagram, Twitter, Heart, Globe, 
  Camera, ShieldCheck, Zap, Droplets, Wind, Settings, Lock, 
  Key, Fan, Lightbulb, DoorOpen, Car, Ruler, Construction
} from "lucide-react";
import { useState, useEffect } from "react";

const content = {
  ar: {
    dir: "rtl" as const,
    nav: {
      home: "الرئيسية",
      projects: "المشاريع",
      about: "عن الشركة",
      contact: "اتصل بنا",
      book: "احجز استشارة"
    },
    hero: {
      badge: "شركة أساسيات الإعمار للتطوير والاستثمار العقاري",
      title: "استثمر بالقرب من الحرم النبوي",
      desc: "نقدم لكم أرقى المشاريع السكنية والاستثمارية في أطهر بقاع الأرض، بتصاميم عصرية وضمانات ممتدة تلبي طموحاتكم.",
      browse: "تصفح المشاريع",
      whatsapp: "تواصل واتساب"
    },
    project32: {
      title: "أساسيات 32",
      subtitle: "حي الجماوات",
      desc: "مشروع أساسيات 32 نشأ من تراكم الخبرات الطويلة في المجال بما يلبي رغبات العملاء الكرام. يتكون المشروع من شقق وروفات بمخطط الجموات بتصاميم حديثة بما يلبي رغبات ساكني جوار رسول الله.",
      featuresTitle: "مميزات المشروع",
      features: [
        { label: "كميرات مراقبة", icon: Camera },
        { label: "تكسيات خشبية", icon: Ruler },
        { label: "ممرات رخامية", icon: LayoutDashboard },
        { label: "مصاعد فاخرة", icon: Construction },
        { label: "موقف خاص", icon: Car },
        { label: "واجهات رخامية", icon: Building2 },
        { label: "على الكود السعودي", icon: ShieldCheck },
      ],
      unitFeaturesTitle: "مميزات الشقق",
      unitFeatures: [
        "أسطح خاصة", "غرف خادمة", "أحواش خاصة", "نوافذ عازلة", "تأسيس تكييف", 
        "كراسي معلقة", "غرف غسيل", "مداخل خاصة", "شقق دورين", "دش مطري", 
        "أبواب خشب صلد", "دخول ذكي", "وسائل الأمن والسلامة", "أنظمة صوتية"
      ]
    },
    warranties: {
      title: "الضمانات",
      desc: "نضمن لك راحة البال بضمانات حقيقية تصل إلى 50 عاماً",
      items: [
        { label: "مواسير السباكة (50 سنة)", company: "شركة نيبرو", icon: Droplets },
        { label: "الهيكل الإنشائي (10 سنوات)", company: "ملاذ", icon: ShieldCheck },
        { label: "طبلون الكهرباء (25 سنة)", company: "الفنار", icon: Zap },
        { label: "الأبواب الداخلية (15 سنة)", company: "شركة أتقان", icon: DoorOpen },
        { label: "تأسيس التكييف (10 سنوات)", company: "زهرة المدينة", icon: Wind },
        { label: "المصاعد (10 سنوات)", company: "شركة الزين", icon: Construction },
        { label: "الخلاطات (10 سنوات)", company: "GROHE", icon: Droplets },
        { label: "قفل ذكي (2 سنة)", company: "ركن الترصيد", icon: Lock },
        { label: "السخانات (5 سنوات)", company: "الخزف السعودي", icon: Droplets },
        { label: "مراوح الشفط (5 سنوات)", company: "ماجد الحجيلي", icon: Wind },
        { label: "الألمنيوم (سنتين)", company: "أشكال وألوان", icon: Ruler },
        { label: "كاميرات المراقبة (سنتين)", company: "مؤسسة ابصار", icon: Camera },
      ]
    },
    location: {
      title: "مزايا الموقع",
      items: [
        { label: "داخل حد الحرم", dist: "مباشر" },
        { label: "يبعد عن الحرم", dist: "4 كلم / 5 دقائق" },
        { label: "يبعد عن مسجد قباء", dist: "7 كلم / 9 دقائق" },
        { label: "يبعد عن جامعة طيبة", dist: "3 كلم / 6 دقائق" },
        { label: "يبعد عن ممشى العقيق", dist: "150 م / 5 دقائق" },
        { label: "يبعد عن مستشفى أحد", dist: "4 كلم / 7 دقائق" },
      ]
    },
    stats: [
      { label: "عميل راضي", value: "500+" },
      { label: "مشروع منجز", value: "120+" },
      { label: "صفقة ناجحة", value: "300+" },
      { label: "سنوات خبرة", value: "15+" }
    ],
    filter: {
      search: "ابحث عن عقار",
      placeholder: "اسم المشروع او الحي...",
      city: "المدينة",
      type: "نوع العقار",
      submit: "عرض النتائج",
      cities: ["المدينة المنورة", "جدة", "الرياض"],
      types: ["شقق تمليك", "روفات", "فيلات", "أراضي"]
    },
    footer: {
      partnersTitle: "Partners of Success",
      phone: "055 083 8899",
      email: "info@asasiatalemaar.com",
      twitter: "@asasiaat2030",
      instagram: "asasiatalemaar.2000",
      address: "المدينة المنورة - شارع الحسن البصري - حي الجامعة"
    }
  },
  en: {
    dir: "ltr" as const,
    nav: {
      home: "Home",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      book: "Book Consultation"
    },
    hero: {
      badge: "Asasiyat Al Emaar Real Estate Development",
      title: "Invest Near The Haram Al-Nabawi",
      desc: "We offer the finest residential and investment projects in the world's purest land, with modern designs and extended warranties.",
      browse: "Browse Projects",
      whatsapp: "WhatsApp Us"
    },
    project32: {
      title: "Asasiyat 32",
      subtitle: "Al-Jamawat District",
      desc: "Asasiyat 32 project was born from long-standing expertise in the field to meet our valued clients' desires. Modern designs in Al-Jamawat plan near the Prophet's Mosque.",
      featuresTitle: "Project Features",
      features: [
        { label: "Surveillance", icon: Camera },
        { label: "Wood Cladding", icon: Ruler },
        { label: "Marble Corridors", icon: LayoutDashboard },
        { label: "Luxury Elevators", icon: Construction },
        { label: "Private Parking", icon: Car },
        { label: "Marble Facades", icon: Building2 },
        { label: "Saudi Code", icon: ShieldCheck },
      ],
      unitFeaturesTitle: "Unit Features",
      unitFeatures: [
        "Private Roofs", "Maid's Room", "Private Yard", "Insulated Windows", "AC Ready", 
        "Hanging Toilets", "Laundry Room", "Private Entry", "Duplex Units", "Rain Shower", 
        "Solid Wood", "Smart Entry", "Safety Tools", "Sound System"
      ]
    },
    warranties: {
      title: "Warranties",
      desc: "Real warranties up to 50 years for your absolute peace of mind",
      items: [
        { label: "Plumbing (50 Yrs)", company: "Nibro", icon: Droplets },
        { label: "Structural (10 Yrs)", company: "Malaz", icon: ShieldCheck },
        { label: "Electrical (25 Yrs)", company: "Al-Fanar", icon: Zap },
        { label: "Interior Doors (15 Yrs)", company: "Atqan", icon: DoorOpen },
        { label: "AC Foundation (10 Yrs)", company: "Zahrat Madinah", icon: Wind },
        { label: "Elevators (10 Yrs)", company: "Al-Zain", icon: Construction },
        { label: "Faucets (10 Yrs)", company: "GROHE", icon: Droplets },
        { label: "Smart Locks (2 Yrs)", company: "Rukn Al Raseed", icon: Lock },
        { label: "Heaters (5 Yrs)", company: "Saudi Ceramics", icon: Droplets },
        { label: "Extractors (5 Yrs)", company: "Majid Al Hojeily", icon: Wind },
        { label: "Aluminum (2 Yrs)", company: "Shapes & Colors", icon: Ruler },
        { label: "Cameras (2 Yrs)", company: "Absar", icon: Camera },
      ]
    },
    location: {
      title: "Location Advantages",
      items: [
        { label: "Haram Boundaries", dist: "Inside" },
        { label: "From Haram", dist: "4 KM / 5 Mins" },
        { label: "From Quba Mosque", dist: "7 KM / 9 Mins" },
        { label: "From Taibah Univ.", dist: "3 KM / 6 Mins" },
        { label: "From Walkway", dist: "150 M / 5 Mins" },
        { label: "From Hospital", dist: "4 KM / 7 Mins" },
      ]
    },
    stats: [
      { label: "Happy Clients", value: "500+" },
      { label: "Done Projects", value: "120+" },
      { label: "Success Deals", value: "300+" },
      { label: "Experience Years", value: "15+" }
    ],
    filter: {
      search: "Search Property",
      placeholder: "Name or area...",
      city: "City",
      type: "Type",
      submit: "Search",
      cities: ["Madinah", "Jeddah", "Riyadh"],
      types: ["Apartment", "Rooftop", "Villa", "Land"]
    },
    footer: {
      partnersTitle: "Partners of Success",
      phone: "055 083 8899",
      email: "info@asasiatalemaar.com",
      twitter: "@asasiaat2030",
      instagram: "asasiatalemaar.2000",
      address: "Madinah - Al Hassan Albasry St - Al Jamiah Dist"
    }
  }
};

const Logo = ({ className = "h-12" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <svg viewBox="0 0 100 100" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 80V30L50 20V80H40Z" fill="#D4AF37" />
      <path d="M55 80V40L65 50V80H55Z" fill="#D4AF37" opacity="0.8" />
      <path d="M25 80V50L35 40V80H25Z" fill="#D4AF37" opacity="0.9" />
      <rect x="20" y="82" width="60" height="1" fill="#D4AF37" />
    </svg>
    <div className="flex flex-col">
       <span className="text-white font-bold leading-none tracking-tighter uppercase" style={{ fontSize: '1.2em' }}>
         Asasiyat <span className="text-brand-accent">Al Emaar</span>
       </span>
       <span className="text-brand-accent font-arabic leading-none mt-1" style={{ fontSize: '0.6em' }}>
         أساسيات الإعمار للتطوير والاستثمار
       </span>
    </div>
  </div>
);

const Navbar = ({ t, dir, lang, setLang }: { t: any; dir: "rtl" | "ltr"; lang: 'ar' | 'en'; setLang: (l: 'ar' | 'en') => void }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-brand-primary/95 backdrop-blur-md py-4 shadow-xl border-b border-white/5" : "bg-transparent py-6"}`}>
      <div className={`container mx-auto px-6 flex justify-between items-center ${dir === 'ltr' ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className={`flex items-center gap-8 ${dir === 'ltr' ? 'flex-row' : 'flex-row-reverse'}`}>
          <Logo className="h-10 md:h-12" />
          
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium uppercase tracking-wider text-white">
            <a href="#" className="hover:text-brand-accent transition-colors">{t.nav.home}</a>
            <a href="#projects" className="hover:text-brand-accent transition-colors">{t.nav.projects}</a>
            <a href="#warranties" className="hover:text-brand-accent transition-colors">{t.nav.about}</a>
            <a href="#contact" className="hover:text-brand-accent transition-colors">{t.nav.contact}</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} className="flex items-center gap-2 text-white border border-white/20 px-3 py-1 rounded-full hover:bg-white/10 transition-colors text-xs font-bold uppercase tracking-wider">
            <Globe className="w-4 h-4" />
            {lang === 'ar' ? 'English' : 'العربية'}
          </button>
          <a href="https://wa.me/966550838899" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 bg-brand-accent text-brand-primary px-6 py-2.5 rounded-full font-bold text-sm hover:bg-brand-gold-light transition-all shadow-lg active:scale-95">
            {t.nav.book}
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ t, dir }: { t: any; dir: "rtl" | "ltr" }) => {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden bg-brand-primary">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury Real Estate Madinah" 
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-${dir === 'rtl' ? 'l' : 'r'} from-brand-primary via-brand-primary/60 to-transparent`}></div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-3xl ${dir === 'rtl' ? 'text-right mr-0 ml-auto' : 'text-left ml-0 mr-auto'}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/20 border border-brand-accent/30 text-brand-accent text-sm font-medium mb-6 backdrop-blur-sm">
              {t.hero.badge}
            </span>
            <h1 style={{ fontSize: '46px' }} className={`font-bold mb-8 leading-[1.1] text-white`}>
               {dir === 'rtl' ? (
                 <>استثمر بالقرب <br /><span style={{ fontSize: '42px' }} className="gold-text">من الحرم النبوي</span></>
               ) : (
                 <>Invest Near <br /><span style={{ fontSize: '42px' }} className="gold-text">The Prophet's Mosque</span></>
               )}
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl leading-relaxed">
              {t.hero.desc}
            </p>
            
            <div className={`flex flex-wrap gap-4 ${dir === 'rtl' ? 'justify-start' : 'justify-start'}`}>
              <button className="flex items-center gap-2 border-2 border-brand-accent text-brand-accent px-8 py-4 rounded-xl font-bold hover:bg-brand-accent hover:text-brand-primary transition-all active:scale-95 shadow-lg">
                {t.hero.browse}
              </button>
              <a href="https://wa.me/966550838899" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition-all shadow-xl active:scale-95">
                {t.hero.whatsapp}
                <Phone className={`w-5 h-5 ${dir === 'rtl' ? 'scale-x-[-1]' : ''}`} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FilterSection = ({ t, dir }: { t: any; dir: "rtl" | "ltr" }) => {
  return (
    <div className="container mx-auto px-6 -mt-20 relative z-20">
      <div className="glass-morphism rounded-3xl p-8 lg:p-10 shadow-2xl overflow-hidden border border-white/10">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-end ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
          <div className="flex flex-col gap-3">
            <label className="text-xs font-bold uppercase tracking-widest text-brand-accent/80">{t.filter.search}</label>
            <div className="relative">
              <Search className={`absolute ${dir === 'rtl' ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 w-4 h-4 text-white/40`} />
              <input 
                type="text" 
                placeholder={t.filter.placeholder} 
                className={`w-full bg-white/5 border border-white/10 rounded-2xl py-4 ${dir === 'rtl' ? 'pr-12 pl-4' : 'pl-12 pr-4'} focus:ring-2 focus:ring-brand-accent outline-none transition-all placeholder:text-white/20 text-white`}
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-xs font-bold uppercase tracking-widest text-brand-accent/80">{t.filter.city}</label>
            <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-4 focus:ring-2 focus:ring-brand-accent outline-none transition-all appearance-none text-white">
              {t.filter.cities.map((city: string) => <option key={city} className="bg-brand-primary">{city}</option>)}
            </select>
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-xs font-bold uppercase tracking-widest text-brand-accent/80">{t.filter.type}</label>
            <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-4 focus:ring-2 focus:ring-brand-accent outline-none transition-all appearance-none text-white">
              {t.filter.types.map((type: string) => <option key={type} className="bg-brand-primary">{type}</option>)}
            </select>
          </div>

          <button className="gold-gradient text-brand-primary font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-brand-accent/20 transition-all active:scale-95">
            {t.filter.submit}
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectShowcase = ({ t, dir }: { t: any; dir: "rtl" | "ltr" }) => {
  return (
    <section id="projects" className="py-24 bg-brand-primary text-white">
      <div className="container mx-auto px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${dir === 'rtl' ? '' : 'lg:flex-row-reverse'}`}>
          <div className="relative group">
            <div className="absolute -inset-4 gold-gradient opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
            <img 
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200" 
              className="relative rounded-3xl w-full aspect-[4/5] object-cover shadow-2xl"
              alt={t.project32.title}
            />
            <div className="absolute top-8 left-8 right-8 flex justify-between">
              <span className="glass-morphism px-6 py-2 rounded-full text-brand-accent font-bold text-sm">
                Project Showcase
              </span>
            </div>
          </div>

          <div className={dir === 'rtl' ? 'text-right' : 'text-left'}>
            <span className="text-brand-accent font-bold tracking-widest uppercase mb-4 block underline decoration-brand-accent/30 underline-offset-8">
              {t.project32.subtitle}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">{t.project32.title}</h2>
            <p className="text-white/60 leading-loose text-lg mb-12">
              {t.project32.desc}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              {t.project32.features.map((f: any, i: number) => (
                <div key={i} className="glass-morphism p-4 rounded-2xl flex flex-col items-center justify-center gap-3 group hover:border-brand-accent/30 transition-all">
                  <f.icon className="w-6 h-6 text-brand-accent group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-white/80">{f.label}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-white/5 pt-8">
              <h4 className="text-sm font-bold uppercase tracking-widest text-brand-accent mb-6">{t.project32.unitFeaturesTitle}</h4>
              <div className="flex flex-wrap gap-3">
                {t.project32.unitFeatures.map((f: string, i: number) => (
                  <span key={i} className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs font-medium text-white/50 hover:bg-white/10 transition-all cursor-default">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WarrantiesSection = ({ t, dir }: { t: any; dir: "rtl" | "ltr" }) => {
  return (
    <section id="warranties" className="py-24 bg-brand-primary relative overflow-hidden text-white">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{t.warranties.title}</h2>
          <p className="text-white/50">{t.warranties.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.warranties.items.map((w: any, i: number) => (
             <motion.div 
               whileHover={{ y: -5 }}
               key={i} 
               className="glass-morphism p-6 rounded-2xl border border-white/5 flex items-center gap-4 group"
             >
               <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-primary transition-all">
                 <w.icon className="w-6 h-6" />
               </div>
               <div className={dir === 'rtl' ? 'text-right' : 'text-left'}>
                 <h4 className="text-sm font-bold block text-white">{w.label}</h4>
                 <span className="text-[10px] text-brand-accent uppercase tracking-widest font-bold opacity-70 group-hover:opacity-100 transition-opacity">{w.company}</span>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LocationAdvantages = ({ t, dir }: { t: any; dir: "rtl" | "ltr" }) => {
  return (
    <section className="py-24 relative bg-brand-primary text-white">
      <div className="container mx-auto px-6">
        <div className="glass-morphism rounded-[3rem] overflow-hidden border border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className={`p-12 lg:p-20 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
              <h2 className="text-4xl font-bold mb-12 text-white">{t.location.title}</h2>
              <div className="space-y-8">
                {t.location.items.map((item: any, i: number) => (
                  <div key={i} className={`flex items-center gap-6 ${dir === 'rtl' ? 'flex-row' : 'flex-row-reverse'} justify-end`}>
                    <div className="text-right">
                      <h4 className="text-lg font-bold text-white/90">{item.label}</h4>
                      <p className="text-brand-accent font-medium text-sm">{item.dist}</p>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand-accent border border-white/10">
                      <MapPin className="w-6 h-6" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-accent/20 h-full min-h-[400px] relative overflow-hidden">
               <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200" className="w-full h-full object-cover grayscale opacity-50" alt="Map Overview" />
               <div className="absolute inset-0 gold-gradient mix-blend-overlay"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                 <button className="bg-white text-brand-primary px-8 py-3 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform">
                   View Map Details
                 </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stats = ({ t }: { t: any }) => {
  return (
    <section className="py-20 gold-gradient">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20">
          {t.stats.map((stat: any, i: number) => (
            <div key={i} className="text-center text-brand-primary">
              <span className="text-4xl md:text-6xl font-black block mb-2">{stat.value}</span>
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-70">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = ({ t, dir }: { t: any; dir: "rtl" | "ltr" }) => {
  const pdfPartners = [
    "Mada Company", "NERO", "ZAIN Elevators", "Al-Fanar", "Jazeera Paints", 
    "SABIC", "Saudi Ceramics", "GROHE", "SKAB", "Wangkang", "Namar", "Alufco"
  ];

  return (
    <footer id="contact" className="bg-black pt-24 pb-12 text-white">
      <div className="container mx-auto px-6">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 border-b border-white/5 pb-16 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
          <div className="lg:col-span-1">
             <div className={`flex items-center gap-3 mb-8 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
               <Logo className="h-16" />
             </div>
             <p className="text-white/40 text-sm leading-loose">
               شركة أساسيات الإعمار للتطوير والاستثمار العقاري - مسيرة من الإنجاز والتميز في بناء المجمعات السكنية الفاخرة بجوار الحرم النبوي الشريف.
             </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-white">Contact Information</h4>
            <ul className="space-y-6 text-white/40 text-sm">
              <li className={`flex items-center gap-4 group ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <Phone className="w-4 h-4 text-brand-accent" />
                <a href="https://wa.me/966550838899" target="_blank" rel="noopener noreferrer" className="group-hover:text-white transition-colors tracking-wider whitespace-nowrap">{t.footer.phone}</a>
              </li>
              <li className={`flex items-center gap-4 group ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <Mail className="w-4 h-4 text-brand-accent" />
                <span className="group-hover:text-white transition-colors">{t.footer.email}</span>
              </li>
              <li className={`flex items-center gap-4 group ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <Twitter className="w-4 h-4 text-brand-accent" />
                <span className="group-hover:text-white transition-colors">{t.footer.twitter}</span>
              </li>
              <li className={`flex items-center gap-4 group ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <Instagram className="w-4 h-4 text-brand-accent" />
                <span className="group-hover:text-white transition-colors">{t.footer.instagram}</span>
              </li>
              <li className={`flex items-start gap-4 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <MapPin className="w-4 h-4 text-brand-accent shrink-0" />
                <span className="text-xs leading-relaxed">{t.footer.address}</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-8 text-brand-accent uppercase tracking-[0.2em]">{t.footer.partnersTitle}</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 opacity-40 hover:opacity-100 transition-all duration-500">
              {pdfPartners.map(p => (
                <div key={p} className="bg-white/5 h-14 rounded-xl flex items-center justify-center text-center px-4 font-black text-[9px] md:text-[10px] tracking-tight border border-white/5 text-white/80 transition-all hover:bg-white/10 hover:border-brand-accent/30 uppercase cursor-default">
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-[10px] uppercase tracking-widest font-medium ${dir === 'ltr' ? 'flex-row' : 'flex-row-reverse'}`}>
          <p>© 2026 Asasiyat Al Emaar Real Estate Dev. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function LandingPage() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const t = content[lang];
  const dir = content[lang].dir;

  useEffect(() => {
    document.dir = dir;
  }, [dir]);

  return (
    <div className={`min-h-screen bg-brand-primary text-white selection:bg-brand-accent selection:text-brand-primary ${dir === 'rtl' ? 'font-arabic' : 'font-sans'}`}>
      <Navbar t={t} dir={dir} lang={lang} setLang={setLang} />
      <Hero t={t} dir={dir} />
      <FilterSection t={t} dir={dir} />
      <ProjectShowcase t={t} dir={dir} />
      <WarrantiesSection t={t} dir={dir} />
      <LocationAdvantages t={t} dir={dir} />
      <Stats t={t} />
      <Footer t={t} dir={dir} />
    </div>
  );
}
