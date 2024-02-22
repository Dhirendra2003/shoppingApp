/* eslint-disable react/prop-types */
//import React from 'react';
import arrow_icon from "../assets/breadcrum_arrow.png"
import all_product from "../assets/all_product";

export default function Breadcrums(props) {
  const pids = all_product.find(
    (object) => object.id === Number(props.productId)
  );
  return (
    <div className='bread flex m-4 inter-space h-5  place-content-center'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />   <span className="uppercase">{pids.category}</span> <img src={arrow_icon} alt="" />{pids.name}
    </div>
  )
}
