import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Image
              src="/logo.png"
              alt="TasteTrek Logo"
              width={40}
              height={40}
            />
            <h1 className="text-xl font-bold ml-2 text-gray-800">TasteTrek</h1>
          </div>
        </Link>
      </div>
      {/* Navigation */}
      <nav>
        {/* Menu items */}
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 hover:underline "
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900 hover:underline"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
