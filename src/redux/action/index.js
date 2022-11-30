import axios from 'axios';
export const increment=(num)=>{
    return{
        type:'INCREMENT',
        payload:num
    };

}
export const decrement=(num)=>{
    return{
        type:'DECREMENT',
        payload:num
    };

}
export const nameChange=(name)=>{
    return{
        type:'NAME_CHANGE',
        payload:name
    };
};

export const multiple=(num)=>{
    return{
        type:'MULTIPLE',
        payload:num
    }
}
export const colorChange=(colorName)=>{
    return{
        type:'COLOR',
        payload:colorName
    }
} 
export const fetchCommentsSuccess=(comments)=>{
    return{
        type:"FETCH_COMMENTS_SUCCESS",
        payload:comments
    }
}
export const fetchCommentsFailure=(error)=>{
    return{
        type:"FETCH_COMMENTS_FAILURE",
        payload:error
    }
}


export const fetchData=()=>{
    return function (dispatch){
        axios.get(`http://localhost:3001/comments`)
        .then((response)=>{
            let comments=response.data;
            dispatch(fetchCommentsSuccess(comments))
        }).catch((error)=>dispatch(fetchCommentsFailure(error)))
    }
}
