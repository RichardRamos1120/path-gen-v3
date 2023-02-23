import {useState} from "react";

import {useAuthContext} from "./useAuthContext";

import { signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase/config"


export const useLogin = () =>{

    const {dispatch} = useAuthContext()

    const [isPending,setIsPending] = useState(false);
    const [error,setError] = useState(null);

    const login = async (email,password) =>{
        setError(null)
        setIsPending(true)

        try{
            const res = await signInWithEmailAndPassword(auth,email,password)
            //update the context later here

            //update the login
            dispatch({type:"LOGIN",payload:res.user})
        }
        catch(error){
            setError(error.message)
        }
        setIsPending(false)
    }

    return {isPending,error,login}


}