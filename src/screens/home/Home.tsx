import React from 'react';
import perfil from '../../shared/images/perfil.png'
import Typed from 'react-typed'

export const Home: React.FC = () => {

    return (
        <>
            <div className="flex flex-col space-y-2 text-center  items-center  mt-5">

                <div className="pt-10 text-5xl font-medium text-teal-600 font-mono dark:text-slate-400">Gustavo Haubrich</div>
                <div className="pt-2 text-2xl font-semibold">Desenvolvedor FullStack</div>
                <div className=" leading-10 text-2xl  text-teal-600 font-mono dark:text-slate-400">
                    <Typed
                        strings={['Desenvolvo ideias e busco sempre novos  conhecimentos de tecnologias voltadas a web.<br/>Venha conhecer alguns de meus projetos e experiências.']}
                        typeSpeed={40}
                    />
                </div>
                <img className="w-24 pt-4" src={perfil} alt="Logo" />
            </div>

        </>
    )

}