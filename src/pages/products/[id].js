import RootLayout from "../../components/Layouts/RootLayout";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../../components/UI/BreadCrumb";
import { FaAngleDown } from "react-icons/fa";

const ProductDetails = ({ product }) => {
  const entries = Object.entries(product?.data?.keyFeatures);
  const keyFeatures = entries?.map(([key, value]) => {
    if (key === "specification") {
      return null;
    }
    return [key, value];
  });

  const specifications = product?.data?.keyFeatures?.specification.split(", ");

  return (
    <div>
      <BreadCrumb title={product?.data?.productName} />
      <div className="body_wrapper p-[20px]">
        <div className="layout">
          <div className="product_details">
            <section className="overflow-hidden bg-white p-[20px] rounded-lg box_shadow ">
              <div className="mx-auto">
                <div className="lg:w-full mx-auto flex flex-wrap">
                  <div className="lg:w-1/2 w-full lg:h-auto ">
                    <div className="">
                      <div className="product_image  flex justify-center items-center overflow-hidden object-cover object-center border rounded-lg ">
                        <img
                          className="rounded-xl bg-center  "
                          src={product?.data?.image}
                          alt="product"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-sm text-[#df4800] uppercase">
                        {product?.data?.keyFeatures.brand}
                      </p>
                      <div className="product_tag duration-300 badge badge-warning capitalize font-medium text-xs">
                        {product?.data?.status}
                      </div>
                    </div>
                    <h2 className="text-gray-900 text-3xl  font-medium mb-1">
                      {product?.data?.productName}
                    </h2>
                    <h1 className=" font-medium text-2xl text-gray-900">
                      $
                      <span className="text-[#131921] font-bold italic ml-1">
                        {product?.data?.price}
                      </span>
                    </h1>

                    <div className="flex items-center justify-between mb-4">
                      <p className="text-sm text-gray-900 capitalize">
                        Category: {product?.data?.category.title}
                      </p>
                      <span className="flex items-center">
                        <ReactStars
                          count={5}
                          className="my-[10px]"
                          size={20}
                          value={product?.data?.averageRating}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <span className="text-gray-600 ml-3 text-sm">
                          ({product?.data?.reviews?.length} Reviews)
                        </span>
                      </span>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 justify-between border-y py-4">
                      <div className="">
                        <h4 className="italic font-bold text-xl border-b">
                          Quick Overview
                        </h4>
                        <ul className="text-[#131921] mt-2 capitalize">
                          {keyFeatures?.map(
                            (feature, i) =>
                              feature !== null && (
                                <li key={i}>
                                  {feature[0]}:{" "}
                                  <span className="italic font-bold">
                                    {feature[1]}
                                  </span>
                                </li>
                              )
                          )}
                        </ul>
                      </div>
                      <div className="">
                        <h4 className="italic font-bold text-xl border-b">
                          Spicifications
                        </h4>
                        <ul className="text-[#131921] mt-2 capitalize list-disc ml-4">
                          {specifications?.map((specification, i) => (
                            <li key={i}>
                              <span className="italic">{specification}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex md:flex-row flex-col justify-between md:items-center mt-[20px] gap-4">
                      <div className="flex gap-[20px]">
                        {product?.data?.status === "In Stock" ? (
                          <>
                            <button className="first_button duration-300 rounded-full py-[8px] px-[20px] font-medium ">
                              Add to Cart
                            </button>
                            <button>
                              <p className="second_button cursor-pointer duration-300 rounded-full py-[8px] px-[20px] font-medium ">
                                Buy Now
                              </p>
                            </button>
                          </>
                        ) : (
                          <>
                            <button className="first_button duration-300 rounded-full py-[8px] px-[20px] font-medium ">
                              Out of Stock
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="product_desc my-4">
            <h4 className="text-[26px] mb-2 font-bold ">Description</h4>
            <div className="desc_box bg-white p-[20px] text-justify rounded-lg box_shadow ">
              <p className="text-[14px] ">{product?.data?.description}</p>
            </div>
          </div>
          <div className="product_review my-4">
            <h4 id="review" className="text-[26px] mb-2 font-bold">
              Reviews
            </h4>
            <div className="review_box bg-white p-[20px] text-justify rounded-lg box_shadow ">
              <div className="review_header border-b pb-[25px]">
                <h5 className="text-lg font-medium mb-2 ">Customer Reviews</h5>
                <div className="flex justify-between md:items-center">
                  <div className="flex  md:flex-row flex-col gap-[15px] text-sm">
                    <ReactStars
                      count={5}
                      className="my-[10px]"
                      size={20}
                      value={product?.data?.averageRating}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p>Based on {product?.data?.reviews?.length} reviews</p>
                  </div>
                </div>
              </div>
              {product?.data?.reviews?.map((review) => (
                <div key={review._id} className="customer_review py-4 border-b">
                  <ReactStars
                    count={5}
                    className="my-[10px]"
                    size={20}
                    value={review?.rating}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <div className="flex gap-4">
                    <img
                      className="h-[50px] w-[50px]"
                      src="https://i.ibb.co/MgsTCcv/avater.jpg"
                      alt=""
                    />
                    <div className="border-l pl-2">
                      <h3 className="reviewer_title capitalize font-semibold">
                        {review?.username}
                      </h3>
                      <p className="review_message mt-3 text-[14px] ">
                        {review?.reviewText}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:4000/api/v1/product");
  const data = await res.json();
  const paths = data?.data?.data.map((product) => ({
    params: { id: product._id.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:4000/api/v1/product/${params.id}`);
  const data = await res.json();
  return {
    props: {
      product: data,
    },
    revalidate: 5,
  };
};
