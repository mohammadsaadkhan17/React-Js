import './App.css'
import ProductCard from './components/ProductCard/ProductCard'

function App() {
const products =[
  {
    id: 1,
    name:"Brown Sneaker",
    price:"750",
    image: "https://craftandglory.in/cdn/shop/files/0000s_0012_DSC06085.ARW.jpg?v=1749542378"
  },
  {
    id: 2,
    name:"White Sneaker",
    price:"700",
    image: "https://redtape.com/cdn/shop/files/RSL0493A_1_jpg.jpg?v=1756809947"
  },
  {
     id: 3,
    name:"Grey Sneaker",
    price:"600",
    image: "https://craftandglory.in/cdn/shop/files/0000s_0012_DSC06085.ARW.jpg?v=1749542378"
    
  },
  {
     id: 4,
    name:"Red Sneaker",
    price:"550",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/408839/02/sv01/fnd/IND/fmt/png/PUMA-x-RCB-2026-Palermo-Leather-Sneakers"
  }
]

  return (
    <>

    <div className="products">
      {products.map((product, index)=>(

          <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          image={product.image}
    
            />      
      ))}
    </div>
      
    </>
  );
}

export default App
