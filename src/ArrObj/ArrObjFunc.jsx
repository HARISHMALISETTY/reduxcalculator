import React from "react";
import '../CssComponent/CssComponentExternal.css';
const ArrObjFunc=(props)=>{
    return(<div>
        <center>
        <h1>using functional component</h1>
        <table>            
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Location</th>
            </tr>
           
            {props.StudObj.map((eachObj)=>(
                <tr>
                    <td>{eachObj.id}</td>
                    <td>{eachObj.name}</td>
                    <td>{eachObj.gender}</td>
                    <td>{eachObj.loc}</td>
                </tr>                        
                
                ))}   
        
        </table>
        </center>
    </div>);
}
export default ArrObjFunc;