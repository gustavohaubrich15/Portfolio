import React from 'react';

interface ICardDev{
    icon: JSX.Element,
    descricao: string
}

export const CardDev: React.FC<ICardDev> = ({icon, descricao}) => {

    return (
        <>
            <div className="rounded-lg flex items-center space-x-7 sp  h-20 w-44 bg-gray-900 font-bold  text-teal-600 font-mono dark:text-slate-400 animate-fadeInCard" >
                <div className="w-12 pl-2">{icon}</div> 
                <div>{descricao}</div>     
            </div>
        </>
    )

}