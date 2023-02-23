import {useState} from "react";
import { collection, addDoc,Timestamp } from "firebase/firestore";
import {db} from "../firebase/config";


import {useAuthContext} from "./useAuthContext";

export const useCreateForm = (colName) =>{
    const {user} = useAuthContext();


    const createDoc = async() =>{

        try{
            //default value
            const res = await addDoc(collection(db,colName),{
                creator_name: user.displayName,
                creator_id: user.uid,
                created_at: Timestamp.now(),
                updated_at: Timestamp.now(),
                title: "",
                question_list: {
                    q0:{
                        options: [
                            {next:"q1"}
                        ],
                        question_type: "welcome page",
                        page_num:"0",
                        page_name:"q0",
                        question_bg: "",
                        question_icon1: "",
                        question_icon2: "",
                        question_icon3: "",

                        question_description: "",
                        question_description_placeholder: "",

                        question_title:"Question Title q0",
                        question_title_placeholder: "",

                    }
                }
            })
            return res.id;



        }catch(err){
            console.log(err.message)
        }

        console.log(`success`)
    }

    return {createDoc}
}

