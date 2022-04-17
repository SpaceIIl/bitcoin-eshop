import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart.slice';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Successfully added');

const ProductCard = ({ product }) => {

    const dispatch = useDispatch();

  return (
    <div className="w-[22rem] h-[22rem] bg-fuckin-gray rounded-2xl shadow-shadowCard grid">
      <div className="m-auto mt-8">
        <Image src={product.image} height={200} width={200} />
      </div>
      <div className='flex'>
        <div className='pl-8 font-sans font-normal w-1/2'>
          <p>{product.price} CZK</p>
          <p className='pt-2'>{product.btcprice} BTC</p>
        </div>
        <button className="w-16 h-14 ml-20 bg-dark-gray rounded-md shadow-shadowCard font-sans font-normal" 
          onClick={() => {
          dispatch(addToCart(product))
          notify()
          }} >+ 1</button>
      </div>
    </div>
  );
};

export default ProductCard;