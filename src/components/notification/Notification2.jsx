import Notification3 from "./Notification3"
export default function Notification2(props) {
  return (
   <>
      <div>Notification <span>TWO</span> {props.cartValue1}</div>
       <Notification3 cartValue2={props.cartValue1}/>
   </>
  )
}
