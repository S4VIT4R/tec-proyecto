

const  Home = () => {
  return (
    <>
    <div className="">
        <h1 className="absolute text-white pt-40 pl-20 text-5xl font-bold">
            {/* División de Estudios de Posgrado */}
        </h1>
        <img src="./tec.jpg" className="w-full"></img>
    </div>
    <div className="grid gap-3 grid-cols-3 pl-20 bg-pink-700" id="convocatoria" >
        <div className="col-span-2 pt-10 flow-root">
            <h2 className="text-white text-3xl font-bold rounded-lg ml-10">
                !CONVOCATORIA DE INSCRIPCIÓN ABIERTA!
            </h2>
            <p className=" ml-10 pt-5 text-lg text-white">
                Forma parte de nuestras maestrías y conoce más sobre nuestro modelo de estudio,
            </p>
            <p className=" ml-10 pt-5 text-lg text-white">
                hoy mismo.
            </p>
            <button className="ml-10 bg-white shadow rounded mt-4 py-1 px-2 font-bold">Ver más...</button>
        </div>
        <img className="float-right mr-5" src="./estudiantes.png" alt="">
        </img>
    </div>

    <div className="grid gap-3 grid-cols-3 pl-20 bg-white" id="nosotros">
        <div className="col-span-2 pt-10 flow-root">
            <div className="float-left grid gap-3 pl-2 bg-white w-3/4 mb-10">
                <p className="float-left pt-5 text-lg font-bold text-2xl text-center">
                Sobre Nosotros
                </p>
            <div className="bg-gray-900 text-white pt-6 pb-6 pl-2 pr-1 shadow rounded">
                <label>La División de Estudios de Posgrado e Investigación del Instituto Tecnológico de Chilpancingo es reconocida por su contribución social y científica en sus diferentes entornos de influencia a través de la formación de egresados que se incorporan a esquemas económicos y tecnológicos que favorecen a la sociedad y al desarrollo del país.
                </label>
                <br></br>
                <button className="m-auto text-center bg-white text-black shadow rounded mt-4 py-1 px-2 font-bold">Ver más...</button>
            </div>
            </div>
        </div>
        <img className="float-right mb-10 mt-10" src="./equipo.jpg" width="400px"></img>
    </div>

    <div className="gap-3 grid-cols-3 pl-20 bg-yellow-400" id="investigadores">
    <p className=" w-full text-lg font-bold text-2xl text-center">Investigadores</p>
    <p className=" w-full text-lg text-center">Nuestros profesores por área</p>
        <div className="col-span-2 pt-10 flow-root">
            <img className="mb-20 float-left" src="./inv1.jpg" alt="" width="300px"></img>
            <img className="mb-20 float-left ml-40" src="./inv2.jpg" alt="" width="300px"></img>
            <img className="mb-20 float-right mr-20" src="./inv3.jpeg" alt="" width="300px"></img>
        </div>
        <label className="text-5xl">{'<'}</label>
        <label className="text-5xl float-right mr-20">{'>'}</label>
    </div>
    </>
  )
}

export default Home