import Image from 'next/image';
import ProductProps from '../Types/ProductProps';

export default function Product({
  category,
  image,
  price,
  title,
}: ProductProps) {
  return (
    <div className="flex flex-col items-center justify-center border-4 w-1/4 h-96 border-gray-800 rounded-3xl gap-5 text-center px-10">
      <Image src={image} alt="img" width={100} height={0}></Image>
      <div>{title}</div>
      <div className="text-blue-500">{category}</div>
      <div className="text-green-500">${price}</div>
    </div>
  );
}
