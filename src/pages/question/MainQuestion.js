import React from 'react';
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";

function MainQuestion({document}) {
    const {qs} = useParams()
    console.log(qs)
    return (
        <div className="question-container">
            {document.question_list[qs] && (<>

                <header className="question-header">
                    <nav>
                        <img src={document.question_list.q0.question_icon1} alt="icon"/>
                    </nav>
                </header>
                <main className="question-main">
                    <section className="question-plugins">
                        {/*{document.plugins }*/}
                    </section>
                    <section className="question-bg">

                        {document.question_list[qs].question_type === "welcome page" &&
                            (<img className="welcome-bg" src={document.question_list[qs].question_bg} alt="background"/>)
                        }
                    </section>
                    <section className="question-userChoice">
                        <div className="question-userChoice-container">
                            {/*we need to check first the type here*/}
                            {/*or might as well create a new component for different types i.e welcome,short,multi etc..*/}

                            {document.question_list[qs].question_type === "welcome page" &&
                                <>
                                    <img className="welcome-icon-2" src={document.question_list[qs].question_icon2} alt="icon"/>
                                    <img className="welcome-icon-3" src={document.question_list[qs].question_icon3} alt="icon"/>

                                    <h3 className="welcome-title">{document.question_list[qs].question_title}</h3>
                                    <p className="welcome-description">{document.question_list[qs].question_description}</p>

                                    <Link to={`/question/${document.id}/q1`}  ><button className="welcome-button">START</button></Link>
                                </>
                            }

                            {/*short type*/}

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