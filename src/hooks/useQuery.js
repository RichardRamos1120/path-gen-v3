import {useRef, useState} from "react";
import { collection, query, where,getDocs } from "firebase/firestore";
import {db} from "../firebase/config";

export const useQuery = (col) =>{
    let document = [];


    const queryNow = async (theKey,uid) =>{

        const q = query(collection(db, col), where(theKey,"==",uid));
        const querySnapshot = await getDocs(q);
        let _result = [];
        querySnapshot.forEach(doc=>{
            _result.push(doc)
        })
        document.push(_result)


        return document;
    }

    return {queryNow}

}