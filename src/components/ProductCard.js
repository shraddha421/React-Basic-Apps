export function ProductCard({product, background="slategray",onPurchase,...restProps}) {
  const listStyle={
    listStyle:'none',padding:0
  }

  return (
      <article style={{border: "1px solid white", padding:"16px", textAlign:"center", background, width:"100%"}}>
        <h2>{product.title}</h2>
        <img
          src={product.imageSrc}
          alt={product.title}
          {...restProps}
        />
        <p>Specification:</p>
        <ul style={listStyle}>
          {product.specification.map((spec)=>( <li key={spec}>{spec}</li>))}
        </ul>
        <button onClick={()=> onPurchase(product)}>Buy (From ${product.price})</button>
      </article>
    );
  }
