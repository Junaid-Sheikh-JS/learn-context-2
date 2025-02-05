import React from 'react';
import { useTheme } from '../context/themeContext';

const ThemeBtn = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="px-3 py-2 bg-gray-200 rounded-xl text-sm dark:bg-gray-700 dark:text-white"
        >
            {theme ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default ThemeBtn;
