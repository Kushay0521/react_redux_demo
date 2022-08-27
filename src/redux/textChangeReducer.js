
const initialstate = {
    content:""
}

const actionType="Change"

export const textReducer=(state=initialstate,action)=>{
    switch (action.type) {
        case actionType:
            return {
                ...state,content:action.content
            }
        default: 
            return state
    }
}
