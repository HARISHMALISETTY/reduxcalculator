import logo from './logo.svg';
import './App.css';
import React from 'react';
import store from "./redux/store";
import CounterRedux from './ReduxComponent/CounterRedux';
import {Provider} from 'react-redux';
import FunctionalAppHeader from './Function/FunctionalAppHeader'
import ClassAppHeader from './class/ClassAppHeader';
import ClassAppMain from './class/ClassAppMain';
import ClassAppFooter from './class/ClassAppFooter';
import FunctionAppMain from './Function/FunctionalAppMain';
import FunctionalAppFooter from './Function/FunctionalAppFooter';
import Props_Headerclass from './props_class/Props_Headerclass';
import Props_HeaderFunc from './props_function/props_HeaderFunc';
import CssComponent from './CssComponent/CssComponent_inline';
import CssComponent_internal from './CssComponent/CssComponent_internal';
import ArrClass from './Arr/ArrClass';
import ArrFunc from './Arr/ArrFunc';
import ArrObjClass from './ArrObj/ArrObjClass';
import ArrObjFunc from './ArrObj/ArrObjFunc';
import LifeCycleComp from './lifeCycle/lifecycleComp';
import LifeCycleFunComp from './lifeCycle/lifCycleFun';
 
import CssComponentExternal from './CssComponent/CssComponent_external';
import State_class_event from './States_events/State_class_event';
import State_func_event from './States_events/State_func_event';
import FormClassComponent from './FormComponents/FormClassComponent';
import FormFunComp from './FormComponents/FormFunComp';
import RouterComp from './RouterComponent/Routercomp';
import GetMethodAxios from './servercomponents/getMethodAxios';
import GetMethodAxiosJson from './servercomponents/getMethodAxiosJson';
import GetMethodAxiosJsonForms from './servercomponents/getMethodAxiosForms';
import Comp1 from './ContextApiComp/comp1';
import GoogleLoginComp from  './Login Components/GoogleLoginComp';

export const messageContext=React.createContext();

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//const data={name:'harish',age:28,role:'developer',loc:'Nellore'}



class App extends React.Component{
  render(){
    return (
      // <Provider store={store}>
      // <div>
      //   <CounterRedux/>                       
      // </div>
      // </Provider>
         <div>
          <ClassAppHeader />
          <ClassAppMain/>
          <ClassAppFooter/>
          <FunctionalAppHeader />
          <FunctionAppMain/>
          <FunctionalAppFooter/>
          <Props_Headerclass name="harish"
          age={28} 
          condition={true}
          skils={["html","css","js","react_js","redux"]}         
          />
          
          <Props_HeaderFunc name={"28"}
          age={28} 
          condition={false}
          skils={["html","css","js","react_js","redux"]}/> 
           <RouterComp/>

            <CssComponent/>
          <CssComponent_internal/>
           <CssComponentExternal/>
           <State_class_event/>
          <State_func_event/>
           <ArrClass students={["chanakya","harish",'saiteja','saikumar','praveen','veneela','anunsha','satish','mahendra','ganesh']}/>
           <ArrFunc students={["chanakya","harish",'saiteja','saikumar','praveen','veneela','anunsha','satish','mahendra','ganesh']}/>
           <ArrObjClass StudObj={[{id:1,name:"chanakya",gender:'M',loc:'Anakapalli'},
           {id:2,name:"harish",gender:'M',loc:'Nellore'},
           {id:3,name:"saiteja",gender:'M',loc:'guntur'},
           {id:4,name:"saikumar",gender:'M',loc:'nayudupet'},
           {id:5,name:"satish",gender:'M',loc:'hyd'},
           {id:6,name:"veneela",gender:'F',loc:'rajhumandry'},
           {id:7,name:"Anusha",gender:'F',loc:'guntur'}]}/>
          <ArrObjFunc StudObj={[{id:1,name:"chanakya",gender:'M',loc:'Anakapalli'},
           {id:2,name:"harish",gender:'M',loc:'Nellore'},
           {id:3,name:"saiteja",gender:'M',loc:'guntur'},
           {id:4,name:"saikumar",gender:'M',loc:'nayudupet'},
           {id:5,name:"satish",gender:'M',loc:'hyd'},
           {id:6,name:"veneela",gender:'F',loc:'rajhumandry'},
           {id:7,name:"Anusha",gender:'F',loc:'guntur'}]}/>
     <FormClassComponent/>
      <FormFunComp/> 
           
          <LifeCycleComp/>
           <LifeCycleFunComp/>  
           {/* <messageContext.Provider value={data}>
             <Comp1/>
           </messageContext.Provider>  */}
            <GetMethodAxios/> 
            <GetMethodAxiosJson/> 
          <GetMethodAxiosJsonForms/>            
           <GoogleLoginComp/>
           </div>
          
    )
  }
}
export default App;
