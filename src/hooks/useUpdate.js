import {useEffect, useRef, useState} from "react";
import {db} from "../firebase/config";
import {doc, setDoc} from "firebase/firestore";

export const useUpdate  = (id,qs,docType) =>{

    const update = async (theNewObj) =>{

        if(theNewObj){

            await setDoc(doc(db, "questions",id),
                {
                    question_list:{
                        [`${qs}`]:theNewObj
                    }
                }

                ,{ merge: true })

            console.log("run again")
        }


    }


    useEffect(()=>{

        if(docType.question_title){
            update(docType)
        }

    },[docType, update])

    return{update}

}