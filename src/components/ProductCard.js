import "../App.css";
import { useState } from "react";
export function ProductCard({
  product,
  background = "slategray",
  onPurchase,
  ...restProps
}) {
  const listStyle = {
    listStyle: "none",
    padding: 0,
  };
  const [stockCount, setStockount]=useState(product.stockCount)
  const [showMore, setShowMore]=useState(false)
  
  function Status({ stockCount }) {
    const notAvailableTemplate = (
      <p style={{ fontSize: "14px", color: "lightsalmon" }}> Not Available</p>
    );
    const availableTemplate = (
      <p style={{ fontSize: "14px", color: "lightgrey" }}>
        {stockCount} items available
      </p>
    );
    return stockCount === 0 ? notAvailableTemplate : availableTemplate;
  }
  function onHandleClick(product){
    setStockount((prevstate)=> prevstate-1);
    onPurchase(product);
  }
  function onShowMore(){
    setShowMore(!showMore);
  }
  function onHandleTwoClicks(){
    setStockount((prevstate)=> prevstate-1);
    setStockount((prevstate)=> prevstate-1);
  }

  return (
    <article className="Productcard" >
      <h2>{product.title}</h2>
      <img src={product.imageSrc} alt={product.title} {...restProps} />
      <p>Specification:</p>
      <button onClick={onShowMore}>{showMore?"hide":"Show more"}</button>
      {showMore && <ul style={listStyle}>
        {product.specification.map((spec) => (
          <li key={spec}>{spec}</li>
        ))}
      </ul>}
      <Status stockCount={stockCount} />
      {stockCount > 0 && (
        <button onClick={() => onHandleClick(product)}>
          Buy (From ${product.price})
        </button>
       
      )}
       <button onClick={() => onHandleTwoClicks(product)}>
          Buy 2
        </button>
    </article>
  );
}
