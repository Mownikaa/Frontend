import React, { createContext, useState } from 'react'


   export const themes = {
        light:{
            background: "purple",
        },
        dark:{
            background:"Lightgrey"
        },
    };
    export  const ThemeContext = createContext(themes.light)
  
  export default function ThemeComponent({ children }) {
    const[theme,setTheme]=useState("light")
      return(
         <ThemeContext.Provider value={{theme,setTheme}} >
            { children}
         </ThemeContext.Provider>
      );
  }
