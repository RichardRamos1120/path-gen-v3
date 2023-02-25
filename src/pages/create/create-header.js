import React from 'react';
import EyeLogo from "./eye-2-svgrepo-com.svg";

import {useLogout} from "../../hooks/useLogout";

function CreateHeader({setCurrentRoot,id,setIsCopyVisible}) {

    const handleClick = () =>{

        setCurrentRoot(`${window.location.origin}/question/${id}/q0`)
        setIsCopyVisible("block")

    }



    const {logout} = useLogout();
    return (
        <header>
            <img src="/img/logoS.svg" className="firefoundry-logo" alt="logo"/>


            <div className="create-header-action">
                <button className="create-header-btn bg-grey"><img src={EyeLogo} alt="preview icon" className="preview-icon"/></button>
                <button className="create-header-btn bg-dark" onClick={handleClick}>Publish</button>
                <button className="create-header-btn bg-dark" onClick={logout}>Logout</button>
            </div>
        </header>
    );
}

export default CreateHeader;