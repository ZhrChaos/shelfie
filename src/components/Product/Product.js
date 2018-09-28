import React from 'react';


export default function Product(props) {
    console.log(props.image)
    return (
        <div className="product">
            {props.products}
           <img src={props.image} alt={props.products}/>
            ${props.price}
        </div>
    )
}