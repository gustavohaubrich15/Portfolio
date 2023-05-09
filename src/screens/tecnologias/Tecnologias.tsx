import React, { useState } from 'react';
import { CardDev } from '../../shared/component/carddev/CardDev';
import { ReactComponent as ReactIcon } from '../../shared/images/devIcons/react.svg'
import { ReactComponent as HTMLIcon } from '../../shared/images/devIcons/html.svg'
import { ReactComponent as CSSIcon } from '../../shared/images/devIcons/css.svg'
import { ReactComponent as JavascriptIcon } from '../../shared/images/devIcons/javascript.svg'
import { ReactComponent as SQLIcon } from '../../shared/images/devIcons/sql.svg'
import { ReactComponent as TailwindIcon } from '../../shared/images/devIcons/tailwind.svg'
import { ReactComponent as NodeIcon } from '../../shared/images/devIcons/node.svg'
import { ReactComponent as CIcon } from '../../shared/images/devIcons/c#.svg'
import { FirstInfo } from '../../shared/component/firstinfo/FirstInfo';

interface ICard {
    card: JSX.Element
}

export const Tecnologias: React.FC = () => {

    const [cards] = useState<ICard[]> ([{
        card: <CardDev icon={<HTMLIcon />} descricao={"HTML"} />
    },
    {
        card: <CardDev icon={<CSSIcon />} descricao={"CSS"} />
    },
    {
        card: <CardDev icon={<JavascriptIcon />} descricao={"Javascript"} />
    },
    {
        card: <CardDev icon={<TailwindIcon />} descricao={"Tailwind"} />
    },
    {
        card: <CardDev icon={<ReactIcon />} descricao={"React"} />
    },
    {
        card: <CardDev icon={<SQLIcon />} descricao={"SQL"} />
    },
    {
        card: <CardDev icon={<CIcon />} descricao={"C#"} />
    },
    {
        card: <CardDev icon={<NodeIcon />} descricao={"Node"} />
    }])
    
    const showCards = () => {
        return cards.map((cardinfo, index) => {
            return (
                <div key={index}>
                    {cardinfo.card}
                </div>
            )
        })
    }


    return (
        <>
            <FirstInfo
                titulo="Tecnologias"
                descricao={<div>Tecnologias que venho trabalhando recentemente 🧑‍💻</div>}
            />
            <div className="rounded-lg h-56  pt-5 w-full flex flex-row space-x-5 flex-wrap justify-center " >
                {
                    showCards()
                }
            </div>
        </>
    )

}