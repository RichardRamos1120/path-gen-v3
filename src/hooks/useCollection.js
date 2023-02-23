import {useState,useEffect} from "react";
import { doc, onSnapshot } from "firebase/firestore";
import {db} from "../firebase/config"
import {useParams} from "react-router-dom";

export const useCollection = () =>{
    const [document,setDocument] = useState(null);
    const {id} = useParams();

    useEffect(()=>{
        const unsub = onSnapshot(doc(db, "questions", id), (doc) => {
            setDocument({...doc.data()})
        });

        //return unsub if user went to other page to prevent multiple listener
        return ()=> unsub();

    },[id])

    return {document}

}