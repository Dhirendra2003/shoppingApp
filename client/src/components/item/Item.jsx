/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

let toTop=()=>{return window.screenTop} 
const Item=(props)=>{
return  (
  <div className="item p-0 m-2  text-wrap" onClick={toTop()}>
    <Link to={`/product/${props.id}`}>
    <img src={props.image} className="rounded-[30px] " /></Link>
    <p className="mx-3">{props.name}</p>
    <div className="prices flex">
      <div className="mx-3 newprice font-bold text-[1.5em]">
        ${props.new_price}
      </div>
      <div className=" mx-5 oldprice text-zinc-400 my-2 ">
        <strike>
        ${props.old_price}
        </strike> 
      </div>
    </div>
  </div>
)
}

export default Item;