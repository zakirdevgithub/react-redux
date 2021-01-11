import React from "react";
import {connect} from "react-redux";

const RetrieveData=(props:any)=>{
    return(
        <>
        <h1>{props.count}</h1>
        </>
    )
}

const mapStateToProps=(state:any)=>{
    return{
        count: state.count
    }
}

export default connect(mapStateToProps)(RetrieveData);