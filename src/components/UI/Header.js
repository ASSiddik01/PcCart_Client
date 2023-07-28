import { HiMenuAlt1 } from "react-icons/hi";
import { FiHeart, FiUser } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/main_logo.png";

const Header = () => {
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
                      <li className="block md:hidden">
                        <Link href="/books">All Books</Link>
                      </li>
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
                        <Link href="/books">All Books</Link>
                        {/* {token && (
                      <>
                        <Link  href="/add-new-book">Add New Book </Link >
                        <Link  href="/reading-book-list">
                          Reading Book list
                        </Link >
                      </>
                    )} */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`action_area ${
                  //   token ? "md:w-[20%]" : "md:w-[10%]"
                  "md:w-[10%]"
                } flex justify-between items-center md:gap-[20px] gap-[5px]`}
              >
                {/* {token && (
              <Link
                to="/add-new-book"
                className="bg-[#38b5fe] duration-300 flex gap-1 text-white rounded-md py-[8px] px-[12px] font-medium "
              >
                Add <span className="hidden md:block text-white">New</span>
              </Link>
            )} */}
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
                <Link href="wishlist">
                  <div className="wishlist flex flex-col items-center justify-center text-white duration-300 hover:text-[#38b5fe] relative">
                    <FiHeart size="20" />
                    <p className="text-[13px] hidden md:block">Wishlist</p>
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
