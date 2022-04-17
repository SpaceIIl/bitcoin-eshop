import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='bg-fuckin-gray flex text-2xl py-6 px-16 justify-between'>
      <h6 className='w-1/4'>Bitcoin shop</h6>
      <ul className='flex w-36 justify-between'>
        <li className=''>
          <Link href="/">Home</Link>
        </li>
        <li className=''>
          <a href="#shop">Shop</a>
        </li>
      </ul>
      <div className="w-1/4 text-right">
        <a  href="#cart">Cart</a>
      </div>
    </nav>
  );
};

export default Navbar;