import React from 'react';
import EyeLogo from "./eye-2-svgrepo-com.svg";

import {useLogout} from "../../hooks/useLogout";

function CreateHeader() {

    const handleClick = () =>{

        let after = document.querySelector("#after-publish")

        console.log(after)
    }
    const {logout} = useLogout();
    return (
        <header>
            <img src="/img/logoS.svg" className="firefoundry-logo" alt="logo"/>


            <div className="create-header-action">
                <button className="create-header-btn bg-grey"><img src={EyeLogo} alt="preview icon" className="preview-icon"/></button>
                <button className="create-header-btn bg-dark" >Publish</button>
                <button className="create-header-btn bg-dark" onClick={logout}>Logout</button>
            </div>
        </header>
    );
}

export default CreateHeader;