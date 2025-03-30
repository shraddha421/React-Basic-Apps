import "./App.css";
import { ProductCard } from "./components/ProductCard";
import { ProductList } from "./components/ProductList";

function App() {
  const product={
    imageSrc:"images/iphone.png",
    title:"iPhone 15 Pro",
    specification:[
      "A17 Pro chip with 6-core GPU",
      "3x or 5x Telephoto camera",
      "Up to 29 hours video playback"
    ],
    price:999

  } 
  return <div className="App">
    <ProductList>
    <ProductCard width="96px" height="60px" background="darkolivegreen" product={product} />
    <ProductCard  width="64px" height="60px" product={product} />
    <ProductCard  width="120px" height="60px" background="peru" product={product} />

    </ProductList>
    </div>;
}

export default App;
