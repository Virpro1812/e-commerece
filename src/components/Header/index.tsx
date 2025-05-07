import Image from "next/image";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  return (
    <header className="shadow-gray shadow-xs flex justify-between text-green-500 p-5 items-center px-8 gap-3">
      <div className="flex items-center gap-8">
        <Link href={"#"} className="text-2xl font-sans font-bold">
          NaFa
        </Link>
        <button>Category</button>
      </div>

      <input type="text" placeholder="Search...." className="w-full px-4 p-2 mx-4 rounded-md border border-gray-200 text-black"/>
      <nav>
        <ul className="flex space-x-4 gap-3">
          <li>
            <Link href={"/"} className="text-2xl font-bold">
              <CiShoppingCart />
            </Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-2">
        <Image src={""} width={20} height={20} alt="" className="rounded-full"></Image>
        <p>Name</p>
      </div>
    </header>
  );
};

export default Header;
