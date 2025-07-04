const About = () => {
    return (
        <>
            <div className="grid grid-cols-2 mt-2 mx-8 items-center">
                <img src="../src/assets/images/A-propos-left-1.webp" alt="hei-happy-students" className="h-[95vh]"/>
                <div className="font-[var(--hei-policy)] flex flex-col gap-15 mr-25">
                    <h1 className="text-[var(--primary-color)] text-5xl font-bold">A propos de nous</h1>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row gap-3 items-center text-[var(--secondary-color)]">
                            <div className="text-5xl">
                                <i class="fa-solid fa-graduation-cap"></i>
                            </div>
                            <h1 className="text-[var(--primary-color)] text-2xl font-bold">+3 ans</h1>
                        </div>
                        <p className="text-l font-[var(--hei-policy)]">Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l’informatique. Nous sommes un groupe d’experts, de professionnels et des passionnés de l’informatique de Madagascar et du monde entier.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row gap-3 items-center text-[var(--secondary-color)]">
                            <div className="text-5xl">
                                <i class="fa-solid fa-user-group"></i>
                            </div>
                            <h1 className="text-[var(--primary-color)] text-2xl font-bold">+250 étudiants</h1>
                        </div>
                        <p className="text-l font-[var(--hei-policy)]">Plus de 250 étudiants et plus d’une dizaine d’entreprises ont déjà fait confiance à notre formation habilitée par l’État malgache. Avec eux tous, nous sommes fiers de pouvoir parler de la “grande famille HEI”.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row gap-3 items-center text-[var(--secondary-color)]">
                            <div className="text-5xl">
                                <i class="fa-solid fa-medal"></i>
                            </div>
                            <h1 className="text-[var(--primary-color)] text-2xl font-bold">Notre mission</h1>
                        </div>
                        <p className="text-l font-[var(--hei-policy)]">Notre mission est d’amener des jeunes malgaches sur des domaines porteurs comme l’intelligence artificielle, la cybersécurité ou la programmation afin de favoriser leur employabilité et le développement de Madagascar.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;