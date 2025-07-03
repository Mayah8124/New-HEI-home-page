const About = () => {
    return (
        <>
            <div className="grid grid-cols-2 mt-2">
                <img src="../src/assets/images/A-propos-left-1.webp" alt="hei-happy-students" className="h-[90vh]"/>
                <div>
                    <h1></h1>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row gap-3 items-center text-[var(--secondary-color)]">
                            <div className="text-5xl">
                                <i class="fa-solid fa-graduation-cap"></i>
                            </div>
                            <h1 className="text-[var(--primary-color)] text-2xl font-bold">+3 ans</h1>
                        </div>
                        <p className="text-l mr-3 font-[var(--hei-policy)]">Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l’informatique. Nous sommes un groupe d’experts, de professionnels et des passionnés de l’informatique de Madagascar et du monde entier.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row gap-3 items-center text-[var(--secondary-color)]">
                            <div className="text-5xl">
                                <i class="fa-solid fa-user-group"></i>
                            </div>
                            <h1></h1>
                        </div>
                        <p></p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row gap-3 items-center text-[var(--secondary-color)]">
                            <div className="text-5xl">
                                <i class="fa-solid fa-medal"></i>
                            </div>
                            <h1></h1>
                        </div>
                        <p></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;