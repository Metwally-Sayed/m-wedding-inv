import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Volume2, VolumeX, MapPin, ExternalLink } from 'lucide-react';

// Language content
const content = {
  en: {
    gettingMarried: "WE'RE GETTING MARRIED",
    date: "29 September 2026",
    rsvp: "RSVP",
    countdown: "Countdown",
    until: "UNTIL 29 SEPTEMBER 2026",
    days: "DAYS",
    hours: "HOURS",
    minutes: "MINUTES",
    welcome: "Welcome!",
    welcomeText: "We warmly invite you to celebrate our wedding day with us in the beautiful town of Ronda, Andalusia. We look forward to sharing this unforgettable moment with our most special people.",
    venue: "The Venue",
    whereWeCelebrate: "Where we celebrate",
    venueName: "Mountain Rose",
    venueDate: "29 September 2026",
    venueTime: "17:00 - 21:00",
    venueAddress: "6th of October City",
    venueCity: "Giza Governorate 3260440",
    openInMaps: "Open in Maps",
    dayProgramme: "Day Programme",
    arrival: "ARRIVAL",
    ceremony: "CEREMONY",
    cocktails: "COCKTAILS",
    dinner: "DINNER",
    cuttingCake: "CUTTING THE CAKE",
    finish: "FINISH",
    dressCode: "Dress Code",
    women: "Women",
    womenAttire: "Cocktail or formal dress",
    men: "Men",
    menAttire: "Dark suit and tie",
    preWeddingEvents: "PRE-WEDDING EVENTS",
    comeSayHello: "Come Say Hello...",
    preWeddingText: "These are informal gatherings, so feel free to join us if you're in the area.",
    welcomeDrinks: "Welcome Drinks",
    welcomeDrinksDate: "Friday, September 11th, 2026",
    welcomeDrinksTime: "8:00 PM",
    welcomeDrinksLocation: "Bodega García Hidalgo, Ronda",
    farewellBrunch: "Farewell Brunch",
    farewellBrunchDate: "Sunday, September 13th, 2026",
    farewellBrunchTime: "12:00 PM",
    farewellBrunchLocation: "Parador de Ronda (terrace)",
    locationTransport: "Location & Transportation",
    locationAddress: "Nile Flori, 17 Nile Corniche, Maadi, Cairo",
    googleMaps: "GOOGLE MAPS",
    fromMalaga: "From Málaga: ~1h 30min via A-357 and A-367",
    fromSeville: "From Seville: ~2h via A-376",
    fromMarbella: "From Marbella: ~1h via A-397",
    accommodation: "Accommodation",
    accommodationText: "Finca El Olivar does not offer lodging. Here are some recommended options nearby.",
    visitWebsite: "Visit Website",
    gallery: "Gallery",
    gifts: "Gifts",
    giftsText: "Your presence is our greatest gift. If you wish to give us something, please find our bank account information below:",
    rsvpTitle: "RSVP",
    rsvpText: "Let us know if you can make it",
    attending: "Will you be attending?",
    yesAttending: "Yes, I'll be there",
    noAttending: "Unfortunately, I can't make it",
    howManyGuests: "How many guests?",
    person: "Person",
    mainContact: "(Main contact)",
    fullName: "Full name",
    emailAddress: "Email address",
    dietaryRequirements: "Dietary requirements",
    dietaryPlaceholder: "e.g. vegetarian, allergies, etc.",
    childrenAttending: "Will any children be attending?",
    yes: "Yes",
    no: "No",
    message: "Message for the couple",
    messagePlaceholder: "Is there anything you'd like to tell us?",
    sendRSVP: "Send RSVP",
    madeWithLove: "Made with love by",
    theDigitalYes: "The Digital Yes",
  },
  es: {
    gettingMarried: "NOS CASAMOS",
    date: "29 de Septiembre de 2026",
    rsvp: "CONFIRMAR ASISTENCIA",
    countdown: "Cuenta Atrás",
    until: "HASTA EL 29 DE SEPTIEMBRE DE 2026",
    days: "DÍAS",
    hours: "HORAS",
    minutes: "MINUTOS",
    welcome: "¡Bienvenidos!",
    welcomeText: "Os invitamos calurosamente a celebrar nuestro día de boda con nosotros en la hermosa ciudad de Ronda, Andalucía. Esperamos compartir este momento inolvidable con nuestra gente más especial.",
    venue: "El Lugar",
    whereWeCelebrate: "Dónde celebramos",
    venueName: "Finca El Olivar",
    venueDate: "29 de Septiembre de 2026",
    venueTime: "17:00 - 21:00",
    venueAddress: "Camino de los Olivos s/n, Ronda",
    venueCity: "Málaga, 29400 – España",
    openInMaps: "Abrir en Maps",
    dayProgramme: "Programa del Día",
    arrival: "LLEGADA",
    ceremony: "CEREMONIA",
    cocktails: "CÓCTELES",
    dinner: "CENA",
    cuttingCake: "CORTE DE LA TARTA",
    finish: "FINAL",
    dressCode: "Código de Vestimenta",
    women: "Mujeres",
    womenAttire: "Vestido de cóctel o formal",
    men: "Hombres",
    menAttire: "Traje oscuro y corbata",
    preWeddingEvents: "EVENTOS PRE-BODA",
    comeSayHello: "Ven a Saludar...",
    preWeddingText: "Estas son reuniones informales, así que siéntete libre de unirte a nosotros si estás en la zona.",
    welcomeDrinks: "Bebidas de Bienvenida",
    welcomeDrinksDate: "Viernes, 11 de Septiembre de 2026",
    welcomeDrinksTime: "20:00",
    welcomeDrinksLocation: "Bodega García Hidalgo, Ronda",
    farewellBrunch: "Brunch de Despedida",
    farewellBrunchDate: "Domingo, 13 de Septiembre de 2026",
    farewellBrunchTime: "12:00",
    farewellBrunchLocation: "Parador de Ronda (terraza)",
    locationTransport: "Ubicación y Transporte",
    locationAddress: "Finca El Olivar, Camino de los Olivos s/n, 29400 Ronda, Málaga – España",
    googleMaps: "GOOGLE MAPS",
    fromMalaga: "Desde Málaga: ~1h 30min por A-357 y A-367",
    fromSeville: "Desde Sevilla: ~2h por A-376",
    fromMarbella: "Desde Marbella: ~1h por A-397",
    accommodation: "Alojamiento",
    accommodationText: "Finca El Olivar no ofrece alojamiento. Aquí hay algunas opciones recomendadas cerca.",
    visitWebsite: "Visitar Web",
    gallery: "Galería",
    gifts: "Regalos",
    giftsText: "Vuestra presencia es nuestro mayor regalo. Si deseáis darnos algo, aquí tenéis la información de nuestra cuenta bancaria:",
    rsvpTitle: "CONFIRMAR ASISTENCIA",
    rsvpText: "Haznos saber si puedes venir",
    attending: "¿Asistirás?",
    yesAttending: "Sí, estaré allí",
    noAttending: "Lamentablemente, no puedo ir",
    howManyGuests: "¿Cuántos invitados?",
    person: "Persona",
    mainContact: "(Contacto principal)",
    fullName: "Nombre completo",
    emailAddress: "Correo electrónico",
    dietaryRequirements: "Requisitos dietéticos",
    dietaryPlaceholder: "ej. vegetariano, alergias, etc.",
    childrenAttending: "¿Asistirán niños?",
    yes: "Sí",
    no: "No",
    message: "Mensaje para la pareja",
    messagePlaceholder: "¿Hay algo que te gustaría decirnos?",
    sendRSVP: "Enviar Confirmación",
    madeWithLove: "Hecho con amor por",
    theDigitalYes: "The Digital Yes",
  }
};

