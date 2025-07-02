import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Palette, Zap, Users, Star, Mail, Phone, MapPin, Menu, X, ChevronDown, Globe, Sparkles, TrendingUp, Eye, Clock, Shield, Check, Quote } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
                {['Accueil', 'Services', 'Témoignages', 'À propos'].map((item, index) => (
                  <button 
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace('à propos', 'apropos').replace('témoignages', 'portfolio'))} 
                    className="relative text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                  </button>
                ))}
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transform"
                >
                  Contact
                </button>
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
              {['Accueil', 'Services', 'Témoignages', 'À propos', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace('à propos', 'apropos').replace('témoignages', 'portfolio'))} 
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
              Ne négligez pas le traffic en ligne!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0 animate-fade-in-up-delay-2">
              <button 
                onClick={() => scrollToSection('contact')}
                className="group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 transform flex items-center"
              >
                Démarrer mon projet
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="group text-slate-700 hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 flex items-center backdrop-blur-sm"
              >
                Voir nos créations
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
                title: "Apparence professionnelle, fonctionne comme une machine",
                description: "Design élégant qui inspire confiance et génère de l'action, même pendant que vous dormez.",
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
              Nos clients témoignent
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Découvrez comment nous avons transformé la présence digitale de nos clients
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

      {/* About Section */}
      <section id="apropos" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-cyan-50/30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100/50 backdrop-blur-sm rounded-full text-blue-700 text-sm font-medium mb-6">
                <Users className="w-4 h-4 mr-2" />
                À propos
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                Votre partenaire digital d'excellence
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Depuis 2019, nous accompagnons les entreprises ambitieuses dans leur transformation digitale. 
                Notre expertise combine créativité, innovation et performance pour créer des expériences web exceptionnelles.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-8">
                {[
                  { number: "200+", label: "Projets réalisés", color: "blue" },
                  { number: "99%", label: "Clients satisfaits", color: "cyan" },
                  { number: "5", label: "Années d'expertise", color: "blue" },
                  { number: "24/7", label: "Support premium", color: "cyan" }
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center group">
                    <div className={`text-4xl font-bold bg-gradient-to-r from-${stat.color}-600 to-cyan-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.number}
                    </div>
                    <div className="text-slate-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 transform flex items-center"
              >
                Parlons de votre projet
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="relative animate-fade-in-up-delay">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                <img 
                  src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Notre équipe"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-cyan-500/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/5 rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-cyan-300 text-sm font-medium mb-6">
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Démarrons votre projet
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Prêt à transformer votre présence digitale ? Contactez-nous pour un devis gratuit et personnalisé.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-fade-in-up">
              <h3 className="text-3xl font-bold text-white mb-8">Discutons de vos ambitions</h3>
              
              <div className="space-y-6">
                {[
                  { icon: Mail, title: "Email", info: "hello@saycedigital.fr", color: "blue" },
                  { icon: Phone, title: "Téléphone", info: "+33 1 23 45 67 89", color: "cyan" },
                  { icon: MapPin, title: "Adresse", info: "123 Avenue des Champs-Élysées\n75008 Paris, France", color: "blue" }
                ].map((contact, index) => (
                  <div key={contact.title} className="flex items-start group">
                    <div className={`w-12 h-12 bg-gradient-to-br from-${contact.color}-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <contact.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-1">{contact.title}</p>
                      <p className="text-slate-300 whitespace-pre-line">{contact.info}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <p className="text-slate-300 mb-4">Suivez-nous</p>
                <div className="flex space-x-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-12 h-12 bg-slate-800/50 hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-500 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-3 backdrop-blur-sm">
                      <div className="w-5 h-5 bg-slate-400 rounded-sm"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 animate-fade-in-up-delay">
              <h3 className="text-2xl font-bold text-white mb-6">Demandez votre devis gratuit</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Prénom</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all backdrop-blur-sm"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Nom</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all backdrop-blur-sm"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all backdrop-blur-sm"
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Type de projet</label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all backdrop-blur-sm">
                    <option className="bg-slate-800">Site vitrine</option>
                    <option className="bg-slate-800">E-commerce</option>
                    <option className="bg-slate-800">Application web</option>
                    <option className="bg-slate-800">Refonte de site</option>
                    <option className="bg-slate-800">Autre</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all backdrop-blur-sm resize-none"
                    placeholder="Décrivez votre projet..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 transform"
                >
                  Envoyer ma demande
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-cyan-500/5 rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6 group">
                <Globe className="h-10 w-10 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Sayce Digital
                </span>
              </div>
              <p className="text-slate-400 mb-8 max-w-md leading-relaxed">
                Votre agence digitale d'excellence pour créer des expériences web exceptionnelles 
                qui transforment vos visiteurs en clients fidèles.
              </p>
              <div className="flex space-x-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-12 h-12 bg-slate-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-500 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-3">
                    <div className="w-5 h-5 bg-slate-400 rounded-sm"></div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
              <ul className="space-y-3">
                {['Développement Web', 'Design UI/UX', 'E-commerce', 'Optimisation SEO'].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Contact</h4>
              <ul className="space-y-3 text-slate-400">
                <li>+33 1 23 45 67 89</li>
                <li>hello@saycedigital.fr</li>
                <li className="leading-relaxed">123 Avenue des Champs-Élysées<br />75008 Paris, France</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
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