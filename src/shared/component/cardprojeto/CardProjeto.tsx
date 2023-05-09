import React from 'react';
import { ReactComponent as GithubLogo } from '../../images/gitHub.svg'
import { ReactComponent as LinkLogo } from '../../images/link.svg'


interface ICardProjeto {
    titulo: string,
    descricao: string,
    imagemSvg: JSX.Element,
    tecnologias: JSX.Element,
    acessoCodigoGithub: string,
    acessoAplicacao?: string,
}

export const CardProjeto: React.FC<ICardProjeto> = ({ titulo, descricao, imagemSvg, tecnologias, acessoCodigoGithub, acessoAplicacao }) => {

    return (
        <>
            <div className="rounded-lg shadow-2xl space-y-7 h-72 w-56 bg-gray-900  text-black animate-fadeInCard" >
                <div className="h-1/3  w-full ">
                    {imagemSvg}
                </div>
                <div className="h-2/3 bg-white w-full rounded-b-lg flex flex-col space-y-1">
                    <div className="justify-center items-center flex font-extrabold">{titulo}</div>
                    <div className="font-medium font-sans text-sm pl-2 "><p>{descricao}</p></div>
                    <div className="h-full w-full flex justify-end flex-col space-y-2 p-b">
                        <div className="text-sm font-semibold flex space-x-2 items-center pl-2"><div>Tecnologias:</div> {tecnologias}</div>

                        <div className="flex flex-col justify-around ">
                            <div className="flex flex-row space-x-2 justify-around space-y-4 text-sm font-semibold">
                                <div className="flex space-x-2  justify-center items-center pb-4">
                                    {acessoAplicacao &&
                                        <div className="flex space-x-2  justify-center items-center ">
                                            <LinkLogo title='Aplicacao' className="w-4 h-4" />
                                            <div>
                                                <a href={`${acessoAplicacao}`} target="_blank" rel="noreferrer" className="cursor-pointer hover:opacity-50"><u>Aplicação</u></a>
                                            </div>
                                        </div>
                                    }
                                    <div className="flex space-x-2  justify-center items-center">
                                        <GithubLogo title='GitHub' fill="black" className="w-5 h-5" />
                                        <a href={`${acessoCodigoGithub}`} target="_blank" rel="noreferrer" className="cursor-pointer  hover:opacity-50"><u>Código</u></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}