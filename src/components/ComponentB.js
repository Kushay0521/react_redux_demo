import React from 'react'
import { connect } from 'react-redux';
import {changeContent} from '../redux/textChangeAction'

function ComponentB(props) {

  const style={
    marginTop:'5em',
    height:'1.3em',
    width:'20em'
  }

  const handleChange=(e)=>{
        props.changeContent(e.target.value)
  }  

  return (
    <>
        <span style={style}>Text Field : </span>
        <input style={style} type="text" value={props.content} placeholder="Enter Anything" onChange={handleChange} />
    </>
  );
}


const mapStateToProps=state=>{
    return{
        content:state.content
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        changeContent:(con)=>dispatch(changeContent(con))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ComponentB)