const Admission = () => {
    return (
        <>
            <div className="bg-blue-300 text-white flex flex-col gap-10 py-3 items-center">
                <h1 className="text-5xl font-serif">Admissions</h1>
                <p className="text-center text-xl mx-[15vw]">Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se fait par test de niveau :
une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D. </p>
                <div className="grid grid-cols-3 mx-15 right-0">
                    <div className="bg-amber-200 p-8">
                        <h1 className="text-white text-5xl font-bold mb-5">01</h1>
                        <div className="flex flex-row gap-2 items-center">
                            <p className="text-black">Dépôt de dossiers : pour les bacheliers de toutes séries sans limite d’âge</p>
                            <div className="text-5xl font-bold">
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                    <div className="bg-amber-300 p-8">
                        <h1 className="text-white text-5xl font-bold mb-5">02</h1>
                        <div className="flex flex-row gap-2 items-center">
                            <p className="text-black">Test de niveau : composé d’une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D</p>
                            <div className="text-5xl font-bold">
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                    <div className="bg-amber-400 p-8">
                        <h1 className="text-white text-5xl font-bold mb-5">03</h1>
                        <p className="text-black">Inscription définitive (si test réussi)</p>
                    </div>
                </div>
                <div className="flex flex-row justify-between gap-5 text-white text-xl font-medium pb-10">
                    <button className="border-white border-4 rounded-sm p-3 hover:bg-[var(--primary-color)] hover:border-[var(--primary-color)]">Inscrivez-vous</button>
                    <button className="bg-[var(--primary-color)] border-[var(--primary-color)] border-4 rounded-sm p-3 hover:border-white hover:bg-white hover:text-[var(--primary-color)]">Résultat des concours</button>
                </div>
            </div>
        </>
    )
}

export default Admission;