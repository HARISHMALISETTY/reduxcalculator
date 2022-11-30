import React from "react";
import '../CssComponent/CssComponentExternal.css'
class State_class_event extends React.Component{
        constructor(){
                                super();
                                this.state={
                                            name:"harish",
                                            num:1           
                                            };           
                            }
   
   click=()=>{this.setState({name:"Harish Malisetty"})}
  dec=()=>{this.setState({num:this.state.num - 1})}
  inc=()=>{this.setState({num:this.state.num + 1})}
  decby5=()=>{this.setState({num:this.state.num - 5})}
  incby5=()=>{this.setState({num:this.state.num + 5})}
  decby10=()=>{this.setState({num:this.state.num-10})}
  incby10=()=>{this.setState({num:this.state.num+10})}
  mulby2=()=>{this.setState({num:this.state.num*2})}
  mulby4=()=>{this.setState({num:this.state.num*4})}
  by2=()=>{this.setState({num:this.state.num%2})}

render(){
   
    return (
    <div><center>
        <h1 >USING CLASS COMPONENT</h1>
        <h1>{this.state.name}</h1>
        <button onClick={this.click}>name change</button>  <br></br>     
        <button onClick={this.decby5}>-5</button>
        <button onClick={this.dec}>-</button> 
        <button onClick={this.decby10}>-10</button>  
        <button onClick={this.by2}>%2</button>     
        <span>{this.state.num}</span>
        <button onClick={this.inc}>+</button>
        <button onClick={this.incby5}>+5</button>
        <button onClick={this.incby10}>+10</button>
        <button onClick={this.mulby2}>*2</button>
        <button onClick={this.mulby4}>*4</button>
        </center>
        
    </div>
    );
}
}
export default State_class_event; 