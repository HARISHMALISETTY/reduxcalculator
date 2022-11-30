let initialState={
    name:'counter app',
    color:'blue'
}

 const nameReducer=(state=initialState,action)=>{
    if(action.type==="NAME_CHANGE"){
        return{
             ...state,
             name:action.payload
        }
    }
    else if(action.type==="COLOR"){
        return{
             ...state,
             color:action.payload
        }
    }
    return state;

}
export default nameReducer;