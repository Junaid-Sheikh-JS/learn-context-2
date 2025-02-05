import React from 'react';
import './index.css';
import { ThemeProvider } from './context/themeContext';
import ThemeBtn from './Components/ThemeBtn';
import Card from './Components/Card';

function App() {
  return (
    <ThemeProvider>
      <div className="flex  bg-gray-50  dark:bg-slate-800 flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
