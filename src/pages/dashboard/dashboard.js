import React, {useEffect, useMemo, useState} from 'react';
import {useNavigate} from "react-router-dom";

import {useCreateForm} from "../../hooks/useCreateForm";


import {useAuthContext} from "../../hooks/useAuthContext";

import defaultLogo from "../../pages/create/img/logo1.svg"

import TimeAgo from 'react-timeago';

import { collection, query, where,onSnapshot,orderBy } from "firebase/firestore";
import {db} from "../../firebase/config"


import "./dashboard.css";
import {useLogout} from "../../hooks/useLogout";



let isLoad = 0;

function Dashboard(props) {


    const {user} = useAuthContext()

    const [userId,setUserId] = useState(null)


    const navigate = useNavigate();
    const {createDoc} = useCreateForm("questions");



    const handleClick = async () =>{
        const docId = await createDoc()
        //navigate to creation page after creating the page..
        navigate(`/create/${docId}/q0 `)

    }


    let [doc,setDoc] = useState([])



    useEffect(()=>{

        let unsubscribe
        if(user){
            const q = query(collection(db, "questions") ,where("creator_id","==",user.uid),orderBy("created_at", "desc"));
            unsubscribe = onSnapshot(q, (querySnapshot) => {
                const localDoc = [];
                querySnapshot.forEach((doc) => {
                    localDoc.push({...doc.data(),doc_id:doc.id})
                });
                setDoc(localDoc)

            });
            console.log("hello")
        }

        return ()=> {
            console.log("unsub")
            unsubscribe()
        };

    },[user])

    const navigate1 = useNavigate()
    const handleClickForDocItem = (docId) =>{
        navigate1(`/create/${docId}/q0`)
    }

    const {logout} = useLogout();

    return (
        <>
           <div className="dashboard">
               <header className="dashboard-header">
                   <nav>
                       <img src={defaultLogo} alt="logo"/>
                   </nav>
                   <button className="log-out-btn" onClick={logout}>Log out</button>
               </header>
               <main className="dashboard-main">
                   <button onClick={e=>handleClick()} className="dashboard-create">+ Create a form</button>

                   {doc && doc.map((docItem)=> (
                       <div key={docItem.doc_id} className="dashboard-question-item" onClick={()=>handleClickForDocItem(docItem.doc_id)}>
                           <h3>{docItem.title}</h3>
                           <span><TimeAgo date={docItem.created_at.toDate()}/></span>
                       </div>
                   ))}
               </main>
               <footer></footer>
           </div>
        </>


    );
}

export default Dashboard;