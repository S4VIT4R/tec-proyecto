import { Link, NavLink } from 'react-router-dom';
import SelectComponent from '../components/SelectComponent';



// Componentes por funciones 
const NavBar =()=> {

  let opcionesConocenos = [
    'opcion 1',
    'opcion 2',
    'opcion 3',
    'opcion 4',
  ]

  let direccionesConocenos = [
    '',
    '',
    '',
    '',
  ]

  let opcionesOfertaEducativa = [
    'Sistemas',
    'Mecatronica',
    'Redes'
  ]

  let direccionesOfertaEducativa = [
    'ofertaeducativa',
    '',
    ''
  ]

  let opcionesNucleoAcademico = [
    'opcion 1',
    'opcion 2',
    'opcion 3'
  ]

  let direccionesNucleoAcademico = [
    '',
    '',
    ''
  ]

  let opcionesAspirantes = [
    'Admisión',
    'Preguntas Frecuentes',
    'Convocatoria de admisión'
  ]

  let direccionesAspirantes = [
    'aspirantes',
    'preguntas',
    ''
  ]

  let opcionesRepositorioAcademico = [
    'opcion 1',
    'opcion 2',
    'opcion 3'
  ]

  let direccionesRepositorioAcademico = [
    '',
    '',
    ''
  ]


    return (
      <div className="max-w-full">
        <div className="flex justify-center">
            <img src="./baner.jpg" className="w-1/2"></img>
        </div>

          <nav className='navbar navbar-expand-lg navbar-blue-800 bg-blue-800 pb-2'>
              <div className='container-fluid'>
                  <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  </button>
                      <div className='flex justify-center'>
                              
                              {/* Button Home */}
                              <NavLink className="nav-item nav-link" to="/">
                                <span className="material-symbols-rounded text-white pt-1 pr-3">home</span>
                              </NavLink>

                        {/* el select solo soporta hasta 5 opciones (campos)*/}
                     
                        <SelectComponent 
                        titulo="Conocenos"
                        array1 = {opcionesConocenos}
                        array2 = {direccionesConocenos} 
                        />

                        <SelectComponent 
                        titulo="Oferta Educativa" 
                        array1 = {opcionesOfertaEducativa}
                        array2 = {direccionesOfertaEducativa}
                        />

                        <SelectComponent 
                        titulo="Nucleo Academico" 
                        array1= {opcionesNucleoAcademico}
                        array2 = {direccionesNucleoAcademico}
                        />

                        <SelectComponent 
                        titulo="Aspirantes" 
                        array1 = {opcionesAspirantes}
                        array2 = {direccionesAspirantes}
                        />

                        <SelectComponent 
                        titulo="Repositorio Academico" 
                        array1 = {opcionesRepositorioAcademico}
                        array2 = {direccionesRepositorioAcademico}
                        />

                        <button className="text-white text-xl pl-6 pr-6 pb-1">Contacto</button>
                        

                      </div>
                  {/* <label className='text-white mx-2'>Cerrar Sesión</label> */}
              </div>
          </nav>
      </div>
    )
}
  
  export default NavBar;

