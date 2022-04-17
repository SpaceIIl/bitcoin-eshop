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
          <Link href="/shop">Shop</Link>
        </li>
      </ul>
      <div className="w-1/4 text-right">
        <Link  href="/cart">Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;

/*const Navbar = () => {
  return (
    <nav className='flex justify-between px-4 py-2'>
      <Link href="/">Bitcoin shop</Link>
      <ul className='flex'>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;*/