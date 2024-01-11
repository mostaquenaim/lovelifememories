'use client'
import { createContext, useState } from "react";

export const ProjectContext = createContext(null);

const Provider = ({ children }) => {

    const [loading, setLoading] = useState(false)
    const [theme, setTheme] = useState('light');
    
    const info ={
        loading,
        setLoading,
        theme,
        setTheme 
    }

    return (
        <ProjectContext.Provider value={info}>
            {children}
        </ProjectContext.Provider>
    );
};

export default Provider;