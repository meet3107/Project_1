
import  {products} from "./data/products.js";

import InventoryCard from "./InventoryCard.jsx";
import "./App.css"
import { useState } from "react";
import CartList from "./CartList.jsx";

export default function GroceriesApp(){
    


    const [toCart, setToCart ] = useState([]);

    const addToCart = (item) => {
        setToCart((prevData) => {
            return([...prevData, {...item,id: crypto.randomUUID()}])
        })
    }
    const removeItem = (id) => {
        setToCart((prevList) => {
          return prevList.filter((i) => i.id !== id);
        });
      };
      const removeAllItem = (id) => {
        setToCart((prevList) => {
          return prevList.filter((i) => i.id == id);
        });
      };
      function sumPrices(products) {
        return products.reduce((total, product) => {
          const price = parseFloat(product.price.replace('$', ''));
          return total + price;
        }, 0);
      }
      
    


    return(

        <div className="GroceriesApp-Container">
            <div className="Inventory-Container">
            {products.map((i) => (
                <div key={i.id} className="Inventory-Card">
                    <InventoryCard
                    productName={i.productName}
                    brand={i.brand}
                    quantity={i.quantity}
                    image={i.image}
                    price={i.price}
                    />
                    <button onClick={() => addToCart(i)}>Add to cart</button>
                    
                    </div>      
            ))}
            </div>
            

            <CartList
                toCart={toCart}
                removeItem={removeItem}
                removeAllItem={removeAllItem}
                sumPrices={sumPrices}
            />
            
           </div>
    )
}
