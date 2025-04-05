import "../App.css";

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

  return (
    <article className="Productcard" >
      <h2>{product.title}</h2>
      <img src={product.imageSrc} alt={product.title} {...restProps} />
      <p>Specification:</p>
      <ul style={listStyle}>
        {product.specification.map((spec) => (
          <li key={spec}>{spec}</li>
        ))}
      </ul>
      <Status stockCount={product.stockCount} />
      {product.stockCount > 0 && (
        <button onClick={() => onPurchase(product)}>
          Buy (From ${product.price})
        </button>
      )}
    </article>
  );
}
