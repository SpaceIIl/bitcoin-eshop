import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Typewriter from "typewriter-effect";
import Image from 'next/image'
import Item from './comp/Item.js'
import Apple from './comp/apple.png';
import Banana from './comp/banana.png';
import Can from './comp/can.png';
import Chocolate from './comp/chocolate.png';
import Croissant from './comp/croissant.png';
import Donut from './comp/donut.png';
import Hamburger from './comp/hamburger.png';
import Pie from './comp/pie.png';
import Sandwich from './comp/sandwich.png';
import Navbar from './comp/Navbar';
import Footer from './comp/Footer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Cart from './cart';
import toast, { Toaster } from 'react-hot-toast';

//import Shop from './shop';
import ProductCard from './comp/ProductCard';
import { getProducts } from './api/products/index';

export default function Home({ products, product }) {
  return (
    <Provider store={store}>
    <div><Toaster/></div>
    <Navbar />
    <div className='w-4/5 m-auto'>
        <div className='h-96 text-6xl font-sans font-medium flex justify-center pt-32'>
          <div className='flex'>
            <h1 className='pr-8'>Choose</h1>
            <div className='text-btc-orange'>
                  <Typewriter 
                    
                  onInit={(typewriter)=> {
                
                  typewriter
                      
                  .typeString("freedom")
                      
                  .pauseFor(1700)
                  .deleteAll()
                  .typeString("Bitcoin")
                  .start();
                  }}/>
            </div>
          </div>
        </div>
      <div  id='shop' className={styles.card}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    <div id='cart'>
      <Cart />
    </div>
    <Footer />
    </Provider>
  )
}

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}
