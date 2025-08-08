import { createContext, useState } from "react";

export const AuthContext=createContext()


export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null)
    const login=()=>{setUser('nabil')}
    const logout=()=>{setUser(null)}
    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
        
    )
}