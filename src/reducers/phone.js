import './actions/phone'
 //REDUCER
 //(prevState, state) => newState
const initialState ={
    phones:5
}
 const reducer= (state= initialState, action) => {
     switch (action.type) {
         case BUY_PHONE:
             return {
                 ...state, phones: state.phones-- 
             }
     
         default: return state
        
     }
 }