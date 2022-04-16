import Image from 'next/image';

const ProductCard = ({ product }) => {
  return (
    <div>
      <Image src={product.image} height={200} width={200} />
      <h4>{product.product}</h4>
      <h5>{product.category}</h5>
      <p>{product.price} CZK</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;