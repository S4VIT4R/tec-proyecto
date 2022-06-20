const Aspirantes = () => {
    return (
        <>
            <div className="">
                <h1 className="absolute text-white pt-40 pl-20 text-5xl font-bold">
                    {/* Sistemas Computacionales */}
                </h1>
                <img src="./bsistemas.jpg" className="w-full"></img>
            </div>

            <div className="grid gap-2 grid-cols-2 pl-20">
                <div>
                    <h2 className="pt-10 text-3xl text-blue-800 font-bold">Ingreso en el periodo Enero - Junio 2022</h2>
                    <p className="pt-5 text-lg">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit iusto beatae fugit adipisci neque illum, maxime similique voluptatibus nulla aut sunt fugiat nobis minus aliquam error odio ratione delectus autem.
                        lorem
                    </p>
                </div>

                <div className="pt-12 w-2/3 m-auto">
                    <a href="#ingresoCalendario"><button className="w-full pt-20bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Periodo de ingreso</button></a>
                    
                    <a href="#costoAdmision"><button className="w-full pt-20bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Costos de admisión</button></a>

                </div>
            </div>

            {/* Ingreso calendario */}
            <div className="m-auto pt-10 w-6/6" id="ingresoCalendario">
                <div className="grid place-items-center">
                        <h2 className="pt-10 text-3xl text-blue-800 font-bold text-center">Periodo de ingreso Enero - Junio de 2022</h2>
                        <p className="pt-5 text-lg">
                        </p>
                        <table className="w-medium text-left dark:text-gray-400 text-center rounded-xl w-4/5">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th className="border bg-red-800 px-4 py-2 text-white">Entrega de fichas</th> 
                                    <th className="border bg-red-800 px-4 py-2 text-white">Examen de admisión CENEVAL</th> 
                                    <th className="border bg-red-800 px-4 py-2 text-white">Notificación de dictamen</th> 
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 mx-10 mt-10">
                                        <td className="px-6 py-4 bg-gray-300">Del 15 de septiembre al 15 de noviembre de 2021</td>
                                        <td className="px-6 py-4 bg-gray-300">10 de diciembre de 2021</td>
                                        <td className="px-6 py-4 bg-gray-300">Enero de 2022</td>
                                    </tr>
                            </tbody>
                        </table>
                        <p className="text-gray-600 pt-5 text-lg">*Sujeto a cambios</p>
                </div>
            </div>

            {/* COSTO CALENDARIO */}
            <div className="m-auto pt-10 pb-10" id="costoAdmision">
                <div className="grid place-items-center">
                        <h2 className=" text-3xl text-blue-800 font-bold text-center">Costos de admisión</h2>
                        <p className="text-lg mb-5">El costo de la ficha para presentar el examen de admisión incluye las evaluaciones del proceso de admisión que apliquen a cada posgrado.</p>
                        <table className="text-left dark:text-gray-400 text-center rounded-xl px-10 w-4/5">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th className="border bg-red-800 px-4 py-2 text-white w-2/5"><p className="px-20">Entrega de fichas</p></th> 
                                    <th className="border bg-red-800 px-4 py-2 text-white w-2/5"><p className="px-20">Examen de admisión CENEVAL</p></th> 
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 mx-10 mt-10">
                                        <td className="px-6 py-4 bg-gray-300"><p className="px-10">Doctorado</p></td>
                                        <td className="px-6 py-4 bg-gray-300"><p className="px-10">$$$$$$$</p></td>
                                    </tr>
                            </tbody>
                        </table>
                </div>

            </div>
        </>
    );
}

export default Aspirantes;