

const Footer =()=> {
    return(
        <>

        <div className="grid gap-2 grid-cols-2 pl-10 bg-blue-800 pb-10">

            <div className="pt-10 pl-20">
                <h1 className="text-3xl font-bold text-white pb-5"> Contactanos </h1>
                <p className="text-lg text-white text-xl font-bold">Intituto Tecnologico de Chilpancingo</p>
                <p className="text-lg text-white font-bold mt-2">Edificio de posgrado:</p>
                <p className="text-lg text-white">Av. José Francisco Ruíz Massieu No. 5, Colonia Villa Moderna, C.P. 39090 Chilpancingo, Guerrero.</p>
                <p className="text-lg text-white font-bold mt-2">Telefonos:</p>
                <p className="text-lg text-white">(747) 47 2 1014</p>
                <p className="text-lg text-white">(747) 47 2 7152</p>
                <p className="text-lg text-white">(747) 48 0 1022</p>
                <p className="text-lg text-white">(747) 47 2 1252</p>
                <p className="text-lg text-white font-bold mt-2">Correo Electronico:</p>
                <p className="text-lg text-white">posgrado-itch.chilpancingo.tecnm.mx</p>
                <p className="text-lg text-white font-bold mt-2">Redes sociales:</p>
                <div className="flow-root mt-2">
                    <img className='float-left' src="./facebook.png" alt="" width='20px'></img>
                    <img className='float-left' src="./insta.png" alt="" width='30px'></img>
                    <img className='float-left' src="./twitter.png" alt="" width='20px'></img>
                </div>
            </div>
        
            <div className="flex m-auto pt-20">
                <img src="./map.JPG" alt="" width="600px"></img>
            </div>
        </div>

        <div className="flex pl-20">
            <img src="./baner.jpg" className="w-2/3 m-auto"></img>
            <label className="pt-5 pr-20">Copyright 2022 TecNM/Chilpancingo, Todos los derechos reservados</label>
        </div>

        </>
    );
}

export default Footer;
