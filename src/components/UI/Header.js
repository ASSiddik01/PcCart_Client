import { HiMenuAlt1 } from "react-icons/hi";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/main_logo.png";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react";
import { useSelector } from "react-redux";
import { signIn } from "next-auth/react";
import { useSession, signOut } from "next-auth/react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const categories = useSelector((state) => state.category.data);
  const { data: session } = useSession();

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
                        <div className="bg-[#131921] w-52 p-4 z-[9999] rounded-md top-[50px] h-[300px] overflow-auto">
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
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className={`action_area ${
                  session?.user ? "md:w-[16%]" : "md:w-[8%]"
                } flex justify-between items-center md:gap-[20px] gap-[5px]`}
              >
                {session?.user && (
                  <Link
                    href="/pcbuilder"
                    className="bg-[#38b5fe] duration-300 flex gap-1 text-white rounded-md py-[8px] px-[12px] font-medium "
                  >
                    PC{" "}
                    <span className="hidden md:block text-white">Builder</span>
                  </Link>
                )}
                <div className="myaccount relative flex flex-col items-center justify-center text-white duration-300 hover:text-[#38b5fe]">
                  <FiUser size="20" />
                  <p className="text-[13px] hidden md:block">Account</p>
                  <div className="user_button absolute  z-[999] right-[-40px] md:top-[63px] top-[50px] w-[120px] py-[5px] px-[10px] rounded-md ">
                    <ul className="text-center">
                      {!session?.user ? (
                        <>
                          <li
                            onClick={() =>
                              signIn("github", {
                                callbackUrl: process.env.NEXTAUTH_URL,
                              })
                            }
                            className="hover:border-b py-2"
                          >
                            GitHub
                          </li>
                          <li
                            onClick={() =>
                              signIn("google", {
                                callbackUrl: process.env.NEXTAUTH_URL,
                              })
                            }
                            className="hover:border-b py-2"
                          >
                            Google
                          </li>
                        </>
                      ) : (
                        <li
                          onClick={() => signOut()}
                          className="hover:border-b py-2"
                        >
                          Sign Out
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
                <div className="wishlist flex flex-col items-center justify-center text-white duration-300 hover:text-[#38b5fe] relative">
                  <Link href="cart">
                    <FiShoppingCart size="20" />
                    <p className="text-[13px] hidden md:block">Cart</p>
                    <div className="bg-[#38b5fe] text-white badge badge-sm absolute text-[12px] top-[-10px] right-[-10px] md:right-0">
                      {" "}
                      0
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

export const getStaticProps = async () => {
  const categoryRes = await fetch("http://localhost:4000/api/v1/proCat");
  const categoryData = await categoryRes.json();
  console.log(categoryData);

  const productRes = await fetch("http://localhost:4000/api/v1/product");
  const productData = await productRes.json();

  return {
    props: {
      catagories: categoryData?.data?.data,
      products: productData?.data?.data,
    },
    revalidate: 5,
  };
};
