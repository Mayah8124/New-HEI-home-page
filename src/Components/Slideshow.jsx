import React, { useState, useEffect } from 'react';

const Slideshow = () => {
  const slides = [
    {
      id: 1,
      image: "https://hei.school/wp-content/uploads/2024/09/hei-banner-1.webp",
      title: "Haute École d'Informatique",
      description: "Une infrastructure de qualité pour votre réussite"
    },
    {
      id: 2,
      image: "https://hei.school/wp-content/uploads/2024/09/hei-banner-2.webp",
      title: "Haute École d'Informatique",
      description: "Un programme adapté aux besoins du marché"
    },
    {
      id: 3,
      image: "https://hei.school/wp-content/uploads/2024/09/hei-banner-3.webp",
      title: "Haute École d'Informatique",
      description: "Des laboratoires équipés des dernières technologies"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  const goToSlide = (newIndex) => {
    if (newIndex > currentIndex) {
      setAnimationClass('animate-[slideInRight_0.5s_ease-in-out]');
    } else if (newIndex < currentIndex) {
      setAnimationClass('animate-[slideInLeft_0.5s_ease-in-out]');
    }
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    if (currentIndex === slides.length - 1) {
      goToSlide(0);
    } else {
      goToSlide(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      goToSlide(slides.length - 1);
    } else {
      goToSlide(currentIndex - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[95vh] min-h-[500px] max-h-[930px] overflow-hidden mb-10">
      <div className={`absolute inset-0 w-full h-full bg-cover bg-center ${animationClass}`}
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4 gap-8 sm:gap-10 md:gap-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            {slides[currentIndex].title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-2xl">
            {slides[currentIndex].description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 md:gap-8">
            <button className="bg-white text-gray-800 px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-lg cursor-pointer hover:bg-gray-100 transition text-sm sm:text-base">
              Inscrivez-vous ici
            </button>
            <button className="bg-[#DFA408] text-white px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-lg cursor-pointer hover:bg-amber-600 transition text-sm sm:text-base">
              Emploi du temps
            </button>
            <button className="bg-[#001948] text-white px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-lg cursor-pointer hover:bg-[#2c3950] transition text-sm sm:text-base">
              Programme pédagogique
            </button>
          </div>
          <p className="pt-8 sm:pt-10 md:pt-12 text-sm sm:text-base">
            Habilitation MESupRES, suivant l'arrêté n°31309/2023
          </p>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 sm:p-3 rounded-full hover:bg-white transition z-20"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 sm:p-3 rounded-full hover:bg-white transition z-20"
      >
        ▶
      </button>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              currentIndex === index ? 'bg-white sm:w-6' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;