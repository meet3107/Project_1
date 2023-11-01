
import  {products} from "./data/products.js";

import InventoryCard from "./InventoryCard.jsx";
import "./App.css"

export default function GroceriesApp(){

    return(
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
                    </div>
            ))}
        </div>
    )
}
