const Footer = () => {
    return (
        <>
            <div className="bg-[var(--primary-color)] text-white">
                <img src="../src/assets/images/hei-logo.png" alt="hei-logo" className="h-[15vh] px-10" />
                <div className="flex flex-row justify-between px-10 py-10 text-[18px]">
                    <div className="flex flex-col gap-3">
                        <p>Formation habilitée par l’Etat</p>
                        <p>suivant le système LMD</p>
                        <p>Habilitation MESupRes</p>
                        <p>n°31309/2023</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-2xl font-semibold">Adresse</h1>
                        <p>II J 161 R Ambodivoanjo</p>
                        <p>Ivandry Antananarivo</p>
                        <p>101, Madagascar</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-2xl font-semibold">Navigation</h1>
                        <ul className="flex flex-col gap-3">
                            <li className="text-[var(--secondary-color)] hover:text-[var(--secondary-color)]">Accueil</li>
                            <li className="text-white hover:text-[var(--secondary-color)]">Actualités</li>
                            <li className="text-white hover:text-[var(--secondary-color)]">Bourse d’études</li>
                            <li className="text-white hover:text-[var(--secondary-color)]">Inscription</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-2xl font-semibold">Médias sociaux</h1>
                        <div className="flex flex-row justify-between text-4xl text-[var(--secondary-color)]">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-invision"></i>
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 text-gray-500 text-center">
                    <p>© HEI Madagascar</p>
                </div>
            </div>
        </>
    )
}

export default Footer;