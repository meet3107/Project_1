
export default function CartList({ toCart, removeItem, removeAllItem,sumPrices}){

    return(
        
        <div className="CartList-Container">
            <h2>Your Cart </h2>
            <p> No of items : {toCart.length}</p>
            
                {toCart.length === 0 ? (
                    <h5>Your cart is empty</h5>
                ) : (
                    toCart.map((i) => (
                        <div key={i.id} className="CartList-Card">
                            <div className="CartList-Card-Info ">
                        <h2>{i.productName}</h2>
                        <h3>{i.price}</h3>
                            </div>
                            <button className="Remove-Button" onClick={() => removeItem(i.id)}>Remove</button>
                        </div>
                    ))
                )}
                
                
                <div className="CartList-Buttons">
                    <button className="Remove-Button" onClick={removeAllItem}>
                        Empty Cart
                    </button>
                    <button id="Buy-Button" onClick={sumPrices}>
                    Buy-Total: ${sumPrices(toCart)}
                    </button>
                    
                </div>

                
                

            </div>
    )
}



