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
    const [pluginsDefault,setPluginsDefault] = useState()

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

        let tempArr = [...document.question_list[qs].options, {choice_name:"edit", answer_name:`q0`}]
        const res = await setDoc(doc(db, "questions",id),
            {
                question_list:{
                    [`${qs}`]:{
                        options:tempArr
                    }
                }
            }

            ,{ merge: true })



    }

    const handleOptionChange = async (e) =>{

        const res = await setDoc(doc(db, "questions",id),
            {
                plugins:e
            }

            ,{ merge: true })
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

                <Select
                    value={document && document.plugins}
                    isMulti
                    options={optionsPlugins}
                    className="select-react-main-choice"
                    onChange={(e)=>handleOptionChange(e)}

                />
            </div>

        </section>
    );
}

export default CreateQuestion;