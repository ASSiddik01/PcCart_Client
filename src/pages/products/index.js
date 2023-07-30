import React from "react";
import BreadCrumb from "../../components/UI/BreadCrumb";
import RootLayout from "../../components/Layouts/RootLayout";
import ReactStars from "react-rating-stars-component";
import Link from "next/link";
import Head from "next/head";

const Products = ({ products }) => {
  return (
    <div>
      <Head>
        <title>All Products || PC Cart</title>
      </Head>
      <BreadCrumb title={""} />
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap ">
          {products?.map((product) => (
            <div key={product?._id} className="p-4 md:w-1/3">
              <Link href={`/products/${product?._id}`}>
                <div className="h-full border-2 relative border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <div
                    className={`product_tag ${
                      product?.status == "In Stock"
                        ? "badge-warning"
                        : "badge-error"
                    } duration-300 badge  absolute top-[2%] right-[2%] capitalize font-medium text-xs`}
                  >
                    {product?.status}
                  </div>
                  <div className="product_image h-[300px] flex justify-center items-center overflow-hidden rounded-xl ">
                    <img
                      className="h-[300px]"
                      src={product?.image}
                      alt="blog"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-md text-[#df4800] font-medium mb-1">
                      {product?.keyFeatures?.brand}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3 min-h-[50px]">
                      {product?.productName}
                    </h1>
                    <p className="text-sm text-gray-900 capitalize mb-1">
                      Category: {product?.category?.title}
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="leading-relaxed mb-3">
                        ${" "}
                        <span className="text-[#131921] font-bold italic">
                          {product?.price}
                        </span>
                      </p>
                      <ReactStars
                        count={5}
                        className="my-[10px]"
                        size={20}
                        value={product?.averageRating}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

Products.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const productRes = await fetch(`${process.env.SERVER_URL}/product`);
  const productData = await productRes.json();

  return {
    props: {
      products: productData?.data?.data,
    },
    revalidate: 5,
  };
};
