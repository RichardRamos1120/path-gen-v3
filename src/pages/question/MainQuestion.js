import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import { jsPDF } from "jspdf";





import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



function MainQuestion({document}) {
    const {qs,id} = useParams()
    const [toPdf,setToPdf] = useState("");

    const generatePdf = () =>{
        // issue not generating the description to pdf
        const doc = new jsPDF();
        doc.text(toPdf, 10, 10);
        doc.save("path-gen-form.pdf");
        setToPdf("")

    }
    const handleToPdf = (choice,title,description) =>{
        let question = `Question: ${title}`
        let userChoice = `Answer: ${choice.choice_name}`;
        let descript  = `Description: ${description}`

        setToPdf([...toPdf,question,descript,userChoice,""])

    }

    let [percentage,setPercentage] = useState(0)

    let [totalQ,setTotalQ] = useState(null)


    // calculate first how many question we have
    //find the current index of the qs
    // calculate that base on total length of the question in array
    //make the percentage 100% if it is already generating pdf

    useEffect(()=>{

        if(document && !totalQ){
            let tempArr = []
            Object.keys(document.question_list).map(obj=>{
                tempArr.push(document.question_list[obj])
            })
            tempArr.sort((a,b) => Number(a.page_num) - Number(b.page_num));

            setTotalQ(tempArr)
        }

        if(totalQ){
            totalQ.map((questionQ,index)=>{

                if(questionQ.page_name === qs){
                    let currentPercent = Math.round(index/(totalQ.length - 1)*100)
                    setPercentage(currentPercent)
                }
            })
        }



    },[totalQ,document,qs])



    return (
        <div className="question-container">
            {document.question_list[qs] && (<>

                <header className="question-header">
                    <nav>
                        <img src={document.question_list.q0.question_icon1} alt="icon"/>
                    </nav>
                </header>
                <main className="question-main">

                    <section className={document && document.question_list[qs].question_type !== "welcome page" && document.plugins.length ? "question-plugins" : "no-display" }>
                        {document.plugins.map((plugin,index)=>(
                            <React.Fragment key={plugin.value}>
                                {plugin.value === "progressbar"
                                    ? <div key={plugin.label} className="individual-plugin-container">
                                        <CircularProgressbar
                                            value={percentage}
                                            text={`${percentage}%`}
                                            styles={buildStyles({
                                                pathColor: `rgba(234, 102, 23,1)`,
                                                textColor: `rgba(234, 102, 23,1)`

                                            })}
                                        />;
                                    </div>
                                    : <div key={plugin.label} className="individual-plugin-container">
                                        {plugin.label}
                                    </div>
                                }
                            </React.Fragment>
                        )) }
                    </section>
                    <section className="question-bg">

                        {document.question_list[qs].question_type === "welcome page" &&
                            (<img className="welcome-bg" src={document.question_list[qs].question_bg} alt="background"/>)
                        }

                    </section>
                    <section className="question-userChoice" >
                        <div className="question-userChoice-container">
                            {/*we need to check first the type here*/}
                            {/*or might as well create a new component for different types i.e welcome,short,multi etc..*/}

                            {document.question_list[qs].question_type === "welcome page" &&
                                <>
                                    <img className="welcome-icon-2" src={document.question_list[qs].question_icon2} alt="icon"/>
                                    <img className="welcome-icon-3" src={document.question_list[qs].question_icon3} alt="icon"/>

                                    <h3 className="welcome-title">{document.question_list[qs].question_title}</h3>
                                    <p className="welcome-description">{document.question_list[qs].question_description}</p>

                                    <Link to={`/question/${id}/q1`}  ><button className="welcome-button">START</button></Link>
                                </>
                            }

                            {/*short type*/}

                            {document.question_list[qs].question_type === "short" &&
                                <div id="question-short"  className={document.question_list[qs].question_type === "short"
                                    ? "short-background" : ""}>
                                    <div className="question-short-container">
                                        <h3 className="welcome-title"><span className="page-num">q{document.question_list[qs].page_num} →</span> {document.question_list[qs].question_title}</h3>
                                        <p className="welcome-description">{document.question_list[qs].question_description}</p>

                                        <div className="button-container">
                                            {document.question_list[qs].options.map((choice,index)=>(
                                                <React.Fragment key={index}>

                                                    {choice.choice_name.toLowerCase() === "generate pdf"
                                                        ? <button onClick={generatePdf} className="welcome-button"><span>&nbsp;</span>{choice.choice_name}</button>
                                                        : <Link to={`/question/${id}/${choice.answer_name}`}><button className="welcome-button" onClick={()=>handleToPdf(choice,
                                                            document.question_list[qs].question_title,document.question_list[qs].question_description)}><span>&nbsp;</span>{choice.choice_name}</button>
                                                        </Link>
                                                    }
                                                </React.Fragment>
                                            ))}
                                        </div>

                                    </div>

                                </div>
                            }


                            {/*multi type*/}

                        </div>
                    </section>
                </main>
                <footer className="question-footer">
                    &nbsp;
                </footer>


            </>)}
        </div>
    );
}

export default MainQuestion;