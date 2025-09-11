import {createContext, useState} from 'react';
import {ReactNode} from 'react';

type UserContextProps = {
    children: ReactNode
}

export const UserContext = createContext();
export function UserProvider({children} : UserContextProps){
    const [user, setUser] = useState();

    async function login(email,password){

    }
    async function register(email,password){

    }
    async function logout(){

    }
    return(
        <UserContext.Provider value = {{user,login,register,logout}}></UserContext.Provider>
    )
}