function App() {
  const [lang] = useState<'en' | 'es'>('en');
  const [showIntro, setShowIntro] = useState(true);
  const [introVideoEnded, setIntroVideoEnded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 });
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const t = content[lang];

  useEffect(() => {
    // Countdown timer
    const updateCountdown = () => {
      const weddingDate = new Date('2026-09-29T17:00:00');
      const now = new Date();
      const diff = weddingDate.getTime() - now.getTime();
      
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        setCountdown({ days, hours, minutes });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0 });
      }
    };

    updateCountdown(); // Call immediately on mount
    const timer = setInterval(updateCountdown, 60000);
    
    return () => clearInterval(timer);
  }, []);

  const [introStarted, setIntroStarted] = useState(false);

  const handleIntroClick = () => {
    if (!introStarted && videoRef.current) {
      setIntroStarted(true);
      videoRef.current.play();
      if (audioRef.current) {
        audioRef.current.play();
        setIsMuted(false);
      }
    }
  };

  const handleIntroVideoEnd = () => {
    setIntroVideoEnded(true);
    setTimeout(() => setShowIntro(false), 1000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Intro Animation */}
      {showIntro && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center bg-cream transition-opacity duration-1000 ${introVideoEnded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          onClick={handleIntroClick}
        >
          <div className="relative w-full h-full flex items-center justify-center cursor-pointer">
            <video
              ref={videoRef}
              src="/assets/intro-video.mp4"
              poster="/assets/intro-poster.jpg"
              muted
              playsInline
              onEnded={handleIntroVideoEnd}
              className="w-full h-full object-cover"
            />
            {/* {!introStarted && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="text-center text-white">
                  <p className="font-script text-3xl md:text-4xl mb-4">Tap to Open</p>
                  <div className="w-16 h-16 mx-auto border-2 border-white/60 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-2xl">👆</span>
                  </div>
                </div>
              </div>
            )} */}
          </div>
        </div>
      )}

      {/* Language Toggle */}
      <div className="fixed top-4 right-4 z-40">
        {/* <div className="bg-white/90 backdrop-blur-sm rounded-full p-1 shadow-elegant flex gap-1">
          <button
            onClick={() => setLang('en')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${lang === 'en' ? 'bg-gold text-white' : 'text-brown hover:bg-gold/10'}`}
          >
            EN
          </button>
          <button
            onClick={() => setLang('es')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${lang === 'es' ? 'bg-gold text-white' : 'text-brown hover:bg-gold/10'}`}
          >
            ES
          </button>
        </div> */}
      </div>

      {/* Sound Toggle */}
      <button
        onClick={() => {
          const next = !isMuted;
          setIsMuted(next);
          if (audioRef.current) audioRef.current.muted = next;
        }}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-elegant flex items-center justify-center text-brown hover:bg-gold hover:text-white transition-all"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>

      {/* The Digital Yes Logo */}
      <div className="fixed top-4 left-4 z-40">
        <img src="/assets/cupid-illustration.png" alt="The Digital Yes" className="w-16 h-auto" />
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video
          ref={heroVideoRef}
          src="/assets/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative z-10 text-center text-white px-4">
          <p className="font-serif text-sm md:text-base tracking-[0.3em] uppercase mb-6 animate-fade-in">
            {t.gettingMarried}
          </p>
          <h1 className="font-script text-6xl md:text-8xl lg:text-9xl mb-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Mohamed
          </h1>
          <p className="font-script text-4xl md:text-5xl mb-2 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            &
          </p>
          <h1 className="font-script text-6xl md:text-8xl lg:text-9xl mb-8 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            Heba
          </h1>
          
          <div className="diamond-separator my-8">
            <span className="text-2xl">✦</span>
          </div>
          
          <p className="font-serif text-xl md:text-2xl tracking-wider mb-8 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            {t.date}
          </p>
          
          {/* <button
            onClick={() => setShowRSVPDialog(true)}
            className="inline-block border-2 border-white/80 text-white px-10 py-3 rounded-full font-serif tracking-widest uppercase text-sm hover:bg-white hover:text-brown transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: '1.1s' }}
          >
            {t.rsvp}
          </button> */}
        </div>
        
        <button
          onClick={() => scrollToSection('countdown')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* Countdown Section */}
      <section id="countdown" className="py-20 px-4 bg-cream paper-texture">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-script text-5xl md:text-6xl text-gold-dark mb-4">{t.countdown}</h2>
          <p className="font-serif text-sm tracking-[0.2em] text-brown/60 uppercase mb-12">{t.until}</p>
          
          <div className="flex justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="font-script text-5xl md:text-7xl text-gold-dark mb-2">{countdown.days}</div>
              <div className="font-serif text-xs tracking-[0.2em] text-brown/60 uppercase">{t.days}</div>
            </div>
            <div className="text-center">
              <div className="font-script text-5xl md:text-7xl text-gold-dark mb-2">{countdown.hours}</div>
              <div className="font-serif text-xs tracking-[0.2em] text-brown/60 uppercase">{t.hours}</div>
            </div>
            <div className="text-center">
              <div className="font-script text-5xl md:text-7xl text-gold-dark mb-2">{countdown.minutes}</div>
              <div className="font-serif text-xs tracking-[0.2em] text-brown/60 uppercase">{t.minutes}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section id="welcome" className="py-20 px-4 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-script text-5xl md:text-6xl text-gold-dark mb-8">{t.welcome}</h2>
          <p className="font-body text-lg md:text-xl text-brown/80 leading-relaxed max-w-2xl mx-auto mb-12">
            {t.welcomeText}
          </p>
          
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            <div className="aspect-[3/4] bg-brown/10 rounded-lg overflow-hidden">
              <img src="/assets/venue-hedsor.png" alt="Couple" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[3/4] bg-brown/10 rounded-lg overflow-hidden">
              <img src="/assets/venue-hedsor-front.png" alt="Couple" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[3/4] bg-brown/10 rounded-lg overflow-hidden">
              <img src="/assets/intro-poster.jpg" alt="Couple" className="w-full h-full object-cover" />
            </div>
          </div> */}
          
          <div className="mt-12 flex justify-center">
            <img src="/assets/floral-vase.png" alt="Floral decoration" className="w-48 h-auto opacity-60" />
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section id="venue" className="py-20 px-4 bg-gold/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-script text-5xl md:text-6xl text-gold-dark mb-2">{t.venue}</h2>
            <p className="font-serif text-sm tracking-[0.2em] text-brown/60 uppercase">{t.whereWeCelebrate}</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="relative h-64 md:h-80">
              <img src="/assets/venue-hedsor-front.png" alt="Mountain Rose" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="p-8 md:p-12 text-center">
              <h3 className="font-script text-4xl text-gold-dark mb-4">{t.venueName}</h3>
              <div className="flex items-center justify-center gap-4 mb-4 text-brown">
                <span className="font-serif">{t.venueDate}</span>
                <span className="text-gold">|</span>
                <span className="font-serif">{t.venueTime}</span>
              </div>
              <p className="font-body text-brown/70 mb-2">{t.venueAddress}</p>
              <p className="font-body text-brown/70 mb-6">{t.venueCity}</p>
              
              <a
                href="https://maps.app.goo.gl/KCHR3mQ7qexVWYw9A?g_st=iw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-dark transition-colors"
              >
                <MapPin size={18} />
                <span className="font-medium">{t.openInMaps}</span>
                <ExternalLink size={14} />
              </a>
            </div>
            
            <div className="h-64 bg-brown/5">
              <iframe
                src="https://www.google.com/maps?q=%D9%85%D8%A7%D9%88%D9%86%D8%AA%D9%86+%D8%B1%D9%88%D8%B2%D8%8C+%D9%82%D8%B3%D9%85+%D8%A3%D9%88%D9%84+6+%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1%D8%8C+%D9%82%D8%B3%D9%85+%D8%AB%D8%A7%D9%84%D8%AB+6+%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1%D8%8C+%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9+%D8%A7%D9%84%D8%AC%D9%8A%D8%B2%D8%A9&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[20%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Day Programme Section */}
      <section id="programme" className="py-20 px-4 bg-cream paper-texture">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-script text-5xl md:text-6xl text-gold-dark mb-2">{t.dayProgramme}</h2>
            <p className="font-serif text-lg text-brown/60">{t.date}</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/30 -translate-x-1/2" />
            
            {[
              { time: '17:00', event: t.arrival },
              { time: '17:30', event: t.ceremony },
              { time: '18:30', event: t.cocktails },
              { time: '19:30', event: t.dinner },
              { time: '20:30', event: t.cuttingCake },
              { time: '21:00', event: t.finish },
            ].map((item, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <span className="font-script text-3xl text-gold-dark">{item.time}</span>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-gold rounded-full border-4 border-cream" />
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12 text-left' : 'pr-12 text-right'}`}>
                  <span className="font-serif text-sm tracking-[0.15em] text-brown/70 uppercase">{item.event}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* <div className="mt-12 flex justify-center">
            <img src="/assets/champagne-tower.png" alt="Champagne tower" className="w-40 h-auto opacity-50" />
          </div> */}
        </div>
      </section>

      {/* Dress Code Section */}
      {/* <section id="dresscode" className="py-20 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden">
            <img src="/assets/venue-hedsor-front.png" alt="Venue" className="w-full h-64 md:h-80 object-cover" />
            <div className="absolute inset-0 bg-black/40" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 md:p-12 text-center max-w-md mx-4 shadow-card">
                <h2 className="font-script text-4xl md:text-5xl text-gold-dark mb-8">{t.dressCode}</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-script text-2xl text-brown mb-2">{t.women}</h3>
                    <p className="font-body text-brown/70">{t.womenAttire}</p>
                  </div>
                  
                  <div className="section-divider my-4">
                    <span className="text-gold/50">✦</span>
                  </div>
                  
                  <div>
                    <h3 className="font-script text-2xl text-brown mb-2">{t.men}</h3>
                    <p className="font-body text-brown/70">{t.menAttire}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <img src="/assets/bow-illustration.png" alt="Bow decoration" className="w-32 h-auto opacity-50" />
          </div>
        </div>
      </section> */}

      {/* Pre-Wedding Events Section */}
      {/* <section id="preevents" className="py-20 px-4 bg-gold/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-serif text-xs tracking-[0.3em] text-brown/60 uppercase mb-4">{t.preWeddingEvents}</p>
            <h2 className="font-script text-5xl md:text-6xl text-gold-dark mb-4">{t.comeSayHello}</h2>
            <p className="font-body text-brown/70 max-w-xl mx-auto">{t.preWeddingText}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-8 shadow-elegant text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gold/10 rounded-full flex items-center justify-center">
                <span className="text-3xl">🥂</span>
              </div>
              <h3 className="font-script text-3xl text-gold-dark mb-2">{t.welcomeDrinks}</h3>
              <p className="font-serif text-brown mb-1">{t.welcomeDrinksDate}</p>
              <p className="font-body text-gold-dark mb-2">{t.welcomeDrinksTime}</p>
              <p className="font-body text-sm text-brown/60">{t.welcomeDrinksLocation}</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-elegant text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gold/10 rounded-full flex items-center justify-center">
                <span className="text-3xl">☕</span>
              </div>
              <h3 className="font-script text-3xl text-gold-dark mb-2">{t.farewellBrunch}</h3>
              <p className="font-serif text-brown mb-1">{t.farewellBrunchDate}</p>
              <p className="font-body text-gold-dark mb-2">{t.farewellBrunchTime}</p>
              <p className="font-body text-sm text-brown/60">{t.farewellBrunchLocation}</p>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <img src="/assets/cupid-illustration.png" alt="Cupid" className="w-24 h-auto opacity-40" />
          </div>
        </div>
      </section> */}

      {/* Location & Transportation Section */}
      {/* <section id="location" className="py-20 px-4 bg-cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-script text-5xl md:text-6xl text-gold-dark mb-4">{t.locationTransport}</h2>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-elegant text-center mb-8">
            <MapPin className="w-8 h-8 text-gold mx-auto mb-4" />
            <p className="font-body text-lg text-brown mb-4">{t.locationAddress}</p>
            <a
              href="https://maps.google.com/?q=Finca+El+Olivar+Ronda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-dark transition-colors font-medium"
            >
              {t.googleMaps}
              <ExternalLink size={14} />
            </a>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-cream-dark/50 rounded-lg p-4">
              <span className="text-2xl">🚗</span>
              <p className="font-body text-brown/80">{t.fromMalaga}</p>
            </div>
            <div className="flex items-start gap-4 bg-cream-dark/50 rounded-lg p-4">
              <span className="text-2xl">🚗</span>
              <p className="font-body text-brown/80">{t.fromSeville}</p>
            </div>
            <div className="flex items-start gap-4 bg-cream-dark/50 rounded-lg p-4">
              <span className="text-2xl">🚗</span>
              <p className="font-body text-brown/80">{t.fromMarbella}</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Accommodation Section */}
      {/* <section id="accommodation" className="py-20 px-4 bg-cream paper-texture">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-script text-5xl md:text-6xl text-gold-dark mb-4">{t.accommodation}</h2>
            <p className="font-body text-brown/70 max-w-xl mx-auto">{t.accommodationText}</p>
          </div>
          
          <div className="space-y-4">
            {[
              { name: 'PARADOR DE RONDA', location: 'Ronda', distance: '2 km de la finca', phone: '+34 952 877 500', email: 'ronda@parador.es' },
              { name: 'HOTEL CATALONIA RONDA', location: 'Ronda', distance: '1.5 km', phone: '+34 952 872 315', email: 'ronda@hoteles-catalonia.es', promo: 'Promo Code: BODIA2026' },
              { name: 'HOTEL MONTELIRIO', location: 'Ronda', distance: '', phone: '+34 952 873 855', email: 'reservas@hotelmontelirio.com', note: 'Boutique | Sobre el Tajo' },
            ].map((hotel, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-elegant">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-lg tracking-wider text-brown mb-1">{hotel.name}</h3>
                    <p className="font-body text-sm text-brown/60">{hotel.location} {hotel.distance && `• ${hotel.distance}`}</p>
                    {hotel.note && <p className="font-body text-sm text-gold-dark mt-1">{hotel.note}</p>}
                    {hotel.promo && <p className="font-body text-sm text-gold-dark mt-1">{hotel.promo}</p>}
                  </div>
                  <div className="text-left md:text-right">
                    <p className="font-body text-sm text-brown/70">{hotel.phone}</p>
                    <a href={`mailto:${hotel.email}`} className="font-body text-sm text-gold hover:text-gold-dark transition-colors">
                      {t.visitWebsite}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Gallery Section */}
      {/* <section id="gallery" className="py-20 px-4 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-script text-5xl md:text-6xl text-gold-dark mb-4">{t.gallery}</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src="/assets/venue-hedsor.png" alt="Wedding" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src="/assets/venue-hedsor-front.png" alt="Wedding" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src="/assets/intro-poster.jpg" alt="Wedding" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden col-span-2 md:col-span-1">
              <img src="/assets/floral-vase.png" alt="Wedding" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src="/assets/champagne-tower.png" alt="Wedding" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src="/assets/bow-illustration.png" alt="Wedding" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section> */}

      {/* Gifts Section */}
      {/* <section id="gifts" className="py-20 px-4 bg-gold/10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-card text-center">
            <h2 className="font-script text-5xl md:text-6xl text-gold-dark mb-6">{t.gifts}</h2>
            <p className="font-body text-lg text-brown/80 mb-8">{t.giftsText}</p>
            
            <div className="space-y-6 text-left max-w-md mx-auto">
              <div className="bg-cream rounded-lg p-6">
                <h3 className="font-serif text-sm tracking-wider text-brown mb-2">CAIXABANK – MOHAMED</h3>
                <p className="font-body text-sm text-brown/60 mb-1">IBAN: ES00 0000 0000 0000 0000 0000</p>
                <p className="font-body text-sm text-brown/60">BIC/SWIFT: XXXXXXXXXXX</p>
              </div>
              
              <div className="bg-cream rounded-lg p-6">
                <h3 className="font-serif text-sm tracking-wider text-brown mb-2">BANCO SANTANDER – SHROUK</h3>
                <p className="font-body text-sm text-brown/60 mb-1">IBAN: ES00 0000 0000 0000 0000 0000</p>
                <p className="font-body text-sm text-brown/60">BIC/SWIFT: XXXXXXXXXXX</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* RSVP Section */}
      {/* <section id="rsvp" className="py-20 px-4 bg-cream">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-script text-5xl md:text-6xl text-gold-dark mb-4">{t.rsvpTitle}</h2>
            <p className="font-body text-brown/70">{t.rsvpText}</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-card">
            <form className="space-y-6">
              <div>
                <Label className="font-body text-brown mb-3 block">{t.attending} *</Label>
                <RadioGroup value={attending} onValueChange={setAttending} className="flex flex-col gap-3">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="yes" id="yes" className="border-gold text-gold" />
                    <Label htmlFor="yes" className="font-body text-brown cursor-pointer">{t.yesAttending}</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="no" id="no" className="border-gold text-gold" />
                    <Label htmlFor="no" className="font-body text-brown cursor-pointer">{t.noAttending}</Label>
                  </div>
                </RadioGroup>
              </div>
              
              {attending === 'yes' && (
                <>
                  <div>
                    <Label className="font-body text-brown mb-3 block">{t.howManyGuests}</Label>
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                        className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-brown hover:bg-gold/10 transition-colors"
                      >
                        <Minus size={18} />
                      </button>
                      <span className="font-script text-3xl text-gold-dark w-8 text-center">{guestCount}</span>
                      <button
                        type="button"
                        onClick={() => setGuestCount(guestCount + 1)}
                        className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-brown hover:bg-gold/10 transition-colors"
                      >
                        <Plus size={18} />
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <Label className="font-body text-brown mb-3 block">{t.person} 1 {t.mainContact} *</Label>
                    <input type="text" placeholder={t.fullName} className="input-elegant w-full mb-3" />
                    <input type="email" placeholder={t.emailAddress} className="input-elegant w-full" />
                  </div>
                  
                  <div>
                    <Label className="font-body text-brown mb-3 block">{t.dietaryRequirements}</Label>
                    <input type="text" placeholder={t.dietaryPlaceholder} className="input-elegant w-full" />
                  </div>
                  
                  <div>
                    <Label className="font-body text-brown mb-3 block">{t.childrenAttending}</Label>
                    <RadioGroup value={children} onValueChange={setChildren} className="flex gap-6">
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="yes" id="children-yes" className="border-gold text-gold" />
                        <Label htmlFor="children-yes" className="font-body text-brown cursor-pointer">{t.yes}</Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="no" id="children-no" className="border-gold text-gold" />
                        <Label htmlFor="children-no" className="font-body text-brown cursor-pointer">{t.no}</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </>
              )}
              
              <div>
                <Label className="font-body text-brown mb-3 block">{t.message}</Label>
                <textarea placeholder={t.messagePlaceholder} rows={4} className="input-elegant w-full resize-none" />
              </div>
              
              <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2">
                <Send size={18} />
                {t.sendRSVP}
              </button>
            </form>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="py-16 px-4 bg-cream paper-texture">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-8">
            <img src="/assets/bow-illustration.png" alt="Rings" className="w-24 h-auto mx-auto opacity-50 mb-6" />
            <h2 className="font-script text-5xl text-gold-dark mb-2">Mohamed</h2>
            <p className="font-script text-3xl text-gold-dark mb-2">&</p>
            <h2 className="font-script text-5xl text-gold-dark mb-4">Heba</h2>
            <p className="font-serif text-lg text-gold">{t.date}</p>
          </div>
          
          <div className="section-divider">
            <span className="text-gold/50">✦</span>
          </div>
          
          {/* <p className="font-body text-sm text-brown/60">
            {t.madeWithLove} <a href="https://thedigitalyes.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark transition-colors underline">{t.theDigitalYes}</a>
          </p> */}
        </div>
      </footer>

      {/* Background music - starts on intro click, loops across the page */}
      <audio ref={audioRef} src="/assets/wedding-background-music.mp3" loop />

      {/* RSVP Dialog */}
      {/* <Dialog open={showRSVPDialog} onOpenChange={setShowRSVPDialog}>
        <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto bg-cream">
          <DialogHeader>
            <DialogTitle className="font-script text-4xl text-gold-dark text-center">{t.rsvpTitle}</DialogTitle>
          </DialogHeader>
          <p className="font-body text-brown/70 text-center mb-6">{t.rsvpText}</p>
          
          <form className="space-y-4">
            <div>
              <Label className="font-body text-brown mb-2 block text-sm">{t.attending} *</Label>
              <RadioGroup value={attending} onValueChange={setAttending} className="flex flex-col gap-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="dialog-yes" className="border-gold text-gold" />
                  <Label htmlFor="dialog-yes" className="font-body text-brown text-sm cursor-pointer">{t.yesAttending}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="dialog-no" className="border-gold text-gold" />
                  <Label htmlFor="dialog-no" className="font-body text-brown text-sm cursor-pointer">{t.noAttending}</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div>
              <Label className="font-body text-brown mb-2 block text-sm">{t.fullName}</Label>
              <input type="text" className="input-elegant w-full" />
            </div>
            
            <div>
              <Label className="font-body text-brown mb-2 block text-sm">{t.emailAddress}</Label>
              <input type="email" className="input-elegant w-full" />
            </div>
            
            <button type="submit" className="btn-gold w-full" onClick={() => setShowRSVPDialog(false)}>
              {t.sendRSVP}
            </button>
          </form>
        </DialogContent>
      </Dialog> */}
    </div>
  );
}

export default App;
