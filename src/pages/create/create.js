import React, {useEffect, useState} from 'react';
import {useAuthContext} from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import {useUpdate} from "../../hooks/useUpdate";



import "./create.css";

import { useParams } from 'react-router-dom';

import {useCollection} from "../../hooks/useCollection";

//components
import Short from "./short";
import CreateHeader from "./create-header";
import CreateQuestion from "./create-question";
import CreateSidebar from "./create-sidebar";
import WelcomePage from "./welcome-page";
import {doc, setDoc} from "firebase/firestore";
import {db} from "../../firebase/config";



const optionsType = [
    {value: 'welcome page', label: 'welcome page'},
    { value: 'short', label: 'short' },

];

const optionsPlugins = [
    { value: 'progressbar', label: 'progress bar' },
    { value: 'plugin2', label: 'plugin2' },
    { value: 'plugin3', label: 'plugin3' },
];


function Create() {



    let {id,qs} = useParams();
    const [currentDocument,setCurrentDocument] = useState()
    const {document} = useCollection();

    const {user} = useAuthContext()


    const [currentQ,setCurrentQ] = useState("q0")


    //need to be updated coming from db
    const [currentType,setCurrentType] = useState(null);


    //current params that
    //we can use useReducer here or just useState
    const [pageName,setPageName] = useState(null)
    const [question_bg,setQuestion_bg] = useState(null)
    const [question_description,setQuestion_description] = useState(null)
    const [question_description_placeholder,setQuestion_description_placeholder] = useState(null)
    const [question_icon1,setQuestion_icon1] = useState(null)
    const [question_icon2,setQuestion_icon2] = useState(null)
    const [question_icon3,setQuestion_icon3] = useState(null)
    const [question_title,setQuestion_title] = useState(null)
    const [question_type,setQuestion_type] = useState(null)
    const [question_options,setQuestion_options] = useState(null)

    //useEffect here with all the params so everytime we change
    //we will pass all the current value to the database
    //after that we will set this value again back to null



    useEffect(()=>{

        if(document){

            //first get all the changes coming from document
            setPageName(document.question_list[qs].page_name)
            setQuestion_bg(document.question_list[qs].question_bg)
            setQuestion_options(document.question_list[qs].options)
            setQuestion_description(document.question_list[qs].question_description)
            setQuestion_description_placeholder(document.question_list[qs].question_description_placeholder);
            setQuestion_icon1(document.question_list[qs].question_icon1);
            setQuestion_icon2(document.question_list[qs].question_icon2);
            setQuestion_icon3(document.question_list[qs].question_icon3);
            setQuestion_title(document.question_list[qs].question_title);
            setQuestion_type(document.question_list[qs].question_type);
            setCurrentType(document.question_list[qs].question_type)

            //then if there is any changes on this element update the document


            //query data to be put into the dashboard



        }

    },[document,
        qs,
        pageName,
        question_bg,
        question_description,
        question_description_placeholder,
        question_icon1,
        question_icon2,
        question_icon3,
        question_title,
        currentType
    ])

    const [currentRoot,setCurrentRoot] = useState("");
    const [isCopyVisible,setIsCopyVisible] = useState("none")
    const [isCopiedVisible,setIsCopiedVisible] = useState("none")
    const navigate = useNavigate();

    const [titleValue,setTitleValue] = useState("")
    const handleCopy = () =>{
        navigator.clipboard.writeText(currentRoot);
        setIsCopiedVisible("flex")
        setTimeout(()=>{
            setIsCopiedVisible("none")
            setIsCopyVisible("none")
            navigate("/dashboard")

        },1000)
    }



    const handleSubmitTitle = async (e) =>{
        e.preventDefault()

        await setDoc(doc(db, "questions",id),
            {
                title:titleValue
            }

            ,{ merge: true })


    }






    return (

        <>
            {document && !document.title
                ? <div className="change-title">
                    <form onSubmit={handleSubmitTitle}>
                        <label>
                            <span>What is the title of this project?</span>
                            <input
                                value={titleValue}
                                onChange={(e)=>setTitleValue(e.target.value)}
                                type="text" placeholder="Project Title..."/>
                        </label>
                        <button>Create</button>
                    </form>
                </div> 
                :<div className="create">
                <CreateHeader
                    setCurrentRoot={setCurrentRoot} id={id}
                    currentRoot={currentRoot}
                    setIsCopyVisible={setIsCopyVisible}
                />
                <div id="after-publish" style={{display:isCopyVisible}}>
                    <h3>
                        Published successfully.
                    </h3>
                    <div className="after-publish-container">
                        <label className="">
                            <p>Direct URL</p>
                            {document && <input className="publish-input" type="text" value={currentRoot} readOnly/>}
                        </label>
                        <button onClick={handleCopy}>Copy</button>
                    </div>
                    <p className="copied-to-clipboard" style={{display:isCopiedVisible}}>Copied to clipboard.</p>
                </div>
                <main className="create-main">
                    {/*sidebar*/}
                    <CreateSidebar
                        document={document}
                    />

                    {/*main quesrtion*/}
                    <section className="create-main-form">
                        {currentType === "short" ? <Short
                                document={document}
                                user={user}
                                question_title={question_title}
                                question_description={question_description}
                                question_options={question_options}
                                setQuestion_options={setQuestion_options}
                            />
                            : ""}
                        {currentType === "welcome page" ? <WelcomePage
                                user={user}
                                document={document}
                                question_icon1={question_icon1}
                                question_icon2={question_icon2}
                                question_icon3={question_icon3}
                                setQuestion_icon1={setQuestion_icon1}
                                setQuestion_icon2={setQuestion_icon2}
                                setQuestion_icon3={setQuestion_icon3}
                                setQuestion_bg={setQuestion_bg}
                                question_bg={question_bg}
                                question_title={question_title}
                                setQuestion_title={setQuestion_title}
                                setQuestion_description={setQuestion_description}
                                question_description={question_description}

                            />
                            : ""}
                    </section>

                    {/*question selection*/}
                    <CreateQuestion
                        document={document}
                        optionsType={optionsType}
                        optionsPlugins={optionsPlugins}
                        currentType={currentType}
                        setCurrentType={setCurrentType}
                        pageName={pageName}
                        question_bg={question_bg}
                        question_description={question_description}
                        setQuestion_description={setQuestion_description}
                        question_description_placeholder={question_description_placeholder}
                        question_options={question_options}
                        setQuestion_options={setQuestion_options}

                    />
                    {/*<button >test change</button>*/}
                </main>

            </div>
            }
        </>


    );
}

export default Create;
