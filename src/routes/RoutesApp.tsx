import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BarraNavegacao } from '../shared/component/BarraNavegacao';
import { Home } from '../screens/home/Home';
import { Sobre } from '../screens/sobre/Sobre';
import { Tecnologias } from '../screens/tecnologias/Tecnologias';
import { Projetos } from '../screens/projetos/Projetos';

export const RoutesApp: React.FC = () => {
    return (
        <>
            <BarraNavegacao />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/Tecnologias' element={<Tecnologias/>} />
                <Route path='/Projetos' element={<Projetos/>} />
                <Route path='*' element={<Home />} />
            </Routes>
        </>

    )
}