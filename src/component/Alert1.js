import React from 'react'

export default function Alert1(props) {

  const capitalize =(word)=>{
    let txt =word.toLowerCase();
    return txt.charAt(0).toUpperCase()+txt.slice(1); 

  }
  return (
    props.alert1 && <div className={`alert alert-${props.alert1.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalize(props.alert1.type)}</strong>: {props.alert1.msg}
       </div>

    
  )
}
