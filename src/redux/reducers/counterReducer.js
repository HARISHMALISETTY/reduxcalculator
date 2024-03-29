let initialState={
    counter:2
};

const CounterReducer=(state=initialState,action)=>{
    if(action.type==='INCREMENT'){
        return{
            ...state,
            counter:state.counter+action.payload
        }

    }
    else if(action.type==='DECREMENT'){
        return{
            ...state,
            counter:state.counter-action.payload
        }

    }
     else if(action.type==='MULTIPLE'){
        return{
            ...state,
            counter:state.counter*action.payload
        }

    }
     return state;

}
export default CounterReducer;