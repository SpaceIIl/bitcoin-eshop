import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart.slice';

const ProductCard = ({ product }) => {

    const dispatch = useDispatch();

  return (
    /*<div>
      <Image src={product.image} height={200} width={200} />
      <h4>{product.product}</h4>
      <h5>{product.category}</h5>
      <p>{product.price} CZK</p>
      <button onClick={() => dispatch(addToCart(product))} >Add to Cart</button>
    </div>*/
    <div className="w-[22rem] h-[22rem] bg-fuckin-gray rounded-2xl shadow-niga grid">
      <div className="m-auto mt-8">
        <Image src={product.image} height={200} width={200} />
      </div>
      <div className='flex'>
        <div className='pl-8 font-sans font-normal w-1/2'>
          <p>{product.price} CZK</p>
          <p className='pt-2'>{product.btcprice} BTC</p>
        </div>
        <button className="w-16 h-14 ml-20 bg-dark-gray rounded-md shadow-niga font-sans font-normal" onClick={() => dispatch(addToCart(product))}  >+ 1</button>
      </div>
    </div>
  );
};

export default ProductCard;