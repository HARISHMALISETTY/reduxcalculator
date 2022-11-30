import React from "react";
const CssComponent_internal=()=>{
    const flexParent={listStyle:"none",display:"flex",justifyContent:"space-evenly",
    backgroundColor:"orange",color:"green",fontWeight:"bold",height:"10vh",
    alignItems:"center",fontFamily:"Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",fontSize:"3vh"}

    const pic={height:"70px",marginLeft:"-130px"}

    const line={textAlign:"center",backgroundColor:"ButtonHighlight",color:"violet"}
     return(<div >
         <h1 style={line}>Internal-css</h1>
        <ul style={flexParent}>
            <li><img style={pic}src="https://cdn-images-1.medium.com/max/396/1*xdhm7cqz8DwDzQNXxhZXVA@2x.png"></img></li>
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
export default CssComponent_internal;