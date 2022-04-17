import styles from '../styles/Home.module.css'
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../redux/cart.slice';

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
          <div>
            <div>Image</div>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Actions</div>
            <div>Total Price</div>
          </div>
          {cart.map((item) => (
            <div className={styles.card}>
              <div>
                <div>
                  <Image src={item.image} height="120" width="120" />
                </div>
                <p>{item.product}</p>
                <p>{item.price} CZK</p>
                <p>{item.quantity}x</p>
                <div>
                  <button onClick={() => dispatch(incrementQuantity(item.id))}>
                      +
                    </button>
                    <button onClick={() => dispatch(decrementQuantity(item.id))}>
                      -
                    </button>
                    <button onClick={() => dispatch(removeFromCart(item.id))}>
                      x
                    </button>
                  </div>
                <p>{item.quantity * item.price} CZK</p>
              </div>
            </div>
          ))}
          <h2>Grand Total:  {getTotalPrice()} CZK</h2>
        </div>
      )}
    </div>
  );
};

export default CartPage;