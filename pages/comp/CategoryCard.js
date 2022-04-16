import Link from 'next/link';
import Image from 'next/image';

const CategoryCard = ({ image, name }) => {
  return (
    <div>
      <Image src={image} height={700} width={1300} />
      <Link href={`/category/${name.toLowerCase()}`}>
        <div>
          <h3>{name}</h3>
          <p>SHOP NOW</p>
        </div>
      </Link>
    </div>
  );
};
export default CategoryCard; // zatím k ničemu