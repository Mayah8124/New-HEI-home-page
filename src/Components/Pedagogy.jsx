import React from 'react'

const Pedagogy = () => {
  return (
    <div className='flex flex-col bg-white'>
        <div className='flex flex-col justify-center lg:flex-row gap-8 lg:gap-15 px-4 md:px-20 lg:px-95 py-10 lg:py-20'>
            <img src="https://www.hei.school/wp-content/uploads/2024/11/IMG-03-e1720537524581-1024x950-1.webp"
             alt="photo d' etudiant chez hei" className='w-full lg:w-120 h-auto lg:h-100 object-cover'/>
            <div className='flex flex-col gap-6 lg:gap-10'>
                <h1 className='text-[#001948] text-3xl md:text-4xl lg:text-5xl pt-0 lg:pt-20 border-l-indigo-950'>
                    Le programme pédagogique
                </h1>
                <p className='text-[#001948] text-base md:text-lg'>
                    Suivant le système LMD, jusqu'au Master, notre formation repose sur un programme pédagogique conçu en adéquation avec les attentes du marché. La formation est sanctionnée par un diplôme de Licence et de Master en Informatique reconnu par le MESupRes de Madagascar.
                </p>
                <button className='bg-white text-[#022361] border-2 border-[#022361] px-6 py-3 rounded-lg font-medium transition-colors duration-300 hover:bg-[#022361] hover:text-white cursor-pointer w-full md:w-[40vw] lg:w-[10vw]'>
                    Notre programme
                </button>
            </div> 
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 px-4 md:px-0">
            <div className="bg-[#eedcaa] p-4 md:p-8 rounded-xl shadow-md text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#DFA408] mb-2 md:mb-4">25%</div>
              <p className="text-black text-base md:text-xl">Taux de réussite aux examens certifiants</p>
            </div>

            <div className="bg-[#eedcaa] p-4 md:p-8 rounded-xl shadow-md text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#DFA408] mb-2 md:mb-4">25%</div>
              <p className="text-black text-base md:text-xl">Étudiants en emploi dans les 3 mois après diplôme</p>
            </div>

            <div className="bg-[#eedcaa] p-4 md:p-8 rounded-xl shadow-md text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#DFA408] mb-2 md:mb-4">25%</div>
              <p className="text-black text-base md:text-xl">Satisfaction globale des étudiants</p>
            </div>

            <div className="bg-[#eedcaa] p-4 md:p-8 rounded-xl shadow-md text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#DFA408] mb-2 md:mb-4">25%</div>
              <p className="text-black text-base md:text-xl">Programmes alignés sur les besoins du marché</p>
            </div>
        </div>
        <div className='flex flex-col justify-center md:flex-row px-4 md:px-20 lg:px-95 py-10 lg:py-20 gap-4 md:gap-5'>
            <img 
            src="https://www.hei.school/wp-content/uploads/2025/05/Mask-group-1.webp"
            alt="photo chez HEI" 
            className='w-[20vw] h-auto object-cover'/>
            <img 
            src="https://www.hei.school/wp-content/uploads/2025/05/Mask-group-2.webp" 
            alt="photo chez HEI"
            className='w-[20vw] h-auto object-cover'/>
            <img 
            src="https://www.hei.school/wp-content/uploads/2025/05/Mask-group-3.webp" 
            alt="photo chez HEI" 
            className='w-[20vw] h-auto object-cover'/>
        </div>
    </div>
  )
}

export default Pedagogy;