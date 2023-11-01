import { useState } from "react";

import  {products} from "./products.js";

export default function GroceriesApp(pic, id, productName, brand, price, quantity){

    return(
        
        
        <div className="Listing" >
            <img src={pic} alt="product" width="150" height="70%" />
            <h2>{id}</h2>
            <h3>{productName}</h3>
            <h4>{brand}</h4>
            <h5>${price}</h5>
            <h6>{quantity}</h6>
            

           
        </div>
    )
}
