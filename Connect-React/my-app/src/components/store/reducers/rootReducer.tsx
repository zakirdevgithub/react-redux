const initialState={
    count:100
}

const reducer=(state=initialState, action:any)=>{
    switch(action.type){
        case "ADD":{
            return{
               count: state.count + 1 
            }    
        }    
        case "SUB":{
            return{
                count: state.count - 1
            }
           
        }
        default:
            return state
    }
}

export default reducer;