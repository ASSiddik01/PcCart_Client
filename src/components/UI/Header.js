import { HiMenuAlt1 } from "react-icons/hi";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/main_logo.png";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react";
import Processor from "@/assets/images/categories/Processor.webp";
import Motherboard from "@/assets/images/categories/Motherboard.webp";
import RAM from "@/assets/images/categories/RAM.webp";
import Storage from "@/assets/images/categories/Storage.webp";
import Monitor from "@/assets/images/categories/Monitor.webp";
import PowerSupply from "@/assets/images/categories/Power Supply.webp";
import Others from "@/assets/images/categories/Others.webp";
import { useSelector } from "react-redux";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const categories = useSelector((state) => state.category.data);
  return (
    <header className={``}>
      <div>
        <div className="header_area py-2">
          <div className="layout px-[20px]">
            <div className="flex items-center justify-between gap-[20px]">
              {/* Mobile menu */}
              <div className="catagories block md:hidden">
                <div className="catagory_menu">
                  <div className="dropdown">
                    <label
                      tabIndex={0}
                      className="btn btn-link text-white no-underline px-0 hover:no-underline "
                    >
                      <p className="block md:hidden">
                        <HiMenuAlt1
                          className="text-white duration-300 hover:text-[#38b5fe]"
                          size="20"
                        />
                      </p>
                    </label>
                    <ul
                      tabIndex={0}
                      className="menu menu-compact z-[9999] top-[65px] rounded-lg dropdown-content p-2 shadow bg-white w-52"
                    >
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li onClick={() => setIsOpen(!isOpen)} className="">
                        <div className="flex justify-between">
                          Categories
                          {isOpen ? (
                            <FaAngleUp color="#fff" />
                          ) : (
                            <FaAngleDown color="#fff" />
                          )}
                        </div>
                      </li>
                      {isOpen && (
                        <ul className="mobile_dropdown ml-[25px] h-[300px] overflow-auto">
                          {categories?.map((category) => (
                            <Link
                              key={category?._id}
                              href={`/category/${category?._id}`}
                            >
                              <li className="capitalize">{category?.title}</li>
                            </Link>
                          ))}
                        </ul>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              {/* Logo */}
              <div className="md:w-[20%] ">
                <div className="logo">
                  <Link href="/" className="text-white text-2xl">
                    <Image
                      className="md:w-[180px] w-[150px]"
                      src={logo}
                      alt="Logo"
                      placeholder="blur"
                    />
                  </Link>
                </div>
              </div>
              {/* navigator */}
              <div className="md:block hidden py-2 px-[20px]">
                <div className="layout">
                  <div className="menu_area my-1 flex justify-between md:justify-center items-center ">
                    <ul className="mainmenu flex gap-2">
                      <li className="text-white hover:text-[#38b5fe] duration-300 ">
                        <Link href="/">Home</Link>
                      </li>
                      <li className="text-white  duration-300 main_dropdown relative flex gap-1 items-center ">
                        <Link href="/">Categories</Link>
                        <FaAngleDown className="duration-300" />
                        <ul className="bg-[#131921] w-52 p-4 z-[9999] rounded-md top-[50px] h-[300px] overflow-auto">
                          {categories?.map((category) => (
                            <li
                              key={category?._id}
                              className="hover:ml-1 duration-300 py-2 hover:text-[#38b5fe] capitalize "
                            >
                              <Link href={`/category/${category?._id}`}>
                                {category?.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className={`action_area ${
                  //   token ? "md:w-[20%]" : "md:w-[10%]"
                  "md:w-[20%]"
                } flex justify-between items-center md:gap-[20px] gap-[5px]`}
              >
                {/* {token && ( */}
                <Link
                  href="/pcbuilder"
                  className="bg-[#38b5fe] duration-300 flex gap-1 text-white rounded-md py-[8px] px-[12px] font-medium "
                >
                  PC <span className="hidden md:block text-white">Builder</span>
                </Link>
                {/* )} */}
                <div className="myaccount relative flex flex-col items-center justify-center text-white duration-300 hover:text-[#38b5fe]">
                  <FiUser size="20" />
                  <p className="text-[13px] hidden md:block">Account</p>
                  <div className="user_button absolute  z-[999] right-[-40px] md:top-[63px] top-[50px] w-[120px] py-[5px] px-[10px] rounded-md ">
                    <ul className="text-center">
                      {/* {!token ? ( */}
                      <>
                        <Link href="signin">
                          <li className="hover:border-b py-2">Sign In</li>
                        </Link>
                        <Link href="signup">
                          <li className="hover:border-b py-2">Sign Up</li>
                        </Link>
                      </>
                      {/* ) : (
                        <Link href="" onClick={handleSignOut}>
                          <li className="hover:border-b py-2">Sign Out</li>
                        </Link>
                      )} */}
                    </ul>
                  </div>
                </div>
                <Link href="cart">
                  <div className="wishlist flex flex-col items-center justify-center text-white duration-300 hover:text-[#38b5fe] relative">
                    <FiShoppingCart size="20" />
                    <p className="text-[13px] hidden md:block">Cart</p>
                    <div className="bg-[#38b5fe] text-white badge badge-sm absolute text-[12px] top-[-10px] right-[-10px] md:right-0">
                      {/* {userData?.data?.wishlist?.length ?? 0} */} 0
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
