import React from 'react'

function Alerts(props) {
  return (
    
    props.alert&&
    <div>
    <div class={`alert alert-${props.alert.Type}`} role="alert">
     {props.alert.Message}
     
    </div>
    </div> 
  )
}

export default Alerts
