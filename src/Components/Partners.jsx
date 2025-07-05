import React from 'react'

const Partners = () => {
  return (
    <div className='flex flex-col items-center bg-white px-4 md:px-20 lg:px-80 gap-8 lg:gap-12'>
        <h1 className='text-[#001948] text-3xl md:text-4xl lg:text-5xl pt-10 lg:pt-20'>
            Nos Partenaires
        </h1>
        <p className='text-[#001946] text-[14px] md:text-[16px] text-center max-w-full md:max-w-2xl lg:max-w-4xl'>
            L’employabilité de nos étudiants se base sur la pertinence  de notre programme pédagogique et de la composition de notre corps enseignant mais aussi du soutien et la collaboration des entreprises partenaires
        </p>
        
        <div className='flex flex-wrap justify-center gap-4 md:gap-8 w-full max-w-screen-lg'>
            <div className='flex items-center justify-center p-2 md:p-4 w-28 h-28 md:w-40 md:h-40'>
              <img 
                src="https://www.hei.school/wp-content/uploads/2024/05/LOGO-NEXTA.webp" 
                alt="Logo Partenaire 1" 
                className='max-h-full max-w-full object-contain'
              />
            </div>

            <div className='flex items-center justify-center p-2 md:p-4 w-28 h-28 md:w-40 md:h-40'>
              <img 
                src="https://www.hei.school/wp-content/uploads/2024/05/PN_Logo_baseline_color_ENG.png" 
                alt="Logo Partenaire 2" 
                className='max-h-full max-w-full object-contain'
              />
            </div>

            <div className='flex items-center justify-center p-2 md:p-4 w-28 h-28 md:w-40 md:h-40'>
              <img 
                src="https://www.hei.school/wp-content/uploads/2024/05/Yooz-2023-Logo-2.webp" 
                alt="Logo Partenaire 3" 
                className='max-h-full max-w-full object-contain'
              />
            </div>

            <div className='flex items-center justify-center p-2 md:p-4 w-28 h-28 md:w-40 md:h-40'>
              <img 
                src="https://www.hei.school/wp-content/uploads/2024/05/logo-etech.png" 
                alt="Logo Partenaire 4" 
                className='max-h-full max-w-full object-contain'
              />
            </div>

            <div className='flex items-center justify-center p-2 md:p-4 w-28 h-28 md:w-40 md:h-40'>
              <img 
                src="https://www.hei.school/wp-content/uploads/2024/09/logo_emit.png" 
                alt="Logo Partenaire 4" 
                className='max-h-full max-w-full object-contain'
              />
            </div>

            <div className='flex items-center justify-center p-2 md:p-4 w-28 h-28 md:w-40 md:h-40'>
              <img 
                src="https://www.hei.school/wp-content/uploads/2024/06/Logo-Numer-vf.png" 
                alt="Logo Partenaire 1" 
                className='max-h-full max-w-full object-contain'
              />
            </div>

            <div className='flex items-center justify-center p-2 md:p-4 w-28 h-28 md:w-40 md:h-40'>
              <img 
                src="https://www.hei.school/wp-content/uploads/2024/05/bp-logo-full-1024x331.webp" 
                alt="Logo Partenaire 2" 
                className='max-h-full max-w-full object-contain'
              />
            </div>

            <div className='flex items-center justify-center p-2 md:p-4 w-28 h-28 md:w-40 md:h-40'>
              <img 
                src="https://www.hei.school/wp-content/uploads/2024/05/YIF_LOGO_512x512_BL_on_WH-1.webp" 
                alt="Logo Partenaire 3" 
                className='max-h-full max-w-full object-contain'
              />
            </div>

            <div className='flex items-center justify-center p-2 md:p-4 w-28 h-28 md:w-40 md:h-40'>
              <img 
                src="https://www.hei.school/wp-content/uploads/2024/05/logo-kante-company-1.png" 
                alt="Logo Partenaire 4" 
                className='max-h-full max-w-full object-contain'
              />
            </div>
        </div>
    </div>
  )
}

export default Partners