import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/sakura-logo.png";
import { RiMenu2Line } from "react-icons/ri";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-lg">
      {/* <div className="navbar bg-base-100 shadow-lg fixed z-50"> */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <RiMenu2Line className="text-3xl" />
            </div>
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link href="/">Home</Link>
              <Link href="/jobs">Job Listings</Link>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <Image src={logo} alt="logo" width={"150"}></Image>
        </div>
        <div className="navbar-end hidden lg:flex">
          <div className="flex gap-5 text-xl">
            <Link className="hover:text-teal-600 hover:underline" href="/">
              Home
            </Link>
            <Link href="/jobs" className="hover:text-teal-600 hover:underline">
              Job Listings
            </Link>
            <Link href="/about" className="hover:text-teal-600 hover:underline">
              About Us
            </Link>

            <Link href="/contact" className="hover:text-teal-600 hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
