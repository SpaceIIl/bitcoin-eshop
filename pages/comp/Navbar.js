import Link from 'next/link';

const Navbar = () => {
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

export default Navbar;