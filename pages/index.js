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

//import Shop from './shop';
import ProductCard from './comp/ProductCard';
import { getProducts } from './api/products/index';

export default function Home({ products, product }) {
  return (
    <Provider store={store}>
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

/*export default function Home() {
  return (
    <Provider store={store}>
      <div className=''>
        <Navbar />
        <a href="#test">test</a>
        <h2 className='pr-8'>Choose</h2>
        <div className='text-btc-orange'>
            <Typewriter 
              
            onInit={(typewriter)=> {
          
            typewriter
                
            .typeString("freedom")
                
            .pauseFor(2000)
            .deleteAll()
            .typeString("Bitcoin")
            .start();
            }}/>
        </div>
        <div>
          <Item Image={Apple} Ck={10} Btc={0.000011}/>
          <Item Image={Banana} Ck={10} Btc={0.000011}/>
          <p id="test">teeeest</p>
        </div>
        <Footer />
      </div>
    </Provider>
  )
}

         <Item Image={Can} Ck={20} Btc={0.000021}/>
        <Item Image={Chocolate} Ck={25} Btc={0.000027}/>
        <Item Image={Croissant} Ck={15} Btc={0.000016}/>
        <Item Image={Donut} Ck={15} Btc={0.000016}/>
        <Item Image={Hamburger} Ck={35} Btc={0.000038}/>
        <Item Image={Pie} Ck={25} Btc={0.000027}/>
        <Item Image={Sandwich} Ck={30} Btc={0.000032}/>

<div className='grid grid-rows-1 grid-flow-col gap-4 pb-8 '>
          <div className=''>
            <Item Image={Apple} Ck={10} Btc={0.000011}/>
            <Item Image={Banana} Ck={10} Btc={0.000011}/>
            <Item Image={Can} Ck={20} Btc={0.000021}/>
          </div>
          <div>
            <Item Image={Chocolate} Ck={25} Btc={0.000027}/>
            <Item Image={Croissant} Ck={15} Btc={0.000016}/>
            <Item Image={Donut} Ck={15} Btc={0.000016}/>
          </div>
          <div>
            <Item Image={Hamburger} Ck={35} Btc={0.000038}/>
            <Item Image={Pie} Ck={25} Btc={0.000027}/>
            <Item Image={Sandwich} Ck={30} Btc={0.000032}/>
          </div>
        </div>*/