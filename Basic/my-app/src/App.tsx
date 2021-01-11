import React from 'react';
import {createStore} from "redux";

function App() {
    const reducer=(state:any, action:any)=>{
      if(action.type ==="A"){
        return {
          ...state,
          A:"This is A"
        }
      }
      if(action.type === "B"){
        return{
          ...state,
          B:"This is B"
        }
      }

      return state;
    }

    const store=createStore(reducer);

    store.subscribe(()=>{
      console.log(store.getState())
    })

    store.subscribe(()=>{
      console.log(store.getState().A)
    })

    store.subscribe(()=>{
      console.log(store.getState().B)
    })

    store.dispatch({type:"A"})
    store.dispatch({type:"B"})
    store.dispatch({type:"Something"})


  return (
   <React.Fragment>
   </React.Fragment>
  );
}

export default App;
