export function ProductCard({product, background="slategray",...restProps}) {
  
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
          <li>{product.specification[0]}</li>
          <li>{product.specification[1]}</li>
          <li>{product.specification[2]}</li>
        </ul>
        <button>Buy (From $999)</button>
      </article>
    );
  }
