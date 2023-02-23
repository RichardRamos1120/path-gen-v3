import React, {useEffect, useState} from 'react';
import Select from "react-select";
import {useParams} from "react-router-dom";
import {doc, setDoc} from "firebase/firestore";
import {db} from "../../firebase/config";

function CreateQuestion({optionsType,optionsPlugins,currentType,setCurrentType,document}) {
    const {id,qs} = useParams();
    const handleChange = async (e) =>{

        await setDoc(doc(db, "questions",id),
            {
                question_list:{
                    [`${qs}`]:{
                        question_type:`${e.value}`,
                    }
                }
            }

            ,{ merge: true })

    }

    const [nextQuestion,setNextQuestion] = useState(null)
    let nextQuestionRef = null;
    useEffect(()=>{

        if(document){
            nextQuestionRef = document.question_list[qs].page_num;
            nextQuestionRef++;
            setNextQuestion(nextQuestionRef)
            return ()=>0;

        }



    },[document])
    const handleClick = async (e) =>{

        e.preventDefault();
        let nextQuestionRef = document.question_list[qs].page_num;

        let tempArr = [...document.question_list[qs].options,{next:`q${nextQuestion}`  }]
        const res = await setDoc(doc(db, "questions",id),
            {
                question_list:{
                    [`${qs}`]:{
                        options:tempArr
                    }
                }
            }

            ,{ merge: true })

        console.log(res)

    }



    return (
        <section className="create-main-choice">
            <div className="create-main-sidebar-action">
                <span>Question</span>
            </div>
            <div className="create-main-choice-action">
                <span>Type</span>
                <Select
                    options={optionsType}
                    className="select-react-main-choice"
                    onChange={(e)=>handleChange(e)}
                    value={currentType}
                    placeholder={currentType}
                />
            </div>
            <div className="create-main-choice-action">
                <span>Add Option</span>
                <button
                    className="create-header-btn bg-grey create-add-btn"
                    onClick={handleClick}
                >+</button>
            </div>

            <div className="create-main-choice-action">
                <span>Add Plugins</span>
                <Select isMulti options={optionsPlugins} className="select-react-main-choice"/>
            </div>

        </section>
    );
}

export default CreateQuestion;