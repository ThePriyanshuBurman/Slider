import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";

export default function App() {
  const product = productData.map((item) => (
    <Product
      url={item.imageurl}
      name={item.name}
      description={item.description}
      description2={item.description2}
      rating={item.rating}
      review={item.review}
      price={item.price}
      
    />
  ));

  return (
    <div className="App">
      {/* <h1>React multi carousel</h1> */}
      <Carousel showDots={false} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}