import { Fragment, useState } from "react";
import "./App.css";
import { ProductCard } from "./components/ProductCard";
import { ProductList } from "./components/ProductList";
import { ProductFilter } from "./components/ProductFilter";
import styles from "./App.module.css";
function App() {
  const products = [
    {
      id:1,
      imageSrc: "images/iphone.png",
      title: "iPhone 15 Pro",
      specification: [
        "A17 Pro chip with 6-core GPU",
        "3x or 5x Telephoto camera",
        "Up to 29 hours video playback",
      ],
     stockCount: 10,
      price: 999,
    },
    {
      id:2,
      imageSrc: "images/airpods.png",
      title: "AirPods Pro 2",
      specification: [
        "Noise Cancellation",
        "Dust, sweat, and water resistant",
        "Up to 6 hours of listening",
      ],
      stockCount: 0,
      price: 249,
    },
    {
      id:3,
      imageSrc: "images/apple-watch.png",
      title: "Apple Watch 9",
      specification: [
        "45mm or 41mm case size",
        "Always-On Retina display",
        "Up to 18 hours normal use",
      ],
      stockCount: 6,
      price: 399,
    },
  ];
  const [filter, setFilter]=useState({
    price:{
    min:250,
    max:999
    },
    other:"other filters"
  })
  const [favorites, setFavorites]=useState([]);
  function handlePurchase(product) {
    console.log(product);
    alert(`You clicked on ${product.title} which cost $${product.price}`);
  }
  function handleFilter(key,value){
    setFilter((prevstate)=>({
      ...prevstate,
      price:{
        ...prevstate.price,
      [key]:value
      }
    }))
  }
  function onFavorite(id){
    if(favorites.includes(id))
    {
      setFavorites((prevstate)=> prevstate.filter((productId)=> productId!==id))
    }else{
      setFavorites((prevFavotites) => [...prevFavotites, id]);    }
  }


  return (
    <div className={styles.App}>
      <ProductList>
        {products.map((product) => (
          <ProductCard
            key={product.title}
            width="96px"
            height="60px"
            background="darkolivegreen"
            product={product}
            isFavorite={favorites.includes(product.id)}
            onPurchase={handlePurchase}
            onFavorite={onFavorite}
          />
        ))}
      </ProductList>
      <ProductFilter filter={filter} handleFilter={handleFilter}/>
      <ul>
        {products
          .filter(({ price }) => price >=filter.price.min && price <=filter.price.max )
          .map(({ title, price }) => (
            <Fragment key={title}>
            <hr style={{border:"1px solid white"}}/>
              <li key={price}>
                {title} - {price}
              </li>
              </Fragment>
          ))}
      </ul>
    </div>
  );
}

export default App;
