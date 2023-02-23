import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";

import { doc, setDoc,deleteField,updateDoc } from "firebase/firestore";
import {db} from "../../firebase/config";


function CreateSidebar({exampleQuestionDB,document}) {

    const {id,qs} = useParams()

    const [sideQ,setSideQ] = useState(null)

    // const {Update} = useUpdate("questions",id, addQ)



    const sortingFunction = (x, y)=> x.page_num - y.page_num;

    //when click add data to the current document
    const handleClick = async () =>{
        if(document && sideQ){
            let prevItem = sideQ[sideQ.length-1].page_num;
            let nextQuestionItem = Number(prevItem) + 1;
            let currentQ = `q${nextQuestionItem}`;

            //create new document
            await setDoc(doc(db, "questions",id),
                {
                    question_list:{
                        [`${currentQ}`]:{
                            options:[

                            ],
                            page_name:`q${nextQuestionItem}`,
                            page_num:`${nextQuestionItem}`,
                            question_bg:"",
                            question_description:"",
                            question_description_placeholder:"",
                            question_icon1:"",
                            question_icon2:"",
                            question_icon3:"",
                            question_title:`Question Title ${currentQ}`,
                            question_title_placeholder:"",
                            question_type: "short"

                        }
                    }
                }

                ,{ merge: true })

        }
    }
    //if not null run...
    //likely scenario is that while document is not yet loaded

    //delete particular question
    //then redirect to the question before
    const navigate = useNavigate();
    const handleDelete = async (questionPageName) =>{

        let tempArr = []
        let prevQuestion = "";


        Object.keys(document.question_list).map(q=>
            tempArr.push(document.question_list[q])
        )
        tempArr.sort(sortingFunction)



        tempArr.forEach((item,index)=>{
            if(item.page_name === questionPageName){
                prevQuestion = index
                prevQuestion = tempArr[prevQuestion-1].page_name

            }
        })


        await setDoc(doc(db, "questions",id),
            {
                question_list:{
                    [`${questionPageName}`]:deleteField()
                }
            }

            ,{ merge: true })

        //bug on deleting
        //for now using window.location.replace to force reload the browser
        console.log(prevQuestion)
        window.location.replace(`/create/${id}/${prevQuestion}`)

        // console.log(tempArr)




    }




    useEffect(()=>{

        if(document){
            let tempQ = [];
            Object.keys(document.question_list).map((key)=> tempQ.push(document.question_list[key]))
            //we need to sort it from 0-1,2,3,4 as we need the last item page_num for creating questions
            tempQ.sort(sortingFunction);
            setSideQ(tempQ)
        }



    },[document])



    return (

        <section className="create-main-sidebar">
            <div className="create-main-sidebar-action">
                <span>Content</span>
                <button
                    onClick={handleClick}
                    className="create-header-btn bg-grey create-add-btn">+</button>
            </div>

            <div className="create-main-sidebar-content">
                <ul className="create-main-sidebar-content-ul">

                    {sideQ && sideQ.map(question=> (
                        <Link to={`/create/${id}/${question.page_name}`}  key={`${question.page_name}`}>
                            <li key={question.page_title} className={question.page_name === qs ? "active-question" : ""}>
                                {!(question.page_name === "q0") && <span className="trash-icon" onClick={()=>handleDelete(question.page_name)}>X</span> }
                                <p className="choice-title">
                                    <span className="choice-title-em">{question.page_name}. </span>
                                    {question.question_title}
                                </p>
                            </li>
                        </Link>

                    ) )}

                </ul>
            </div>
        </section>
    );
}

export default CreateSidebar;