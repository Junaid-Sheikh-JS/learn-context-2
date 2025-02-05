import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState();

    const toggleTheme = () => {
        setTheme(!theme);
    };

    useEffect(() => {
        (
            theme ?
                document.querySelector('html').classList.add('dark') :
                document.querySelector('html').classList.remove('dark')
        )
        // if (theme) {
        //     document.querySelector('html').classList.add('dark');
        // } else {
        //     document.querySelector('html').classList.remove('dark');
        // }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

