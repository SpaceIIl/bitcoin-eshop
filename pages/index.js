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

export default function Home() {
  return (
    <Provider store={store}>
      <div className='m-auto font-medium flex'>
        <Navbar />
        <Footer />
        <a href="#test">test</a>
        <h1 className='pr-8'>Choose</h1>
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
      </div>
    </Provider>
  )
}

/*         <Item Image={Can} Ck={20} Btc={0.000021}/>
        <Item Image={Chocolate} Ck={25} Btc={0.000027}/>
        <Item Image={Croissant} Ck={15} Btc={0.000016}/>
        <Item Image={Donut} Ck={15} Btc={0.000016}/>
        <Item Image={Hamburger} Ck={35} Btc={0.000038}/>
        <Item Image={Pie} Ck={25} Btc={0.000027}/>
        <Item Image={Sandwich} Ck={30} Btc={0.000032}/> */