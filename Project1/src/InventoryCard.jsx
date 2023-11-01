

export default function InventoryCard({image, productName, brand, price, quantity}){

    return(
        
        
        <div className="InventoryCard" >
            <img src={image} alt="productName"  />
            
            <h3>{productName}</h3>
            <h4>{brand}</h4>
            <h5>{quantity}</h5>
            <h6>${price}</h6>
            

           
        </div>
    )
}
