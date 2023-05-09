import React, { useContext } from 'react'
import { DarkModeContext } from '../../context/darkModeContext'

interface IContainer {
    children?: React.ReactNode
}

export const Container: React.FC<IContainer> = ({ children }) => {
    const darkModeContext = useContext(DarkModeContext)

    return (
        <div className={darkModeContext.theme}>
        <div className="pl-44 pt-10 pr-20 select-none max-h-screen h-screen dark:text-white dark:bg-slate-800">
            {children}
        </div>
        </div>
    )
}