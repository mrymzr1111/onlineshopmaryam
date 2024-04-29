import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";

const Welcome=()=>{
const[showWelcome,setshowWelcome]=useState();

useEffect(()=>{
  const data =  localStorage.getItem("show_app_intro")
  setshowWelcome(JSON.parse(data) ?? true)
},[])

const onHideWelcome=()=>{
  setshowWelcome(false);
localStorage.setItem("show_app_intro",JSON.stringify(false))
}
//we use awsome 
// dont show these tags {showelcome &&( condition)}


return(
    
<React.Fragment>
        { showWelcome && (
            <div className="container">
            <div className=" bg-primary text-white my-3">
              <FontAwesomeIcon
                icon={faClose}
                style={{ float: "right", margin: "5px" }}
                onClick={onHideWelcome}
              />
              <div className="p-4">welcome</div>
            </div>
          </div>
        )}
        </React.Fragment>
)


}
export default Welcome;