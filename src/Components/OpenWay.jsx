const OpenWay = () => {
    return (
        <>
            <div className="flex flex-row-reverse my-7 mx-3 py-6 items-center">
                <img src="../src/assets/images/hei-image1.webp" alt="hei-image" className="h-[80vh]" />
                <div className="text-[var(--primary-color)] ">
                    <h1 className="font-semibold text-5xl mb-5 ml-6">Quelques débouchés</h1>
                    <div className="flex flex-col justify-between gap-7 ml-6 mr-25">
                        <p className="text-[20px]">Formez-vous à une panoplie de métiers du numérique avec nous et venez acquérir les fondements de la programmation (qui vous servira pour les différents métiers) ! Ce sont des métiers porteurs, des métiers du présent, des métiers du futur…</p>
                        <p className="text-[20px]">Développeur back end, développeur front end, développeurs mobile, chefs de projet, exploitants cloud, analystes cybersécurité, pentesters, auditeur technique SSI, auditeur organisationnel SSI, administrateur système et réseau, développeur de sécurité…</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OpenWay;