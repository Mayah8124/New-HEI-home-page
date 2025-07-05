import React from 'react'

const Domaines = () => {
  return (
    <div className='flex flex-col bg-[#f1f1f1] min-h-[30vh] items-center py-10'>
      <h1 className='text-6xl py-8 pt-10'>
        Domaines
      </h1>
      <p className='text-xl mb-12'>
        Au cours de vos trois ans de formation, naviguez entre les domaines les plus porteurs du numérique du présent et de l'avenir :
      </p>

      <div className='flex flex-wrap justify-center gap-8 w-full px-4'>
        {/* Carte 1 */}
        <div className='bg-white rounded-lg shadow-md flex flex-col items-center h-[480px] w-[360px] overflow-hidden'>
          <img 
            src="https://www.hei.school/wp-content/uploads/2024/05/Cloud-et-cybersecurite_Plan-de-travail-1-150x150.png" 
            alt="Cybersécurité" 
            className='w-[132px] h-[140px] object-cover mt-6'
          />
          <div className='p-6 flex flex-col items-center'>
            <h3 className='text-2xl text-[#DFA408] font-bold mb-2 text-center'>Cloud et cybersécurité</h3>
            <p className='text-gray-600 py-4 text-[16px] text-center'>
              Maîtrisez les engrenages des outils en ligne interconnectés sur les nuages (comme sur AWS). Ou encore, devenez maître de la sécurisation des données en ligne ou des programmes et applications contre les cybermenaces. Chez HEI, vous allez vous former dans le domaine du cloud et de la cybersécurité.
            </p>
          </div>
        </div>

        {/* Carte 2 */}
        <div className='bg-white rounded-lg shadow-md flex flex-col items-center h-[480px] w-[360px] overflow-hidden'>
          <img 
            src="https://www.hei.school/wp-content/uploads/2024/05/Intelligence-artificielle_Plan-de-travail-1-150x150.png" 
            alt="Intelligence Artificielle" 
            className='w-[132px] h-[140px] object-cover mt-6'
          />
          <div className='p-6 flex flex-col items-center'>
            <h3 className='text-2xl text-[#DFA408] font-bold mb-2 text-center'>Intelligence Artificielle</h3>
            <p className='text-gray-600 py-4 text-[16px] text-center'>
              Le monde de la reconnaissance faciale ou la détection d'obstacles par les voitures semi-autonomes vous fascinent ? Ce n'est pas sorcier, cela s'apprend. Apprenez les bases de l'intelligence artificielle lors de vos cours chez HEI.
            </p>
          </div>
        </div>

        {/* Carte 3 */}
        <div className='bg-white rounded-lg shadow-md flex flex-col items-center h-[480px] w-[360px] overflow-hidden'>
          <img 
            src="https://www.hei.school/wp-content/uploads/2024/05/Ingenierie-logicielle_Plan-de-travail-1-1-150x150.png" 
            alt="Ingénierie logicielle" 
            className='w-[132px] h-[140px] object-cover mt-6'
          />
          <div className='p-6 flex flex-col items-center'>
            <h3 className='text-2xl text-[#DFA408] font-bold mb-2 text-center'>Ingénierie logicielle</h3>
            <p className='text-gray-600 py-4 text-[16px] text-center'>
              Apprenez les principes de la conception ou le développement de programmes et d'applications web et mobile et explorez le monde fascinant des "codes". A la fin de votre formation, vous serez aptes à proposer des solutions pratiques, créatives et innovantes à des particuliers ou des entreprises pour leurs besoins numériques.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Domaines