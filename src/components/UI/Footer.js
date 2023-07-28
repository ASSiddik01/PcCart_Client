import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { FaRegNewspaper } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer_bg">
        <div className="layout px-[20px]">
          <div className="footer_top py-[20px]">
            <div className="flex md:flex-row flex-col items-center justify-between gap-[20px]">
              <div className="flex items-center gap-[15px]">
                <FaRegNewspaper size={30} color={"#38b5fe"} />
                <h3 className="uppercase text-white md:text-2xl">
                  Sign up for newsletter
                </h3>
              </div>
              <div className="newsletter">
                <div className="form-control">
                  <label className="input-group">
                    <input
                      type="text"
                      placeholder="Type your email ....."
                      className="md:w-[500px] w-[200px] text-black input rounded input-bordered h-[2rem] bg-white "
                    />
                    <span className="text-white">Subscribe</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_middle hidden py-[20px] md:flex md:flex-row flex-col gap-[50px]">
            <div className="md:w-4/12 text-white">
              <h4 className="capitalize md:text-start text-center font-bold mb-[20px]">
                About Us
              </h4>
              <div className="footer_info">
                <p className="text-sm md:text-start text-center">
                  An online book is a resource in book-like form that is only
                  available to read on the Internet. It differs from the common
                  idea of an e-book, which is usually available for users to
                  download and read locally on a computer, smartphone or on an
                  e-reader.
                </p>
              </div>
            </div>
            <div className="flex justify-around md:gap-[50px] md:w-4/12">
              <div className="md:w-6/12 text-white">
                <h4 className="capitalize md:text-start text-center font-bold mb-[20px]">
                  Privecy & policies
                </h4>
                <div className="footer_info">
                  <ul className="privacy_menu md:text-start text-center">
                    <li className="mb-2 capitalize text-sm ">
                      <Link
                        className="hover:ml-2 duration-300"
                        href="/privacy-policy"
                      >
                        privacy policy
                      </Link>
                    </li>
                    <li className="mb-2 capitalize text-sm ">
                      <Link
                        className="hover:ml-2 duration-300"
                        href="/refund-policy"
                      >
                        refund policy
                      </Link>
                    </li>
                    <li className="mb-2 capitalize text-sm ">
                      <Link
                        className="hover:ml-2 duration-300"
                        href="/shipping-policy"
                      >
                        shipping policy
                      </Link>
                    </li>
                    <li className="mb-2 capitalize text-sm ">
                      <Link
                        className="hover:ml-2 duration-300"
                        href="/term-condition"
                      >
                        Terms of service
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:w-6/12 text-white">
                <h4 className="capitalize md:text-start text-center font-bold mb-[20px]">
                  Quick Links
                </h4>
                <div className="footer_info">
                  <ul className="quick_menu md:text-start text-center">
                    <li className="mb-2 capitalize text-sm ">
                      <Link className="hover:ml-2 duration-300" href="/profile">
                        my account
                      </Link>
                    </li>
                    <li className="mb-2 capitalize text-sm ">
                      <Link className="hover:ml-2 duration-300" href="/faq">
                        FAQ
                      </Link>
                    </li>
                    <li className="mb-2 capitalize text-sm ">
                      <Link className="hover:ml-2 duration-300" href="/about">
                        About Us
                      </Link>
                    </li>
                    <li className="mb-2 capitalize text-sm ">
                      <Link className="hover:ml-2 duration-300" href="/contact">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:w-4/12 text-white">
              <h4 className="capitalize  md:text-start text-center font-bold mb-[20px]">
                Contact us
              </h4>
              <div className="footer_info md:text-start text-center">
                <ul className="contact_info">
                  <li className="mb-2 capitalize text-sm ">
                    <a className="text-white" href="tel:+019 0000 0000">
                      +019 8726 8375
                    </a>
                  </li>
                  <li className="mb-2 text-sm ">contact@imshama.com</li>
                  <li className="mb-2 capitalize text-sm ">
                    121/9, Bangoss Para, Chuadanga,
                  </li>
                  <li className="mb-2 capitalize text-sm ">Bangladesh</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:hidden block footer_middle_accordion">
            <Accordion className="border-0">
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span className="capitalize">About Us</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="py-2 px-4">
                  <p>
                    An online book is a resource in book-like form that is only
                    available to read on the Internet. It differs from the
                    common idea of an e-book, which is usually available for
                    users to download and read locally on a computer, smartphone
                    or on an e-reader.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span className="capitalize">Privecy & policies</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="py-2 px-4">
                  <div className="footer_info">
                    <ul className="privacy_menu">
                      <li className="mb-2 capitalize text-sm ">
                        <Link
                          className="hover:ml-2 duration-300"
                          href="/privacy-policy"
                        >
                          privacy policy
                        </Link>
                      </li>
                      <li className="mb-2 capitalize text-sm ">
                        <Link
                          className="hover:ml-2 duration-300"
                          href="/refund-policy"
                        >
                          refund policy
                        </Link>
                      </li>
                      <li className="mb-2 capitalize text-sm ">
                        <Link
                          className="hover:ml-2 duration-300"
                          href="/shipping-policy"
                        >
                          shipping policy
                        </Link>
                      </li>
                      <li className="mb-2 capitalize text-sm ">
                        <Link
                          className="hover:ml-2 duration-300"
                          href="/term-condition"
                        >
                          Terms of service
                        </Link>
                      </li>
                    </ul>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span className="capitalize">Quick Links</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="py-2 px-4">
                  <div className="footer_info">
                    <ul className="quick_menu">
                      <li className="mb-2 capitalize text-sm ">
                        <Link className="hover:ml-2 duration-300" href="/">
                          my account
                        </Link>
                      </li>
                      <li className="mb-2 capitalize text-sm ">
                        <Link className="hover:ml-2 duration-300" href="/faq">
                          FAQ
                        </Link>
                      </li>
                      <li className="mb-2 capitalize text-sm ">
                        <Link className="hover:ml-2 duration-300" href="/about">
                          About Us
                        </Link>
                      </li>
                      <li className="mb-2 capitalize text-sm ">
                        <Link
                          className="hover:ml-2 duration-300"
                          href="/contact"
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span className="capitalize">Contact us</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="py-2 px-4">
                  <div className="footer_info">
                    <ul className="contact_info">
                      <li className="mb-2 capitalize text-sm ">
                        <a className="text-white" href="tel:+019 0000 0000">
                          +019 8726 8375
                        </a>
                      </li>
                      <li className="mb-2 text-sm ">contact@imshama.com</li>
                      <li className="mb-2 capitalize text-sm ">
                        121/9, Bangoss Para, Chuadanga,
                      </li>
                      <li className="mb-2 capitalize text-sm ">Bangladesh</li>
                    </ul>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="footer_bottom py-2 w-full">
            <p className="text-center text-white">
              Copyright &copy; {new Date().getFullYear()}. Designed and
              Developed by{" "}
              <Link
                target="_blank"
                className="underline"
                href="https://www.imshama.com/"
              >
                Abu Shama
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
