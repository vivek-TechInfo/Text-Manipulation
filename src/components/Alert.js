import React from 'react'

function Alert(props) {
    const capatilize = (word)=>{
        const lower = word.toLowerCase();
        return lower.substring(0,1).toUpperCase() + lower.substring(1,lower.length);
    }
  return (
//#13 video
<div style={{height:"50px"}}>

{       props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capatilize(props.alert.type)}</strong>: {props.alert.msg}
</div>}
</div>
      

  )
}

export default Alert
