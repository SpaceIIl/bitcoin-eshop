import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart.slice';

const ProductCard = ({ product }) => {

    const dispatch = useDispatch();

  return (
    <div>
      <Image src={product.image} height={200} width={200} />
      <h4>{product.product}</h4>
      <h5>{product.category}</h5>
      <p>{product.price} CZK</p>
      <button onClick={() => dispatch(addToCart(product))} >Add to Cart</button>
    </div>
  );
};

export default ProductCard;