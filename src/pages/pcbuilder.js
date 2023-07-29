import React from "react";
import RootLayout from "@/components/Layouts/RootLayout";
import BreadCrumb from "../components/UI/BreadCrumb";
import Link from "next/link";

const PcBuilder = ({ catagories }) => {
  // console.log(catagories);
  return (
    <div>
      <BreadCrumb title={"PC Builder"} />
      <div className="body_wrapper pb-[20px]">
        <div className="layout">
          <div className="mx-20 ">
            <div className="page_header flex justify-between items-center p-[20px]">
              <div className="">total</div>
              <div className="">
                <h3 className="text-2xl font-bold text-center">
                  Build Your PC
                </h3>
                <p className="text-center text-sm">Select Your Component</p>
              </div>
              <div className="">action</div>
            </div>
            <div className="component_area bg-white p-[20px] rounded-lg ">
              {catagories?.map((category) => (
                <div
                  key={category?._id}
                  className="single_category flex justify-between items-center py-[20px] border-b "
                >
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
                    href={`/category/${category?._id}`}
                    className="first_button duration-300 text-white rounded-md py-[8px] px-[12px] font-medium "
                  >
                    Select
                  </Link>
                </div>
              ))}
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

  const productRes = await fetch("http://localhost:4000/api/v1/product");
  const productData = await productRes.json();

  return {
    props: {
      catagories: categoryData?.data?.data,
      products: productData?.data?.data,
    },
    // revalidate: 5,
  };
};
