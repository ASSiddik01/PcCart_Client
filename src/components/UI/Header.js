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
  const catagories = useSelector((state) => state.category.data);
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
                        <ul className="mobile_dropdown ml-[25px]">
                          <Link href="/">
                            <li className="capitalize">Processor</li>
                          </Link>
                          <Link href="/">
                            <li className="capitalize">Motherboard</li>
                          </Link>
                          <Link href="/">
                            <li className="capitalize">RAM</li>
                          </Link>
                          <Link href="/">
                            <li className="capitalize">Power Supply Unit</li>
                          </Link>
                          <Link href="/">
                            <li className="capitalize">Storage Device</li>
                          </Link>
                          <Link href="/">
                            <li className="capitalize">Monitor</li>
                          </Link>
                          <Link href="/">
                            <li className="capitalize">Others</li>
                          </Link>
                        </ul>
                      )}
                      {/* {token && (
                    <>
                      <li className="block md:hidden">
                        <Link href="/add-new-book">Add New Book</Link>
                      </li>
                      <li className="block md:hidden">
                        <Link href="/reading-book-list">
                          Reading Book list
                        </Link>
                      </li>
                    </>
                  )} */}
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
                    <div className="mainmenu md:flex items-center gap-[10px]">
                      <div className="flex flex-wrap md:justify-start justify-center items-center gap-[15px]">
                        <Link href="/">Home</Link>
                        <ul>
                          <li className="mega-menu relative flex gap-1 text-[#000]">
                            <Link className="" href="">
                              Categories
                            </Link>
                            <FaAngleDown
                              color="#fff"
                              className="duration-300"
                            />
                            <div className="mega-menu-wrapper box_shadow rounded-[5px]">
                              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-[40px] py-[50px] px-[90px] max-h-[400px] overflow-auto">
                                {catagories?.map((category) => (
                                  <div
                                    key={category?._id}
                                    className="single_item"
                                  >
                                    <Image
                                      className="w-full h-[180px] rounded-[3px]"
                                      src={category?.imgUrl}
                                      alt="processor"
                                      width={500}
                                      height={500}
                                    />
                                    <div className="mt-[10px] px-[15px]">
                                      <h4 className="text-white duration-300 leading-[29px] mb-[12px] capitalize">
                                        {category?.title}
                                      </h4>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
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
                  href="/pc-builder"
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
