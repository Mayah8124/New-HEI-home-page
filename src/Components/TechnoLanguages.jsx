const TechnoLanguages = () => {
    return(
        <>
            <div className="flex flex-col gap-15 py-15 text-center bg-gray-100">
                <h1 className="text-5xl font-semibold font-serif text-[var(--primary-color)]">Les technos et langages utilisées</h1>
                <p className="text-xl text-[var(--primary-color)] mx-13">Nos étudiants sont formés à l’utilisation et à la maîtrise des langages de programmation Java et JavaScript. Ces deux langages occupent une place de choix dans le domaine du développement logiciel et du web, offrant une polyvalence et une robustesse appréciées par les développeurs à travers le monde.</p>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-row justify-center gap-25">
                        <img src="../src/assets/images/programmation-languages/java.png" alt="java-logo" className="h-[20vh]" />
                        <img src="../src/assets/images/programmation-languages/python.png" alt="python-logo" className="h-[20vh]" />
                        <img src="../src/assets/images/programmation-languages/JS.png" alt="JS-logo" className="h-[20vh]" />
                        <img src="../src/assets/images/programmation-languages/C.png" alt="C-logo" className="h-[20vh]" />
                        <img src="../src/assets/images/programmation-languages/TS.png" alt="TS-logo" className="h-[20vh]" />
                    </div>
                    <div className="flex flex-row justify-center gap-15">
                        <img src="../src/assets/images/programmation-languages/docker.png" alt="docker-logo" className="h-[8vh]" />
                        <img src="../src/assets/images/programmation-languages/next.png" alt="next-logo" className="h-[8vh]" />
                        <img src="../src/assets/images/programmation-languages/aws.png" alt="aws-logo" className="h-[8vh]" />
                        <img src="../src/assets/images/programmation-languages/serverless.png" alt="serverless-logo" className="h-[8vh]" />
                        <img src="../src/assets/images/programmation-languages/react.png" alt="react-logo" className="h-[8vh]" />
                        <img src="../src/assets/images/programmation-languages/openapi.png" alt="openapi-logo" className="h-[8vh]" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TechnoLanguages