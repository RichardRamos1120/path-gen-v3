import { useState } from "react"
import { createUserWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth} from "../firebase/config"

import {useAuthContext} from "./useAuthContext";

export const useSignup = () =>{
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    const {dispatch} = useAuthContext();

    const signup = async (email,password,fullName)=>{
        setError(null);
        setIsPending(true);

        try{
            //sign up
            const res = await createUserWithEmailAndPassword(auth, email, password);
            if(!res) {
                throw new Error("Could not complete Signup");
            }

            //add fullname
            await updateProfile(res.user,{displayName:fullName})

            //update the context
            dispatch({type:"LOGIN",payload:res.user})


        }
        catch(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
        };

        setIsPending(false);


    }

    return {signup,error,isPending};

}