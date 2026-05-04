import "./ProductCard.css";
function ProductCard({ name, price, image }) {
  return (
    <div className="product-card">
      <h4>{name}</h4>
      <h4>${price}</h4>
      <img className="imageSize" src={image} alt={name} />
    </div>
  );
}

export default ProductCard;
