import React, { useState } from 'react';
import { FirstInfo } from '../../shared/component/firstinfo/FirstInfo';

interface IExperience {
    ano: string,
    descricao: string,
    detalhe?: string,
    funcao?: string
    point: string,
    descricaoPosition: string,
    animation: string
}

export const Sobre: React.FC = () => {

    const [experiences] = useState<IExperience[]>([{
        ano: '1996',
        descricao: 'Nascimento',
        point: 'left-[10%]',
        descricaoPosition: 'left-[8%]',
        animation: 'animate-fadeInPoints-timeline-1'

    },
    {
        ano: '2019',
        descricao: 'Cigam Software',
        detalhe: 'Magic e SQL',
        funcao: 'Estágio',
        point: 'left-[36%]',
        descricaoPosition: 'left-[32%]',
        animation: 'animate-fadeInPoints-timeline-2'
    },
    {
        ano: '2019',
        descricao: 'CWI Software',
        detalhe: 'Java e React TS',
        funcao: 'Projeto Crescer',
        point: 'left-[62%]',
        descricaoPosition: 'left-[58%]',
        animation: 'animate-fadeInPoints-timeline-3'
    },
    {
        ano: '2020/Atualmente',
        descricao: 'GVDASA',
        detalhe: 'C# e React TS',
        funcao: 'Dev FullStack',
        point: 'left-[86%]',
        descricaoPosition: 'left-[83%]',
        animation: 'animate-fadeInPoints-timeline-4'
    }
    ])



    const mapPoints = () => {
        return experiences.map((experience, index) => {
            return (
                <div key={index}>
                    <div className={`w-10 h-10 rounded-3xl absolute ${experience.point} ${experience.animation} top-32  -mt-[2px] bg-slate-500 flex justify-center items-center `}>
                        <div className="w-8 h-8 rounded-3xl  bg-white flex justify-center items-center  ">
                            <div className="w-6 h-6 rounded-3xl bg-slate-500 ">
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }


    const mapYears = () => {
        return experiences.map((experience, index) => {
            return (
                <div key={index} className={`absolute ${experience.point} ${experience.animation} ${(index + 1) % 2 > 0 ? 'top-24' : 'top-44'} text-xl font-bold w-20`}>{experience.ano}</div>
            )
        })
    }

    const mapFlags = () => {
        return experiences.map((experience, index) => {
            return (
                <div key={index}>
                    <div className={`absolute ${experience.point} ${experience.animation} ${(index + 1) % 2 > 0 ? 'top-44' : 'top-[89px]'} ml-[18px]  w-1 h-8 bg-slate-500`}></div>
                    <div className={`absolute ${experience.point} ${experience.animation} ${(index + 1) % 2 > 0 ? 'top-52' : 'top-[89px]'} ml-[12px] w-4 h-[5px] bg-slate-500 rounded`}></div>
                    <div className={`absolute ${experience.descricaoPosition} ${experience.animation} ${(index + 1) % 2 > 0 ? 'top-56' : 'top-4'}  text-md  text-center`}>

                        <strong>{experience.descricao}</strong>
                        <br />
                        <i>{experience.detalhe}</i>
                        <br />
                        <u>{experience.funcao}</u>
                    </div>
                </div>
            )
        })
    }



    return (
        <>
            <FirstInfo
                titulo="Sobre mim"
                descricao={<p>Me chamo <strong>Gustavo Haubrich</strong>, sou desenvolvedor e apaixonado pelo desenvolvimento web. Atuo principalmente com as tecnologias C#, ReactJS, Sql Server . Prezo pela prática esportiva, com paixão no Tênis 🎾, Futebol ⚽ e  Beach Tênis 🏖️.</p>}
            />
            <div className="flex flex-col pt-36 max-w-5xl w-full absolute text-teal-600 font-mono dark:text-slate-400" >

                <div className=" w-0 h-1 bg-slate-500 rounded-md animate-waving-timeline "></div>
                {mapFlags()}
                {mapPoints()}
                {mapYears()}
            </div>
        </>
    )

}