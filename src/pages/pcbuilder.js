import React from "react";
import RootLayout from "@/components/Layouts/RootLayout";
import BreadCrumb from "../components/UI/BreadCrumb";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { MdDeleteForever } from "react-icons/md";
import { setComponent } from "@/redux/features/builder/builderSlice";
import Head from "next/head";

const PcBuilder = ({ catagories }) => {
  const dispatch = useDispatch();
  const reversed = catagories?.slice().reverse();
  const components = useSelector((state) => state.builder.data);
  const value = components.map((component) => component.category.title);
  const price = components.map((component) => component.price);
  const total = price.reduce((pre, current) => pre + current, 0);

  const essiantitalComponents = [
    "casing",
    "power supply",
    "motherboard",
    "processor",
    "ram",
    "storage",
  ].every((item) => value.includes(item));

  const handleClick = (product) => {
    const filterComponents = components.filter(
      (component) => component?._id !== product?._id
    );
    dispatch(setComponent([...filterComponents]));
  };

  return (
    <div>
      <Head>
        <title>PC Builder || PC Cart</title>
      </Head>
      <BreadCrumb title={"PC Builder"} />
      <div className="body_wrapper pb-[20px]">
        <div className="layout">
          <div className="md:mx-20">
            <div className="page_header flex md:justify-between justify-center items-center p-[20px]">
              <div className="text-lg text-[#3b4149]  hidden md:block ">
                Total: $ {total}
              </div>
              <div className="">
                <h3 className="text-2xl font-bold text-center">
                  Build Your PC
                </h3>
                <p className="text-center text-sm">Select Your Component</p>
              </div>
              <div className="">
                <button
                  disabled={!essiantitalComponents}
                  onClick={() =>
                    Swal.fire({
                      title: "Awesome Choice",
                      text: "Thanks for build your pc form us",
                      icon: "success",
                      confirmButtonText: "Done",
                    })
                  }
                  className="first_button hidden md:block disabled:opacity-[.5] duration-300 text-white rounded-md py-[8px] px-[12px] font-medium "
                >
                  {essiantitalComponents
                    ? "Complate to Build"
                    : "First, Select Essential Items"}
                </button>
              </div>
            </div>
            <div className="component_area bg-white p-[20px] rounded-lg ">
              {reversed?.map((category) => (
                <div key={category?._id} className="border-b">
                  <div className="single_category flex justify-between items-center py-[20px] ">
                    <div className="flex gap-2 items-center">
                      <img
                        className="h-[50px] w-[50px] "
                        src={category?.imgUrl}
                        alt=""
                      />
                      <h2 className="text-bold capitalize text-xl">
                        {category?.title}
                      </h2>
                    </div>
                    <Link
                      href={`/component/${category?._id}`}
                      className="first_button duration-300 text-white rounded-md py-[8px] px-[12px] font-medium "
                    >
                      Select
                    </Link>
                  </div>
                  {components?.map((component) => {
                    if (component?.category?.title === category?.title) {
                      return (
                        <div key={component?._id} className="md:pl-[50px]">
                          <div className="p-4 border-t flex justify-between">
                            <div className="flex gap-2">
                              <img
                                className="h-[50px] w-[50px] "
                                src={component?.image}
                                alt=""
                              />
                              <div className="info">
                                <h2 className="">{component?.productName} </h2>
                                <p className="text-gray-500">
                                  <span className="text-gray-500 text-sm capitalize">
                                    Category: {component?.category?.title}
                                  </span>
                                  {", "}
                                  <span className="text-gray-500 text-sm capitalize">
                                    Price: $ {component?.price}
                                  </span>
                                  {", "}
                                  <span className="text-gray-500 text-sm capitalize">
                                    Status: {component?.status}
                                  </span>
                                  {", "}
                                  <span className="text-gray-500 text-sm capitalize">
                                    Rating: {component?.averageRating}
                                  </span>
                                  {", "}
                                </p>
                              </div>
                            </div>
                            <button>
                              <MdDeleteForever
                                onClick={() => handleClick(component)}
                                color={"red"}
                                size={24}
                              />
                            </button>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              ))}
            </div>
            <div className="flex justify-between px-4 mt-4">
              <div className="text-lg text-[#3b4149]  ">Total: $ {total}</div>
              <button
                disabled={!essiantitalComponents}
                onClick={() =>
                  Swal.fire({
                    title: "Awesome Choice",
                    text: "Thanks for build your pc form us",
                    icon: "success",
                    confirmButtonText: "Done",
                  })
                }
                className="first_button disabled:opacity-[.5] duration-300 text-white rounded-md py-[8px] px-[12px] font-medium "
              >
                {essiantitalComponents
                  ? "Complate to Build"
                  : "First, Select Essential Items"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const categoryRes = await fetch("http://localhost:4000/api/v1/proCat");
  const categoryData = await categoryRes.json();

  return {
    props: {
      catagories: categoryData?.data?.data,
    },
  };
};
