
//Inventory card component
export default function InventoryCard({image, productName, brand, price, quantity}){

    return(
        
    //    display the properties of products array 
        <div className="InventoryCard" >
            <img src={image} alt="productName"  />
            
            <h2>{productName}</h2>
            <h3>{brand}</h3>
            <h4>{quantity}</h4>
            <p>{price}</p>
            

           
        </div>
    )
}
