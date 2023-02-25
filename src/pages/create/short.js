import React, {useEffect, useRef, useState} from 'react';
import "./welcome-page.css";


import {useParams} from "react-router-dom";
import {doc, setDoc} from "firebase/firestore";
import {db} from "../../firebase/config";
import ChoiceEditor from "./ChoiceEditor";

function Short({

                   document,user,
                   question_title,
                   question_description,
                   question_options

               }) {


    // ---------------------------
    const {id,qs} = useParams()
    const [localTitle,setLocalTitle] = useState("")
    const [localDescription,setLocalDescription] = useState("")
    const [localOptions,setLocalOptions] = useState(null)



    useEffect(()=>{
        //run once only if valid
        // console.log(question_options)

        if(question_title || question_description || question_options){
            setLocalTitle(question_title)
            setLocalDescription(question_description)
            setLocalOptions(question_options);


        }
    },[question_title,question_description,question_options])

    const handleTitleChange = async (val) =>{
        setLocalTitle(val)
        await setDoc(doc(db, "questions",id),
            {
                question_list:{
                    [`${qs}`]:{
                        question_title:val
                    }
                }
            }

            ,{ merge: true })

    }

    //handling choice
    const handleChoice = async () =>{

    }

    const handleDescriptionChange = async (val) =>{
        setLocalDescription(val)
        await setDoc(doc(db, "questions",id),
            {
                question_list:{
                    [`${qs}`]:{
                        question_description:val
                    }
                }
            }

            ,{ merge: true })

    }


    // ---------------------------

    const [currentClick,setCurrentClick] = useState(NaN)

    const handleClickChoice = (e,index,singleChoice) =>{
        e.preventDefault()
        setCurrentClick(index)
        console.log(singleChoice)
    }

    return (
        <form className="create-main-form-container">
            <span>{document && document.question_list[qs].page_name} &rarr;</span>
            <label>
                <input type="text"
                       placeholder="Question Title"
                       required
                       onChange={(e)=>handleTitleChange(e.target.value)}
                       value={localTitle}
                />
            </label>
            <label>
                <span>&nbsp;</span>
                <input type="text"
                       placeholder="Description(Optional)" className="create-form-description"
                       onChange={(e)=>handleDescriptionChange(e.target.value)}
                       value={localDescription}
                />
            </label>
            <div className="create-main-form-container-answers">
                {document && document.question_list[qs].options.map((btnVal,index)=>(

                    // we can get the value of this later to change...
                    <div key={index} className="choice-container">
                        <button className="btn-choice" onClick={(e)=>handleClickChoice(e,index,btnVal)}>
                            {btnVal.choice_name}
                        </button>
                        {currentClick === index && <ChoiceEditor index={index} btnVal={btnVal} setCurrentClick={setCurrentClick} document={document}/>}
                    </div>





                ) )}
            </div>
            {/*<button className="ok-btn">OK</button>*/}
        </form>
    );
}

export default Short;