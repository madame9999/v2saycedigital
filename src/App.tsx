import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Palette, Zap, Users, Star, Mail, Phone, MapPin, Menu, X, ChevronDown, Globe, Sparkles, TrendingUp, Eye, Clock, Shield, Check, Quote, Gift, Plus, Minus, ArrowDown } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showDiscount, setShowDiscount] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Check if user is at bottom of page
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsAtBottom(scrollTop + windowHeight >= documentHeight - 100);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const generateDiscountCode = () => {
    const codes = ['SAVE10WEB', 'DIGITAL10', 'EXCLUSIVE10', 'WEB10OFF', 'SAYCE10'];
    return codes[Math.floor(Math.random() * codes.length)];
  };

  const handleDiscountReveal = () => {
    if (!showDiscount) {
      // Generate code only when first revealing
      setDiscountCode(generateDiscountCode());
    }
    setShowDiscount(!showDiscount);
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleOfferSelection = () => {
    scrollToSection('calendar');
  };

  const faqData = [
    {
      question: "Combien de temps faut-il vraiment pour mettre mon site en ligne ?",
      answer: "48 heures ou moins—si vous choisissez le plan Autopilot, vous serez prioritaire. Puis si un événement inattendu nous empêche de remplir notre promesse, nous remboursons 50% de la somme totale du plan sélectionné. Évidemment, nous vous rembourserons entièrement si vous souhaitez clore le partenariat."
    },
    {
      question: "Je ne suis pas doué en technologie — dois-je faire quelque chose moi-même ?",
      answer: "Non ! Nous gérons tout : domaine, hébergement, design et configuration. Vous n'avez qu'à approuver le résultat final."
    },
    {
      question: "Et si je n'ai pas de photos professionnelles ou de texte ?",
      answer: "Aucun problème — nous rédigeons un texte persuasif pour vous et pouvons utiliser des images de haute qualité adaptées à votre entreprise."
    },
    {
      question: "Les clients peuvent-ils me contacter directement depuis le site ?",
      answer: "Oui ! Ils peuvent remplir un formulaire qui vous notifie instantanément par email ou SMS. Aucun prospect manqué."
    },
    {
      question: "Quelle est la différence entre les options à 295$ et 420$ ?",
      answer: "Le plan à 420$ inclut un chatbot IA, des alertes de prospects sur votre téléphone, et des outils pour être trouvé sur Google — il se rentabilise rapidement."
    },
    {
      question: "Mon site apparaîtra-t-il sur Google ?",
      answer: "Oui, tous les plans incluent l'optimisation SEO pour vous aider à vous classer. Nos plans supérieurs incluent un travail continu pour grimper encore plus haut."
    },
    {
      question: "Dois-je continuer à payer mensuellement ?",
      answer: "Aucun frais mensuel sauf si vous choisissez le plan Autopilot qui offre 12 mois de SEO continu—les 6 premiers mois sont payants (109.23$/mois), puis les 6 derniers sont offerts. Sinon, c'est un prix unique."
    },
    {
      question: "Puis-je mettre à jour mon site plus tard si nécessaire ?",
      answer: "Oui — vous pourrez demander des mises à jour, ou nous pouvons les gérer pour un petit frais selon le changement."
    },
    {
      question: "Comment savoir si cela aidera vraiment mon entreprise ?",
      answer: "Nos clients rapportent plus de demandes, plus de confiance des clients, et une meilleure visibilité — parce qu'aujourd'hui, les gens cherchent sur Google avant d'appeler."
    },
    {
      question: "J'obtiens déjà du travail par bouche-à-oreille — ai-je vraiment besoin d'un site web ?",
      answer: "Le bouche-à-oreille c'est génial — mais même les références vous cherchent d'abord sur Google. Et qu'en est-il des gens qui n'ont jamais entendu parler de vous ? Chaque jour, de nouveaux clients potentiels recherchent en ligne exactement ce que vous offrez. Si vous n'êtes pas visible, ils iront voir quelqu'un d'autre. Un excellent site web inspire confiance rapidement et s'assure qu'ils vous choisissent."
    }
  ];

  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* Cursor follower */}
      <div 
        className="fixed w-4 h-4 bg-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${isScrolled ? 0.5 : 1})`,
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-slate-200/50' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center group">
              <div className="relative">
                <Globe className="h-10 w-10 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              </div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Sayce Digital
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Accueil', 'Services', 'Témoignages', 'Offres', 'FAQ'].map((item, index) => (
                  <button 
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace('témoignages', 'portfolio').replace('offres', 'offers'))} 
                    className="relative text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-700 hover:text-blue-600 inline-flex items-center justify-center p-2 rounded-md transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="bg-white/95 backdrop-blur-xl border-t border-slate-200/50">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Accueil', 'Services', 'Témoignages', 'Offres', 'FAQ'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace('témoignages', 'portfolio').replace('offres', 'offers'))} 
                  className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-600 w-full text-left transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/30">
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100/50 backdrop-blur-sm rounded-full text-blue-700 text-sm font-medium mb-8 animate-bounce-subtle">
              <Sparkles className="w-4 h-4 mr-2" />
              Agence digitale premium
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-slate-900 mb-8 leading-tight">
              Créons votre
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 animate-gradient-x leading-relaxed">
                présence digitale
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 animate-gradient-x leading-relaxed">
                en 48h
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-4 max-w-4xl mx-auto leading-relaxed opacity-0 animate-fade-in-up-delay">
              Nous concevons des sites web exceptionnels qui transforment vos visiteurs en clients—le jour même.
            </p>
            
            <p className="text-lg md:text-xl text-slate-600 mb-4 max-w-4xl mx-auto leading-relaxed opacity-0 animate-fade-in-up-delay italic">
              89% des consommateurs se tournent vers un concurrent après une mauvaise expérience utilisateur.
            </p>
            
            <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed opacity-0 animate-fade-in-up-delay">
              Ne négligez pas le trafic en ligne!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0 animate-fade-in-up-delay-2">
              <button 
                onClick={() => scrollToSection('offers')}
                className="group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 transform flex items-center"
              >
                Démarrer mon projet
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="group text-slate-700 hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 flex items-center backdrop-blur-sm"
              >
                Voir témoignages
                <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-xl opacity-20 animate-float-slow"></div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 via-slate-50/80 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100/50 backdrop-blur-sm rounded-full text-blue-700 text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Pourquoi votre site web est crucial
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Les chiffres parlent
            </h2>
          </div>
          
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl">
              {[
                {
                  icon: Eye,
                  percentage: "75%",
                  title: "des consommateurs jugent une entreprise par son design web",
                  description: "Un site professionnel et soigné renforce instantanément la confiance—crucial quand les clients locaux prennent des décisions rapides.",
                  color: "blue",
                  delay: "0ms"
                },
                {
                  icon: ArrowRight,
                  percentage: "88%",
                  title: "des utilisateurs ne reviendront pas après une mauvaise expérience",
                  description: "Ne pas captiver l'attention des visiteurs risque de faire perdre près de 9 clients potentiels sur 10.",
                  color: "blue",
                  delay: "200ms"
                },
                {
                  icon: MapPin,
                  percentage: "76%",
                  title: "des utilisateurs qui recherchent localement visitent dans la journée",
                  description: "Optimiser votre site aide à convertir le trafic de recherche locale en visites physiques presque immédiatement.",
                  color: "blue",
                  delay: "400ms"
                },
                {
                  icon: Clock,
                  percentage: "7%",
                  title: "de conversions en plus pour chaque seconde gagnée",
                  description: "Une vitesse de site plus rapide augmente directement les conversions—critique dans les recherches locales sur mobile.",
                  color: "blue",
                  delay: "600ms"
                },
                {
                  icon: Shield,
                  percentage: "34%",
                  title: "disent qu'un site intelligent augmente la crédibilité",
                  description: "Avoir des informations claires, des témoignages et des détails de localisation rend les consommateurs significativement plus enclins à s'engager.",
                  color: "blue",
                  delay: "800ms"
                }
              ].map((stat, index) => (
                <div 
                  key={stat.title}
                  className="group p-6 rounded-3xl border border-slate-200/50 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:scale-105 transform bg-white/70 backdrop-blur-sm animate-fade-in-up"
                  style={{ animationDelay: stat.delay }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br from-${stat.color}-100 to-${stat.color}-200 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                  </div>
                  
                  <div className={`text-3xl font-bold bg-gradient-to-r from-${stat.color}-600 to-cyan-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.percentage}
                  </div>
                  
                  <h3 className={`text-sm font-bold text-slate-900 mb-3 group-hover:text-${stat.color}-600 transition-colors leading-tight`}>
                    {stat.title}
                  </h3>
                  
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 backdrop-blur-sm rounded-full text-slate-700 text-lg font-medium animate-pulse">
              <Sparkles className="w-5 h-5 mr-3 text-blue-600" />
              <span className="italic">Votre site web est votre commercial 24h/24, 7j/7—c'est un investissement pour plus de confiance, plus d'affaires locales.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100/50 backdrop-blur-sm rounded-full text-blue-700 text-sm font-medium mb-6">
              <Code className="w-4 h-4 mr-2" />
              Nos avantages
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Pourquoi les entreprises locales nous choisissent
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                title: "En ligne en 48 heures—Garanti",
                description: "Lancez-vous plus vite que vos concurrents et commencez à attirer des clients immédiatement. Plus de prospects. Plus d'appels. Plus de ventes.",
                delay: "0ms"
              },
              {
                title: "Conçu sur mesure pour convertir les visiteurs en clients",
                description: "Chaque page est construite avec la génération de prospects locaux et la confiance des clients à l'esprit.",
                delay: "200ms"
              },
              {
                title: "Aucun casse-tête technique—Nous gérons tout",
                description: "Domaine, hébergement, configuration SEO, optimisation mobile.",
                delay: "400ms"
              },
              {
                title: "Une présence en ligne qui vend non-stop — à un prix qui fait sourire.",
                description: "Ayez une présence qui génère des clients pour vous de Lundi à Dimanche—Janvier à Décembre, sans pour autant vous soucier d'un salaire à verser ;)",
                delay: "600ms"
              },
              {
                title: "Optimisé pour Google et la recherche locale",
                description: "Apparaissez quand les gens recherchent \"près de moi\"—soyez trouvé par de vrais clients dans votre région.",
                delay: "800ms"
              }
            ].map((benefit, index) => (
              <div 
                key={benefit.title}
                className="flex items-start space-x-6 p-6 rounded-2xl hover:bg-blue-50/30 transition-all duration-300 animate-fade-in-up group"
                style={{ animationDelay: benefit.delay }}
              >
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Check className="h-5 w-5 text-white animate-pulse" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="portfolio" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full opacity-10 animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100/50 backdrop-blur-sm rounded-full text-blue-700 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Témoignages
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Les résultats parlent d'eux-mêmes
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Des centaines de personnes recherchent vos services chaque jour sur le web, pourquoi laisser cet argent sur la table? Si vous ne les accueillez pas convenablement, vos compétiteurs s'en chargeront.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                company: "Galaxy Dental",
                location: "Calgary, AB",
                person: "Steve Don Boghara",
                role: "Propriétaire",
                quote: "brought a new success to our business… I cannot express my gratitude enough for their hard work",
                result: "Gain de visibilité locale, site plus performant et augmentation du nombre de rendez-vous grâce au SEO.",
                delay: "0ms"
              },
              {
                company: "Les Toitures MR Inc.",
                location: "Montréal, QC",
                person: "Équipe dirigeants",
                role: "Direction",
                quote: "x4 chiffre d'affaires",
                result: "Site en top 10 sur requêtes locales • 725 000+ impressions, 26 000+ clics via Google Ads • 40 pages bien indexées",
                delay: "200ms"
              },
              {
                company: "Translate Calgary",
                location: "Calgary, AB",
                person: "Agence de traduction",
                role: "Locale",
                quote: "+248 % de leads qualifiés",
                result: "Volume et qualité en hausse grâce à la plateforme Smart Site + SEO + génération de leads",
                delay: "400ms"
              },
              {
                company: "Solitudes Spa & Tanning Studio",
                location: "Meaford, ON",
                person: "Janine & Bryon Doucette",
                role: "Propriétaires",
                quote: "Awesome compliments… on bookings qui proviennent directement du site… phrases que seuls on retrouve dessus…",
                result: "Augmentation directe des réservations grâce au site web optimisé",
                delay: "600ms"
              },
              {
                company: "Fleuriste Villefontaine",
                location: "Isère, France",
                person: "Marie Dupont",
                role: "Propriétaire",
                quote: "Demandes de devis en hausse de 25 %",
                result: "Chiffre d'affaires augmenté de 15 % • Fidélisation via newsletter • Clientèle élargie grâce au SEO",
                delay: "800ms"
              },
              {
                company: "Physio For Seniors Clinic",
                location: "Calgary, AB",
                person: "Clinique de physiothérapie",
                role: "Équipe médicale",
                quote: "+324 % d'amélioration du positionnement Google",
                result: "Interface fluide, responsive et performante • Augmentation nette du nombre de patients via prise de rendez-vous en ligne",
                delay: "1000ms"
              },
              {
                company: "Mar-Mat Inc.",
                location: "Québec, QC",
                person: "Installation de mobilier",
                role: "Équipe commerciale",
                quote: "Site pro et percutant",
                result: "Notoriété accrue, plus de demandes client • Conversion améliorée, nouveaux clients acquis",
                delay: "1200ms"
              }
            ].map((testimonial, index) => (
              <div 
                key={testimonial.company}
                className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 transform animate-fade-in-up group border border-slate-200/50 hover:border-blue-200"
                style={{ animationDelay: testimonial.delay }}
              >
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Quote className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {testimonial.company}
                    </h3>
                    <p className="text-sm text-slate-600">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-slate-700 italic leading-relaxed mb-4 font-medium">
                    "{testimonial.quote}"
                  </blockquote>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {testimonial.result}
                  </p>
                </div>
                
                <div className="border-t border-slate-200/50 pt-4">
                  <p className="font-semibold text-slate-900 text-sm">{testimonial.person}</p>
                  <p className="text-xs text-slate-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section id="offers" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-cyan-50/30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100/50 backdrop-blur-sm rounded-full text-blue-700 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Nos offres
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Choisissez votre formule
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Des solutions adaptées à chaque besoin et budget pour propulser votre présence digitale
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* STARTER Plan */}
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 transform animate-fade-in-up border border-slate-200/50 hover:border-blue-200">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100/50 rounded-full text-blue-700 text-sm font-medium mb-4">
                  STARTER
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">$295</div>
                <p className="text-slate-600 font-medium">Votre vitrine digitale, en ligne en 48h</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Site web intelligent 1 page de haute qualité",
                  "Compatible mobile et chargement rapide",
                  "Formulaire de contact lié à votre email",
                  "Hébergement + configuration domaine inclus",
                  "Prêt pour Google (boost SEO de base)"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-sm text-slate-600 italic mb-6">
                Mettez-vous en ligne rapidement. Parfait pour ceux qui ont besoin d'une présence moderne et épurée—sans superflu.
              </p>
              
              <button 
                onClick={handleOfferSelection}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Choisir STARTER
              </button>
            </div>

            {/* SMART GROWTH Plan - Featured */}
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 transform animate-fade-in-up border-2 border-blue-300 relative lg:scale-110 lg:z-10">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                  Plus Populaire
                </div>
              </div>
              
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full text-blue-700 text-sm font-medium mb-4">
                  SMART GROWTH
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">$420</div>
                <p className="text-slate-600 font-medium">Tout dans Starter + Outils pour attirer et convertir</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Site web multi-sections avec mise en avant des services",
                  "Alertes de formulaire intelligent envoyées directement sur votre téléphone",
                  "Chatbot IA : commercial 24/7—réponses instantanées aux prospects",
                  "6 mois de boost SEO pour apparaître sur Google",
                  "Intégration des avis Google",
                  "Newsletter pour relancer vos clients par email",
                  "Livré en 48h"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-sm text-slate-600 italic mb-6">
                Plus de visibilité, plus de prospects, plus de crédibilité—tout sans lever le petit doigt. C'est par ça que commencent les professionnels locaux sérieux.
              </p>
              
              <button 
                onClick={handleOfferSelection}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Choisir SMART GROWTH
              </button>
            </div>

            {/* AUTOPILOT Plan */}
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 transform animate-fade-in-up border border-slate-200/50 hover:border-blue-200">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-purple-100/50 rounded-full text-purple-700 text-sm font-medium mb-4">
                  AUTOPILOT
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">$690</div>
                <p className="text-slate-600 font-medium">Votre site web travaille pour vous 24/7 — et grimpe sur Google</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Tout dans Smart Growth",
                  "12 mois de SEO continu (optimisation hebdomadaire pour le classement Google)",
                  "Optimisation du profil Google Business",
                  "\"Booster de prospects chauds\" — popup ou barre d'offre optionnelle pour inciter aux conversions",
                  "Livraison prioritaire"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-sm text-slate-600 italic mb-6">
                Vous obtenez les clients. Le site se charge de parler, de se classer et de convertir — sans arrêt.
              </p>
              
              <button 
                onClick={handleOfferSelection}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
              >
                Choisir AUTOPILOT
              </button>
            </div>
          </div>
          
          {/* Discount Section */}
          <div className="text-center mt-16">
            <p className="text-sm text-slate-500 italic mb-4">
              Psst. Cliquez ici pour réclamer une remise de 10% exclusive aux visiteurs de notre site web—valide uniquement en août 2025.
            </p>
            
            <div className="inline-block">
              <button
                onClick={handleDiscountReveal}
                className="group relative bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25 hover:scale-105 transform flex items-center"
              >
                <Gift className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                {showDiscount ? 'Masquer la remise' : 'Révéler ma remise exclusive'}
                <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
              </button>
              
              {showDiscount && (
                <div className="mt-6 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl animate-fade-in-up">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-700 mb-2">🎉 Félicitations!</div>
                    <p className="text-yellow-800 mb-4">Votre code de remise de 10% :</p>
                    <div className="inline-block bg-white px-6 py-3 rounded-lg border-2 border-dashed border-yellow-400">
                      <span className="text-2xl font-bold text-yellow-700 tracking-wider">
                        {discountCode}
                      </span>
                    </div>
                    <p className="text-sm text-yellow-700 mt-4 italic">
                      Utilisez ce code lors de votre commande pour économiser 10% sur n'importe quelle formule!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full opacity-10 animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100/50 backdrop-blur-sm rounded-full text-blue-700 text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              FAQ
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Vous avez des questions, nous avons des réponses
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/50 hover:border-blue-200 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-blue-50/30 transition-all duration-300 rounded-2xl group"
                >
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <Minus className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                    ) : (
                      <Plus className="h-6 w-6 text-slate-400 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300" />
                    )}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ${
                  openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-6">
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            De nouveaux clients vous recherchent{' '}
            <span className="relative inline-block">
              <span className="text-blue-600 animate-pulse">aujourd'hui</span>
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full animate-pulse"></div>
            </span>
            {' '}— ne les laissez pas trouver vos concurrents à la place.
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Investissez 10 minutes, récoltez 10 fois plus
          </p>
          
          {/* Animated Arrow */}
          <div className="flex justify-center mb-8">
            <div className="animate-bounce">
              <ArrowDown className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          
          {/* Calendar Section */}
          <section id="calendar" className="relative">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="calendly-inline-widget" data-url="https://calendly.com/madamechenouf-saycedigi" style={{minWidth:'320px', height:'700px'}}></div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-lg text-slate-600 italic">
                Nous sommes disponibles chaque jour de 9:00 am à 5:00 pm! Au plaisir de vous rencontrer :)
              </p>
            </div>
          </section>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center">
            <div className={`flex items-center group transition-all duration-500 ${
              isAtBottom ? 'animate-bounce-subtle' : ''
            }`}>
              <Globe className={`h-10 w-10 text-cyan-400 transition-transform duration-500 ${
                isAtBottom ? 'rotate-12 scale-110' : ''
              }`} />
              <span className={`ml-3 text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-500 ${
                isAtBottom ? 'scale-110' : ''
              }`}>
                Sayce Digital
              </span>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400">© 2024 Sayce Digital. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Mentions légales', 'Politique de confidentialité', 'CGV'].map((link) => (
                <a key={link} href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-5deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up-delay {
          opacity: 0;
          animation: fade-in-up 0.8s ease-out 0.3s forwards;
        }
        
        .animate-fade-in-up-delay-2 {
          opacity: 0;
          animation: fade-in-up 0.8s ease-out 0.6s forwards;
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default App;