import {useState} from "react";
import { signOut } from "firebase/auth";
import {auth} from "../firebase/config";

import {useAuthContext} from "./useAuthContext";

export const useLogout = () =>{
    const [error,setError] = useState(null)
    const [isPending,setIsPending] = useState(false)

    const {dispatch} = useAuthContext();
    const logout = async () =>{
        setError(null)
        setIsPending(true)

        try {
            const res = await signOut(auth)
            //update the context later here
            dispatch({type:"LOGOUT"})
        }
        catch (error){
            setError(error.message)
        }
        setIsPending(false)
    }

    return {logout,error,isPending}

}