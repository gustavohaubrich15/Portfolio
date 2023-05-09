import React, { createContext, useState } from 'react';

interface IDarkModeProvider {
    children?: React.ReactNode
}

interface IDarkMode {
    changeDarKMode: () => void,
    theme: string
}

export const DarkModeContext = createContext<IDarkMode>({} as IDarkMode)

export const DarkModeProvider: React.FC<IDarkModeProvider> = ({ children }) => {

    const [theme, setTheme] = useState<string>('light')

    const changeDarKMode = () => {
        setTheme((prevstate) => prevstate === 'light' ? 'dark' : 'light')
    }

    return (
        <>
            <DarkModeContext.Provider value={{ theme, changeDarKMode }}>
                {children}
            </DarkModeContext.Provider>
        </>
    )
}