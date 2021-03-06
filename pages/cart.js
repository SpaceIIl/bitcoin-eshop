import styles from '../styles/Home.module.css'
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../redux/cart.slice';
import toast, { Toaster } from 'react-hot-toast';
import Qr from './qr';

const notifyPlus = () => toast('Successfully added');
const notifyMinus = () => toast('Successfully removed');
const notifyMinusAll = () => toast('Successfully removed all');


const CartPage = () => {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <div className='border-y-2 mt-28'>
      {cart.length === 0 ? (
        <h1 className='flex justify-center pt-10 pb-20 text-3xl'>Your Cart is Empty!</h1>
      ) : (
        <div>
        <div className='flex justify-center text-2xl p-5'>
          <h3>Cart</h3>
        </div>
        <div className={styles.cart}>
          {cart.map((item) => (
              <div className='font-medium text-base'>
                <div>
                  <div>
                    <Image src={item.image} height="120" width="120" />
                  </div>
                  <p>{item.product}</p>
                  <p>{item.price} CZK</p>
                  <p>{item.btcprice} BTC</p>
                  <p>{item.quantity}x</p>
                    <div className=''>
                      <button className='m-1' onClick={() => {
                        dispatch(incrementQuantity(item.id))
                        notifyPlus()
                        }}>
                        +
                      </button>
                      <button className='m-1' onClick={() => {
                        dispatch(decrementQuantity(item.id))
                        notifyMinus()
                        }}>
                        -
                      </button>
                      <button className='m-1' onClick={() => {
                        dispatch(removeFromCart(item.id))
                        notifyMinusAll()
                        }}>
                        x
                      </button>
                    </div>
                  <p>{item.quantity * item.price} CZK</p>
                  <p>{item.quantity * item.btcprice} BTC</p>
                </div>
              </div>
            ))}
        </div>
        <div className='flex justify-center'>
          <h2 className='text-2xl p-4'>Total price:  {getTotalPrice()} CZK to be sent on this bitcoin address</h2>
          <Qr text="12c6DSiU4Rq3P4ZxziKxzrL5LmMBrzjrJX"/>
        </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;