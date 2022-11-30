let initialState={
    Comments:[],
    error:""
};
 export const dataReducer=(state=initialState,action)=>{
    if(action.type==='FETCH_COMMENTS_SUCCESS'){
        return{
            Comments:action.payload,
            error:''
        }

    }
    else if (action.type==='FETCH_COMMENTS_FAILURE'){
        return{
            error:action.payload,
            comments:""
        }

    }
    return state;
 }