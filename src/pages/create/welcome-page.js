import React, {useEffect, useRef, useState} from 'react';
import "./welcome-page.css";

import defaultImage from "./img/image-preview.png";

import defaultBg from "./img/bg.svg";

import {useUpload} from "../../hooks/useUpload";
import {useParams} from "react-router-dom";
import {doc, setDoc} from "firebase/firestore";
import {db} from "../../firebase/config";



function WelcomePage({
                         document,user,setQuestion_icon1,
                         setQuestion_icon2,setQuestion_icon3,
                         question_icon1,question_icon2,question_icon3,
                         question_bg,
                         setQuestion_bg,
                         question_title,
                         question_description

}) {


    const {id,qs} = useParams();

    const {uploadImg} = useUpload();
    const uploadHandler = async (e,elId) =>{

        const imgUrl = await uploadImg(e.target.files[0],id,qs,user,document,e.target.files[0].name)

        if(elId === "icon1"){

            await setDoc(doc(db, "questions",id),
                {
                    question_list:{
                        [`${qs}`]:{
                            question_icon1:`${imgUrl}`,
                        }
                    }
                }

                ,{ merge: true })

            setQuestion_icon1(imgUrl)

        }

        else if(elId === "icon2"){

            await setDoc(doc(db, "questions",id),
                {
                    question_list:{
                        [`${qs}`]:{
                            question_icon2:`${imgUrl}`,
                        }
                    }
                }

                ,{ merge: true })

            setQuestion_icon2(imgUrl)

        }

        else if(elId === "icon3"){

            await setDoc(doc(db, "questions",id),
                {
                    question_list:{
                        [`${qs}`]:{
                            question_icon3:`${imgUrl}`,
                        }
                    }
                }

                ,{ merge: true })

            setQuestion_icon3(imgUrl)

        }

        else if(elId === "bgIcon"){

            await setDoc(doc(db, "questions",id),
                {
                    question_list:{
                        [`${qs}`]:{
                            question_bg:`${imgUrl}`,
                        }
                    }
                }

                ,{ merge: true })

            setQuestion_bg(imgUrl)

        }
    }





    const [objToPut,setObjToPut] = useState({})


    const [localTitle,setLocalTitle] = useState("")
    const [localDescription,setLocalDescription] = useState("")



    useEffect(()=>{
        //run once only if valid



        if(question_title || question_description){
            setLocalTitle(question_title)
            setLocalDescription(question_description)


        }
    },[question_title,question_description])

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



    return (
        <form className="welcome-page">
            <div className="welcome-page-header">
                <label>
                    {question_icon1 && <img src={question_icon1} alt="Logo"/>}
                    {!question_icon1 && <span>Logo here</span>}
                    <input type="file" className="welcome-page-header-logo-input" id="icon1" onChange={e=>uploadHandler(e,e.target.id)}/>
                </label>
            </div>
            <div className="welcome-page-main">
                <section className="welcome-page-main-left">
                    <label>
                        <img src={question_bg ? question_bg : defaultImage} alt="" id="sideImg"/>
                        <input type="file" className="welcome-page-main-background-image" id="bgIcon" onChange={e=>uploadHandler(e,e.target.id)} />
                    </label>
                </section >
                <section className="welcome-page-main-right">

                    <div className="welcome-page-main-right-logo-container">
                        <label>
                            {question_icon2 && <img src={question_icon2} alt="Logo"/>}
                            {!question_icon2 && <span>Logo here</span>}
                            <input type="file" className="welcome-page-header-logo-input" id="icon2" onChange={e=>uploadHandler(e,e.target.id)}/>
                        </label>
                        <label>
                            {question_icon3 && <img src={question_icon3} alt="Logo"/>}
                            {!question_icon3 && <span>Logo here</span>}
                            <input type="file" className="welcome-page-header-logo-input" id="icon3" onChange={e=>uploadHandler(e,e.target.id)}/>
                        </label>
                    </div>

                    <div className="welcome-page-main-right-container">
                        <input
                            type="text"

                            className="welcome-page-main-right-container-title"
                            placeholder="Welcome Page Title Here"
                            onChange={(e)=>handleTitleChange(e.target.value)}
                            value={localTitle}

                        />
                        <textarea
                            placeholder="Description Here"
                            className="welcome-page-main-right-container-description"
                            value={localDescription}
                            onChange={(e)=>handleDescriptionChange(e.target.value)}

                        ></textarea>

                    </div>

                    {/*THIS NEED TO BE BUTTON TYPE*/}
                    {/*THEN INSIDE WILL BE INPUT*/}
                    {/*SO THAT WE CAN CHANGE THE VALUE*/}
                    {/*OF THE TEXT INSIDE WITHOUT USING contentEditable*/}
                    <input
                        type="button"
                        className="welcome-page-main-right-container-btn"
                        onClick={e=>(e.preventDefault())}
                        value="START"


                    />



                </section>
            </div>

        </form>
    );
}

export default WelcomePage;