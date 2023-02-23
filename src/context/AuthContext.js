import {createContext, useReducer,useEffect} from "react";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebase/config";



export const AuthContext = createContext()

export const authReducer = (state,action) =>{

    switch (action.type){
        case "AUTH_IS_READY":
            return {user:action.payload,authIsReady:true}
        case "LOGIN":
            return {...state,user:action.payload}
        case "LOGOUT":
            return {...state,user:null}
        default:
            return state;
    }
}

export const AuthContextProvider = ({children}) =>{
    const [state,dispatch] = useReducer(authReducer,{
        user:null,
        authIsReady:false
    });

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            dispatch({type:"AUTH_IS_READY",payload:user})
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;

                // ...
            } else {
                // User is signed out
                // ...
            }
        });



    },[])


    
    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )


}