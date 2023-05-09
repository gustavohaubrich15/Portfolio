import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as GithubLogo } from '../images/gitHub.svg'
import { ReactComponent as LinkedInLogo } from '../images/linkedIn.svg'
import { ReactComponent as SunLogo } from '../images/sun.svg'
import { ReactComponent as MoonLogo } from '../images/moon.svg'
import { DarkModeContext } from '../context/darkModeContext';

export const BarraNavegacao: React.FC = () => {

    const navigate = useNavigate();
    const [animacaoHome, setAnimacaoHome] = useState<string>('')
    const [animacaoSobre, setAnimacaoSobre] = useState<string>('')
    const [animacaoTecnologias, setAnimacaoTecnologias] = useState<string>('')
    const [animacaoProjetos, setAnimacaoProjetos] = useState<string>('')
    const [fillGithub, setFillGithub] = useState<string>()
    const [fillLinkedIn, setFillLinkedIn] = useState<string>()
    const [darkMode, setDarkMode] = useState<boolean>(false)
    const [opacitySun, setOpacitySun] = useState<number>(1)
    const [opacityMoon, setOpacityMoon] = useState<number>(1)
    const darkModeContext = useContext(DarkModeContext)

    const changeThemeMode = () => {
        setDarkMode(!darkMode)
        darkModeContext.changeDarKMode()
        let themeIcon = darkModeContext.theme === 'light' ? '#C1BDB1' : '#000000'
        setFillGithub(themeIcon)
        setFillLinkedIn(themeIcon)
    }

    return (
        <>
            <div className="flex space-x-48 w-full">
                <div className='w-52 justify-start font-bold font-sans font-sm cursor-pointer ' title='Tema'>
                    {!darkMode && <SunLogo onClick={changeThemeMode} opacity={opacitySun} onMouseOver={() => setOpacitySun(0.5)} onMouseOut={() => setOpacitySun(1)} />}
                    {darkMode && <MoonLogo onClick={changeThemeMode} opacity={opacityMoon} onMouseOver={() => setOpacityMoon(0.5)} onMouseOut={() => setOpacityMoon(1)} />}
                </div>

                <div className="flex justify-end  space-x-16 text-zinc-500 text font-sans font-sm font-medium cursor-pointer">
                    <div className="text-center relative bg-white rounded  dark:bg-slate-800 dark:text-white " onClick={() => navigate('/')}
                        onMouseOver={() => setAnimacaoHome('absolute  h-1/5 w-full rounded  animate-waving-item-menu text-center bg-zinc-500 dark:bg-white')} onMouseOut={() => setAnimacaoHome('')}>
                        <div className="">Home</div>
                        <div className={animacaoHome}>
                        </div>
                    </div>
                    <div className="text-center relative bg-white rounded dark:bg-slate-800 dark:text-white " onClick={() => navigate('/sobre')}
                        onMouseOver={() => setAnimacaoSobre('absolute  h-1/5 w-full rounded  animate-waving-item-menu text-center bg-zinc-500 dark:bg-white')} onMouseOut={() => setAnimacaoSobre('')}>
                        <div className=" ">Sobre</div>
                        <div className={animacaoSobre}>
                        </div>
                    </div>
                    <div className="text-center relative bg-white rounded dark:bg-slate-800 dark:text-white " onClick={() => navigate('/tecnologias')}
                        onMouseOver={() => setAnimacaoTecnologias('absolute  h-1/5 w-full rounded  animate-waving-item-menu text-center bg-zinc-500 dark:bg-white')} onMouseOut={() => setAnimacaoTecnologias('')}>
                        <div className="">Tecnologias</div>
                        <div className={animacaoTecnologias}>
                        </div>
                    </div>
                    <div className="text-center relative bg-white rounded dark:bg-slate-800 dark:text-white " onClick={() => navigate('/Projetos')}
                        onMouseOver={() => setAnimacaoProjetos('absolute  h-1/5 w-full rounded  animate-waving-item-menu text-center bg-zinc-500 dark:bg-white')} onMouseOut={() => setAnimacaoProjetos('')}>
                        <div className="">Projetos</div>
                        <div className={animacaoProjetos}>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-4">
                        <GithubLogo title='GitHub' fill={fillGithub} onMouseOver={() => setFillGithub(darkModeContext.theme === 'light' ? '#C1BDB1' : '#000000')} onMouseOut={() => setFillGithub(darkModeContext.theme === 'light' ? '#000000' : '#C1BDB1')} onClick={() => window.open("https://github.com/gustavohaubrich15", "_blank", "noopener,noreferrer")} />
                        <LinkedInLogo title='LinkedIn' fill={fillLinkedIn} onMouseOver={() => setFillLinkedIn(darkModeContext.theme === 'light' ? '#C1BDB1' : '#000000')} onMouseOut={() => setFillLinkedIn(darkModeContext.theme === 'light' ? '#000000' : '#C1BDB1')} onClick={() => window.open("https://www.linkedin.com/in/gustavo-haubrich-753515199/", "_blank", "noopener,noreferrer")} />
                    </div>
                </div>
            </div>
        </>
    )

}