//cartlist component
export default function CartList({ toCart, removeItem, removeAllItem,sumPrices}){

    return(
        
        <div className="CartList-Container">
            <h2>Your Cart </h2>
            {/* display no of items in the cart using length */}
            <p> No of items : {toCart.length}</p>
            {/* if there is zero items in cart it will show zero otherwise it will display the information
            of items in the cart */}
                {toCart.length === 0 ? (
                    <h5>Your cart is empty</h5>
                ) : (
                    // go to each item in the cart and show productname and price of items
                    toCart.map((i) => (
                        <div key={i.id} className="CartList-Card">
                            <div className="CartList-Card-Info ">
                        <h2>{i.productName}</h2>
                        <h3>{i.price}</h3>
                            </div>
                            {/* button to remove particular item from the cart */}
                            <button className="Remove-Button" onClick={() => removeItem(i.id)}>Remove</button>
                        </div>
                    ))
                )}
                
                
                <div className="CartList-Buttons">
                    {/* button to empty the whole cart */}
                    <button className="Remove-Button" onClick={removeAllItem}>
                        Empty Cart
                    </button>
                    {/* total button adding prices of items  */}
                    <button id="Buy-Button" onClick={sumPrices}>
                    Buy-Total: ${sumPrices(toCart)}
                    </button>
                    
                </div>
            
            </div>
    )
}



