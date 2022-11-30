import React from "react";
import '../CssComponent/CssComponentExternal.css';
class ArrObjClass extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(<div>
            <center>
             <h1>using Class component</h1>
            <table>            
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Location</th>
                </tr>
               
                {this.props.StudObj.map((eachObj)=>(
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
}
export default ArrObjClass;