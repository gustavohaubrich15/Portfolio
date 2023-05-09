import React, { useState } from 'react';
import { ReactComponent as HTMLIcon } from '../../shared/images/devIcons/html.svg'
import { ReactComponent as ReactIcon } from '../../shared/images/devIcons/react.svg'
import { ReactComponent as JavascriptIcon } from '../../shared/images/devIcons/javascript.svg'
import { ReactComponent as  CSSIcon} from '../../shared/images/devIcons/css.svg';
import { ReactComponent as NodeIcon } from '../../shared/images/devIcons/node.svg'
import { ReactComponent as SharpIcon } from '../../shared/images/devIcons/c#.svg'
import { ReactComponent as BallSvg } from '../../shared/images/ball.svg'
import { ReactComponent as HouseSvg } from '../../shared/images/house.svg'
import { ReactComponent as NavalSvg } from '../../shared/images/naval.svg'
import { FirstInfo } from '../../shared/component/firstinfo/FirstInfo';
import { CardProjeto } from '../../shared/component/cardprojeto/CardProjeto';

interface IProjeto {
    projeto: JSX.Element
}

export const Projetos: React.FC = () => {

    const [projetos] = useState<IProjeto[]> ([{
        projeto: <CardProjeto 
                    titulo="Sorteador de Futebol" 
                    descricao="Sorteador de times de futebol, podendo mencionar nível de jogadores."
                    imagemSvg={<BallSvg fill='white'/>}
                    acessoCodigoGithub="https://github.com/gustavohaubrich15/sorteador"
                    acessoAplicacao="https://goofy-mccarthy-e3ab63.netlify.app/"
                    tecnologias={<div className="flex space-x-1 w-20 h-10"><HTMLIcon/><CSSIcon/><JavascriptIcon/><ReactIcon/></div>}
                    />
    },
    {
        projeto: <CardProjeto 
                    titulo="House Lighting" 
                    descricao="Simulação de automação web para iluminação residencial." 
                    imagemSvg={<HouseSvg fill='white'/>}
                    acessoCodigoGithub="https://github.com/gustavohaubrich15/houseLighting"
                    tecnologias={<div className="flex space-x-1 w-10 h-10"><NodeIcon/><ReactIcon/></div>}
                    />
    },
    {
        projeto: <CardProjeto 
                    titulo="Batalha Naval via Console" 
                    descricao="Batalha Naval utilizando o console."
                    imagemSvg={<NavalSvg fill='white' className="pt-3"/>} 
                    acessoCodigoGithub="https://github.com/gustavohaubrich15/batalhanaval"
                    tecnologias={<div className="flex space-x-1 w-5 h-10"><SharpIcon/></div>}
                    />
    }])
    
    const showProjetos = () => {
        return projetos.map((projeto, index) => {
            return (
                <div key={index}>
                    {projeto.projeto}
                </div>
            )
        })
    }


    return (
        <>
            <FirstInfo
                titulo="Projetos"
                descricao={<div>Alguns projetos desenvolvidos 🛠📋</div>}
            />
            <div className="rounded-lg h-56 pt-5  w-full flex flex-row space-x-5 flex-wrap justify-center " >
                {
                    showProjetos()
                }
            </div>
        </>
    )

}