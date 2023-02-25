import React, {useEffect, useState} from 'react';

import "./ChoiceEditor.css";

import {useUpdate} from "../../hooks/useUpdate";
import {useParams} from "react-router-dom";

function ChoiceEditor({index,btnVal,setCurrentClick,document}) {



    const {id,qs} = useParams()

    const {update} = useUpdate(id,qs,"short")



    const handleCloseChoice = () =>{
        setCurrentClick(NaN)
        // console.log(document.question_list[qs].options[index].answer_name)
    }

    const handleInputChange = (e) =>{
        let title = e.target.value

        let newOptions = [...document.question_list[qs].options]

        // we are editing the document object directly
        newOptions[index].choice_name = title

        //so the value here is already change as we are directly
        //changing the value from the memory

        let allValue = [{...document.question_list[qs]}]


        update(allValue[0]
        )


    }


    const [choices,setChoices] = useState(null)
    const [choices1,setChoices1] = useState(null)

    useEffect(()=>{
        let newChoice = [...Object.keys(document.question_list), "generatePDF"];
        setChoices1(setChoices1)

        setChoices(document.question_list)
        // console.log(choices)

    },[choices,document])


    const handleChoiceSelect = (e) =>{


        let branchAnswer = e.target.value

        let newOptions = [...document.question_list[qs].options]

        // we are editing the document object directly
        newOptions[index].answer_name = branchAnswer

        //so the value here is already change as we are directly
        //changing the value from the memory

        let allValue = [{...document.question_list[qs]}]


        update(allValue[0]
        )
    }
    return (
        <div className="choice-editor">

            <header className="choice-editor-header">
                <h6>{btnVal.choice_name} button</h6>
                <span onClick={handleCloseChoice}>x</span>
            </header>
            <main className="choice-editor-main">
                <label>
                    <span>Edit Button</span>
                    <input type="text"
                           value={btnVal.choice_name}
                           onChange={handleInputChange}/>
                </label>
                <label>
                    <span>Edit Branch</span>
                    <select onChange={handleChoiceSelect}>
                        { Object.keys(document.question_list).map((doc) =>(

                            <React.Fragment key={doc}>
                                {document.question_list[qs].options[index].answer_name === doc
                                    ? <>
                                        <option value={doc} selected>{doc}</option>
                                    </>
                                    : <>
                                        <option value={doc}>{doc}</option>
                                    </>
                                }
                            </React.Fragment>

                        ) ) }
                    </select>
                </label>
            </main>
            <footer></footer>

        </div>
    );
}

export default ChoiceEditor;