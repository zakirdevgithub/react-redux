import React from "react";
import {connect} from "react-redux";

const UpdateData=(props:any)=>{
    return(
        <>
        <button onClick={props.add}>+ ADD</button>
        <button onClick={props.sub}>- SUB</button>
        </>
    )
}

const mapDispatchToProps=(dispatch:any)=>{
    return{
        add: ()=>{
            dispatch({type:"ADD"})
        },
        sub: ()=>{
            dispatch({type:"SUB"})
        }
    }
}

export default connect(null,mapDispatchToProps)(UpdateData);