import React from 'react';

interface IFirstInfo{
    titulo: string,
    descricao: JSX.Element
}

export const FirstInfo: React.FC<IFirstInfo> = ({titulo, descricao}) => {

    return (
        <>
            <div className="flex flex-col w-full pt-14 space-y-10">
                <div className="text-5xl font-semibold font-sans">{titulo}</div>
                <div className="text-1xl font-semibold font-sans w-2/3 text-justify">{descricao}</div>
            </div>
        </>
    )

}