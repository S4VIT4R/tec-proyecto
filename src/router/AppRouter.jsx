import { Navigate, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import NavBar from '../components/Navbar';
import OfertaEducativa from '../pages/OfertaEducativa';
import Aspirantes from '../pages/Aspirantes';
import Footer from '../components/Footer';
import Preguntas from '../pages/Preguntas';



export const AppRouter = ()=> {
    return( 
        <>

        <NavBar />
        <Routes >
            <Route path="/" element={< Navigate to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="ofertaeducativa" element={<OfertaEducativa />} />
            <Route path="aspirantes" element={<Aspirantes />} />
            <Route path="preguntas" element={<Preguntas />} />
            <Route path="*" element={< Navigate to="home" />} />
        </Routes>

        <Footer />
        </>
    )
}