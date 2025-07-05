import React, { useState, useEffect } from 'react';

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const teamMembers = [
    {
      id: 1,
      photo: "https://www.hei.school/wp-content/uploads/2022/01/97-portraits-97_edited-e1716502895676.jpg",
      name: "Dr Lou Maurica",
      position: "Docteur-Ingénieur en Informatique | Fondateur et Directeur pédagogique de HEI"
    },
    // ... autres membres
  ];

  const getVisibleCards = () => {
    const visibleCount = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    const cards = [];
    for (let i = 0; i < visibleCount; i++) {
      const effectiveIndex = (currentIndex + i) % teamMembers.length;
      cards.push(teamMembers[effectiveIndex]);
    }
    return { cards, visibleCount };
  };

  const [visibleData, setVisibleData] = useState(getVisibleCards());

  useEffect(() => {
    const handleResize = () => {
      setVisibleData(getVisibleCards());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % teamMembers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [teamMembers.length]);

  return (
    <div className='bg-[#6586c7] min-h-[30vh] flex flex-col justify-center items-center text-white py-12 px-4 md:py-16 md:px-8 mt-10'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-center'>
        L'équipe pédagogique
      </h1>
      
      <p className='text-base md:text-lg lg:text-xl max-w-4xl md:max-w-5xl text-center leading-relaxed mb-8 md:mb-12'>
        Notre équipe pédagogique se compose d'experts nationaux et internationaux...
      </p>

      <div className="w-full max-w-6xl mt-8 md:mt-12 overflow-hidden px-2">
        <div className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * (100/visibleData.visibleCount)}%)` }}>
          {visibleData.cards.map((member, idx) => (
            <div key={`${member.id}-${idx}`} className={`flex-shrink-0 p-2 ${window.innerWidth < 768 ? 'w-full' : window.innerWidth < 1024 ? 'w-1/2' : 'w-1/3'}`}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <img 
                  src={member.photo} 
                  alt={member.name}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover object-top"
                />
                <div className="p-4 text-center">
                  <h3 className="font-bold text-base sm:text-lg md:text-xl text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 mt-1 text-sm sm:text-base">
                    {member.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-4">
        <button 
            onClick={() => setCurrentIndex(i => Math.max(0, i - 1))} 
            className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition"
        >
            ◀
        </button>
        <button 
            onClick={() => setCurrentIndex(i => (i + 1) % teamMembers.length)}
            className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition"
        >
            ▶
        </button>
      </div>
    </div>
  );
};

export default TeamSection;