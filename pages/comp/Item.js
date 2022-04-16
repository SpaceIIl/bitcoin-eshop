import Image from 'next/image';


function Item(props) {
    return (
      <div className="w-[22rem] h-[22rem] bg-fuckin-gray rounded-2xl shadow-niga m-auto mt-12 grid">
        <div className="m-auto mt-8">
         <Image src={props.Image} alt="apple" width={200} height={200}/>
        </div>
          <div className="flex">

          
          <div className="pl-8 font-sans font-normal w-1/2"> 
            <p className="">{props.Ck} Kč</p>
            <p className="pt-2">{props.Btc} BTC</p>
          </div>
          <button className="w-16 h-14 ml-20 bg-dark-gray rounded-md shadow-niga font-sans font-normal">
            <p>1 +</p>
          </button>
        </div>
      </div>
      
    )
  }

  export default Item;