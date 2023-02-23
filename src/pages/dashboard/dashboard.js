import React from 'react';
import {useNavigate} from "react-router-dom";

import {useCreateForm} from "../../hooks/useCreateForm";

import defaultLogo from "../../pages/create/img/logo1.svg"

import "./dashboard.css";


function Dashboard(props) {
    const navigate = useNavigate();
    const {createDoc} = useCreateForm("questions");

    const handleClick = async () =>{
        const docId = await createDoc()
        //navigate to creation page after creating the page..
        navigate(`/create/${docId}/q0 `)


    }

    return (
        <>
           <div className="dashboard">
               <header>
                   <nav>
                       <img src={defaultLogo} alt="logo"/>
                   </nav>
               </header>
               <main className="dashboard-main">
                   <button onClick={e=>handleClick()} className="dashboard-create">+ Create a form</button>
               </main>
               <footer></footer>
           </div>
        </>


    );
}

export default Dashboard;