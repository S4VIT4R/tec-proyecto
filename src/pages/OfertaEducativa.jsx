const OfertaEducativa =()=>{
    return(
        <>
        <div className="">
            <h1 className="absolute text-white pt-40 pl-20 text-5xl font-bold">
                {/* Sistemas Computacionales */}
            </h1>
            <img src="./bsistemas.jpg" className="w-full"></img>
        </div>

        <div className="grid gap-2 grid-cols-2 pl-20">
            <div>
            <h2 className="pt-10 text-3xl text-blue-800 font-bold">Posgrado en Sistemas Computacionales</h2>
            <p className="pt-5 text-lg">
            De reciente creación, en agosto del 2016,  fue aprobada su certificación por el PNCP del CONACYT. El programa está integrado por Profesores Investigadores prestigiados que trabajan en dos Líneas de Investigación y también cuenta con laboratorios de primer nivel en los cuales se desarrollan proyectos de investigación con la colaboración de los y las estudiantes del programa como parte de su formación.
            </p>
            </div>

            <div className="pt-12 w-2/3 m-auto">
            <a href="#objetivos"><button className="w-full pt-20bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Objetivo General y especifico</button></a>
            
            <a href="#ingreso"><button className="w-full pt-20bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Perfil de Ingreso</button></a>

            <a href="#requisitos"><button className="w-full pt-20bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Requisitos</button></a>

            <a href="#egreso"><button className="w-full pt-20bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Perfil de Egreso</button></a>

            <a href="#asignaturas"><button className="w-full pt-20bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Asignaturas</button></a>
            </div>
        </div>

        {/* Objetivo General y especifico */}
        <div className="grid gap-2 grid-cols-2 pl-20 pt-20 pb-20" id="objetivos">            
            <div className="pt-10 w-5/6">
                <h2 className="text-white text-3xl font-bold bg-blue-700 rounded-lg text-center"  >Objetivo General</h2>
                <p className="pt-5 text-lg">
                </p>
                <ul className="list-disc pl-5 text-lg">
                    <li>Formar maestros y maestras capaces de incorporarse y participar en trabajos de investigación y desarrollo tecnológico aplicando sus conocimientos y las metodologías necesarias, de forma original e innovadora.</li>
                    <li>Preparar a sus egresados y egresadas en la detección y análisis de problemas, innovando, mejorando y adaptando tecnologías en procesos productivos.</li>
                    <li>Instruir a sus estudiantes para ejercer actividades docentes a nivel de licenciatura y posgrado en instituciones de educación superior y centros especializados.</li>
                    <li>Preparar a sus egresados y egresadas, para la continuación de estudios de doctorado.</li>
                </ul>
            </div>

            <div className="pt-10 w-5/6">
                <h2 className="text-white text-3xl font-bold bg-blue-700 rounded-lg text-center">Objetivos Especificos</h2>
                <p className="pt-5 text-lg">
                </p>
                <ul className="list-disc pl-5 text-lg">
                    <li>Formar maestros y maestras capaces de incorporarse y participar en trabajos de investigación y desarrollo tecnológico aplicando sus conocimientos y las metodologías necesarias, de forma original e innovadora.</li>
                    <li>Preparar a sus egresados y egresadas en la detección y análisis de problemas, innovando, mejorando y adaptando tecnologías en procesos productivos.</li>
                    <li>Instruir a sus estudiantes para ejercer actividades docentes a nivel de licenciatura y posgrado en instituciones de educación superior y centros especializados.</li>
                    <li>Preparar a sus egresados y egresadas, para la continuación de estudios de doctorado.</li>
                </ul>
            </div>
        </div>

        {/* Perfil de ingreso */}
        <div className="grid gap-3 grid-cols-3 pl-20 bg-blue-800" id="ingreso">
            <div className="col-span-2 pt-10">
                    <h2 className="text-white text-3xl font-bold rounded-lg text-center">Perfil de Ingreso</h2>
                    <p className="pt-5 text-lg">
                    </p>
                    <ul className="list-disc pl-5 text-lg text-white">
                        <li>Formar maestros y maestras capaces de incorporarse y participar en trabajos de investigación y desarrollo tecnológico aplicando sus conocimientos y las metodologías necesarias, de forma original e innovadora.</li>
                        <li>Preparar a sus egresados y egresadas en la detección y análisis de problemas, innovando, mejorando y adaptando tecnologías en procesos productivos.</li>
                        <li>Instruir a sus estudiantes para ejercer actividades docentes a nivel de licenciatura y posgrado en instituciones de educación superior y centros especializados.</li>
                        <li>Preparar a sus egresados y egresadas, para la continuación de estudios de doctorado.</li>
                    </ul>
                </div>

                <div className="flow-root pt-6 w-4/5">
                    <img src="https://www.nicepng.com/png/full/424-4247641_estudiante-04-unete-a-nuestro-equipo-de-trabajo.png" className="float-right"></img>
                </div>
        </div>


        {/* Requisitos */}
        <div className="m-auto pt-10 w-3/6 pb-10" id="requisitos">
            <div className="border-blue-900 border-2 rounded-lg">
                <h2 className="text-blue-800 text-3xl font-bold rounded-lg text-center pb-4 pt-5">Requisitos</h2>
                <ul className="list-disc pl-10 text-lg pb-10">
                    <li>Ser egresado titulado o egresada titulada de la licenciatura en Ingeniería Mecatrónica, Ingeniería Electrónica, Ingeniería Mecánica, Ingeniería Electromecánica o áreas afines.</li>
                    <li>Contar con una calificación promedio mínimo de 80 o su equivalente.</li>
                    <li>Contar con título o acta de examen profesional.</li>
                    <li>Presentar solicitud para ingresar a la maestría.</li>
                    <li>Aprobar el proceso de selección.</li>
                </ul>
            </div>
        </div>


                {/* Perfil de Egreso */}
        <div className="grid gap-3 grid-cols-4 pl-20 bg-gray-700" id="egreso">
            <div className="flow-root w-4/5">
                <img src="./graduadopng.png" className="float-left w-5/4"></img>
            </div>

            <div className="col-span-3 pt-10 pr-20">
                <h2 className="text-white text-3xl font-bold rounded-lg text-center ">Perfil de Egreso</h2>
                <p className="pt-5 text-lg">
                </p>
                <ul className="list-disc pl-5 text-lg text-white">
                    <li>Formar maestros y maestras capaces de incorporarse y participar en trabajos de investigación y desarrollo tecnológico aplicando sus conocimientos y las metodologías necesarias, de forma original e innovadora.</li>
                    <li>Preparar a sus egresados y egresadas en la detección y análisis de problemas, innovando, mejorando y adaptando tecnologías en procesos productivos.</li>
                    <li>Instruir a sus estudiantes para ejercer actividades docentes a nivel de licenciatura y posgrado en instituciones de educación superior y centros especializados.</li>
                    <li>Preparar a sus egresados y egresadas, para la continuación de estudios de doctorado.</li>
                </ul>
            </div>
        </div>

        {/* Asignaturas */}
        <div className="m-auto pt-10 w-3/6 pb-10" id="asignaturas">
            <div className="border-red-800 border-4 rounded-xl">
                <h2 className="text-white bg-red-800 text-3xl font-bold rounded-ml text-center pb-2">Asignarturas</h2>
                <ul className="pt-4 list-disc pl-10 text-lg">
                    <h2 className="text-xl font-bold">Asignaturas básicas</h2>
                    <li>Matemáticas</li>
                    <li>Computacion Basica</li>
                    <li>Fundamentos de Mecatrónica</li>
                    <li>Electronica Basica</li>
                    <h2 className="text-xl font-bold pt-2">Investigación en Automática e Informática Industrial</h2>
                    <li>Temas Selectos de Ingeniería Mecatrónica I</li>
                    <li>Temas Selectos de Ingeniería Mecatrónica II</li>
                    <li>Tópicos Avanzados de Ingeniería Mecatrónica</li>
                    <li>Sistemas de Autómatas</li>
                    <li>Supervisión y Automatización Industrial</li>
                    <li>Sensores y Actuadores Inteligentes</li>
                    <li>Control Inteligente de Sistemas Mecatrónicos</li>
                    <li>Análisis y Procesamiento de Imágenes</li>
                    <li>Diseño de Sistemas Embebidos</li>
                    <h2 className="text-xl font-bold pt-2">Diseño de sistemas</h2>
                    <li>Temas Selectos de Ingeniería </li>
                    <li>Tópicos Avanzados de Ingeniería</li>
                    <li>Desarrollo de Sistemas</li>
                    <li>Diseño Asistido por Computadora</li>
                </ul>
            </div>
        </div>

        </>
    );
}


export default OfertaEducativa;