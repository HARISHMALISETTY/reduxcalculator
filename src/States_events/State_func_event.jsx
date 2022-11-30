import React,{useState} from "react";
const State_func_event=()=>{
    const [name,setName]=useState("harish"); 
    const[num,setNum]=useState(1);

    const nameChange=()=>{setName("harishmalisetty");};
    const dec=()=>{setNum(num - 1);};
    const inc=()=>{setNum(num+1);};
   const decby5=()=>{setNum(num-5);};
   const incby5=()=>{setNum(num+5);};
   const  decby10=()=>{setNum(num-10);};
   const incby10=()=>{setNum(num+10);};
   const mulby2=()=>{setNum(num*2);};
   const mulby4=()=>{setNum(num*4);};
   const by2=()=>{setNum(num%2);};
    return( <div>
       <center>
       <h1>USING FUNCTION COMPONENT</h1>
       <h1>{name}</h1>
       <button onClick={nameChange}>namechange</button><br></br>        
        <button onClick={by2}>%2</button> 
        <button onClick={decby10}>-10</button>  
        <button onClick={decby5}>-5</button>
        <button onClick={dec}>-</button>
        <span>{num}</span>
        <button onClick={inc}>+</button>        
        <button onClick={incby5}>+5</button>
        <button onClick={incby10}>+10</button>
        <button onClick={mulby2}>*2</button>
        <button onClick={mulby4}>*4</button>
       </center>

    </div>
    );
}
 export default State_func_event;