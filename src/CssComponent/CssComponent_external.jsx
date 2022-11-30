import React from "react";
import './CssComponentExternal.css'

const CssComponentExternal=()=>{
    return(<div >
        <h1 className="line">External-css</h1>
        <ul className="flexParent">
            <li><img id="pic" src="https://cdn-images-1.medium.com/max/396/1*xdhm7cqz8DwDzQNXxhZXVA@2x.png"></img></li>
            <li>Home</li>
            <li>Why</li>
            <li>Curriculum</li>
            <li>Team</li>
            <li>Employers</li>
            <li>Admission</li>
            <li>Price</li>
            <li>FAQ</li>
        </ul>
      
    </div>)
}
export default CssComponentExternal;