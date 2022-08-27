import React from 'react'
import {connect} from 'react-redux'

function ComponentC(props) {
  const style={
    marginTop:'2em'
  }  
  return (
    <>
        <p style={style}>Text In Textfield : {props.content}</p>
    </>
  )
}

const mapStateToProps=state=>{
    return{
        content:state.content
    }
}

export default connect(mapStateToProps)(ComponentC)