import React from 'react'
import Notification2 from './Notification2'
export default function Notification(props) {
  return (
<>    
<div>Notification <span>ONE</span>  {props.cartValue + props.cartValue} </div>

<Notification2 cartValue1={props.cartValue}/>
</>
  )
}
