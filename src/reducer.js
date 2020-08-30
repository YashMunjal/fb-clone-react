export const initialState={
    user:'Yash Munjal',
};

export const actionTypes={
    SET_USER:"SET_USER"
};


const reducer=(state,action)=>{
    //console.log(action);
    switch(action.type){
        case action.type.SET_USER:
        return {
                ...state,
                user:action.user,
        }
        default:
                return state;
    }
}


export default reducer;