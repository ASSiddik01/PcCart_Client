import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";

const FeaturedProducts = () => {
  const products = useSelector((state) => state.product.data);

  return (
    <section className="featured_collection_section bg-white p-[15px] rounded-xl section_gap">
      <div className="section_heading flex justify-between items-center">
        <h4 className="section_title font-bold md:text-[28px] text-[24px]">
          Featured Products
        </h4>
        <Link
          href="/products"
          className="first_button duration-300 text-white rounded-md py-[8px] px-[12px] font-medium "
        >
          Show All
        </Link>
      </div>
      <div className="container pt-4 mx-auto">
        <div className="flex flex-wrap ">
          {products?.slice(0, 6)?.map((product) => (
            <div key={product?._id} className="p-4 md:w-1/3">
              <Link href={`/products/${product?._id}`}>
                <div className="h-full border-2 relative border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <div className="product_tag duration-300 badge badge-warning absolute top-[2%] right-[2%] capitalize font-medium text-xs">
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
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {product?.productName}
                    </h1>
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
    </section>
  );
};

export default FeaturedProducts;
