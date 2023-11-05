
import  {products} from "./data/products.js";

import InventoryCard from "./InventoryCard.jsx";
import "./App.css"
import { useState } from "react";
import CartList from "./CartList.jsx";

export default function GroceriesApp(){
    

    //state to manage and update from products.js
    const [toCart, setToCart ] = useState([]);

    
    //function to add item to cart 
    const addToCart = (item) => {
        setToCart((prevData) => {
            return([...prevData, {...item,id: crypto.randomUUID()}])
        })
    }
    
    // function to remove one item from cartlist
    const removeItem = (id) => {
        setToCart((prevList) => {
          return prevList.filter((i) => i.id !== id);
        });
      };
      // function to empty whole cart
      const removeAllItem = (id) => {
        setToCart((prevList) => {
          return prevList.filter((i) => i.id == id);
        });
      };
      //function to total price by replacing them from string
      function sumPrices(products) {
        return products.reduce((total, product) => {
          const price = parseFloat(product.price.replace('$', ''));
          return total + price;
        }, 0);
      }
      
    


    return(
        //Groceries app container
        <div className="GroceriesApp-Container">
            <div className="Inventory-Container">
                {/* map through each items in products array  */}
            {products.map((i) => (
                <div key={i.id} className="Inventory-Card">
                    {/* Inventory card component  */}
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
            

            {/* call cartlist component */}
            <CartList
                toCart={toCart}
                removeItem={removeItem}
                removeAllItem={removeAllItem}
                sumPrices={sumPrices}
            />
            
           </div>
    )
}
