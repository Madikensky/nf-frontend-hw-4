import Link from 'next/link';

export default function Footer() {
  return (
    <div className="p-10 flex flex-row gap-10 bg-gray-800 items-center justify-center">
      <Link href="https://github.com/Madikensky" className="text-green-300">
        My Github
      </Link>
    </div>
  );
}
