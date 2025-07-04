const Navbar = () => {
    return (
        <>
            <div className="bg-[var(--primary-color)] flex flex-row justify-between h-[17vh] px-3 top-0">
                <img src="../src/assets/images/hei-logo.png" alt="hei-logo"/>
                <ul className=" text-white text-xl font-semibold font-[var(--hei-policy)] items-center flex flex-row gap-x-5 mr-5">
                    <li className="text-[var(--secondary-color)]">ACCUEIL</li>
                    <li>ACTUALITES</li>
                    <li className="">BOURSES D'ETUDES</li>
                    <li>INSCRIPTION</li>
                    <button type="button" className="bg-[var(--secondary-color)] h-[7vh] px-2 rounded-sm">INTRANET</button>
                </ul>
            </div>
        </>
    )
}

export default Navbar;