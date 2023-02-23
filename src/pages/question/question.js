import React from 'react';
import {useCollection} from "../../hooks/useCollection";
// css
import "./question.css";

// component page
import MainQuestion from "./MainQuestion";

function Question(props) {

    const {document} = useCollection();


    return (
        <div>
            {document && <MainQuestion document={document}/>}
        </div>
    );
}

export default Question;