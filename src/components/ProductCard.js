export function ProductCard() {
  const Product={
    imageSrc:"images/iphone.png",
    title:"iPhone 15 Pro",
    specification:[
      "A17 Pro chip with 6-core GPU",
      "3x or 5x Telephoto camera",
      "Up to 29 hours video playback"
    ],
    price:999

  } 
  const listStyle={
    listStyle:'none',padding:0
  } 
  
  return (
      <article style={{border: "1px solid white", padding:"16px", textAlign:"center"}}>
        <h2>{Product.title}</h2>
        <img
          src={Product.imageSrc}
          alt={Product.title}
          width="128px"
          height="128px"
        />
        <p>Specification:</p>
        <ul style={listStyle}>
          <li>{Product.specification[0]}</li>
          <li>{Product.specification[1]}</li>
          <li>{Product.specification[2]}</li>
        </ul>
        <button>Buy (From $999)</button>
      </article>
    );
  }
