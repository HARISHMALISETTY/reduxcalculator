import React from "react";
 const CssComponent=()=>{
    
        return (<div>
            <h1 style={{textAlign:"center",backgroundColor:"ButtonHighlight",color:"green"}}>Inline-css</h1>
        <ul style={{listStyle:"none",display:"flex",justifyContent:"space-evenly",
        backgroundColor:"blueviolet",color:"white",fontWeight:"bold",height:"10vh",
        alignItems:"center",fontFamily:"Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>
            <li><img style={{height:"70px",marginLeft:"-130px"}}src="https://cdn-images-1.medium.com/max/396/1*xdhm7cqz8DwDzQNXxhZXVA@2x.png"></img></li>
            <li>Home</li>
            <li>Why</li>
            <li>Curriculum</li>
            <li>Team</li>
            <li>Employers</li>
            <li>Admission</li>
            <li>Price</li>
            <li>FAQ</li>
        </ul>
      
    </div>
    );
}
export default CssComponent;
