import { useRouter } from "next/router";
import RootLayout from "../../components/Layouts/RootLayout";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../../components/UI/BreadCrumb";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setComponent } from "../../redux/features/builder/builderSlice";
import Head from "next/head";

const Component = ({ products }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const selectedProducts = products?.filter(
    (product) => product.category?._id === router.query.id
  );
  const components = useSelector((state) => state.builder.data);

  const handleClick = (product) => {
    const filterComponents = components.filter(
      (component) => component?.category?.title !== product?.category?.title
    );
    dispatch(setComponent([...filterComponents, product]));
  };

  return (
    <div>
      <Head>
        <title>{(selectedProducts[0]?.category && selectedProducts[0]?.category.title).toUpperCase()} || PC Cart</title>
      </Head>
      <BreadCrumb
        title={
          selectedProducts[0]?.category && selectedProducts[0]?.category.title
        }
      />
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap ">
          {selectedProducts?.map((product) => (
            <div key={product?._id} className="p-4 md:w-1/3 relative">
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
              <div className="flex justify-center">
                {product?.status === "In Stock" && (
                  <Link
                    onClick={() => handleClick(product)}
                    href={"/pcbuilder"}
                    className="first_button absolute bottom-10 duration-300 text-white rounded-md py-[8px] px-[12px] font-medium "
                  >
                    Add to builder
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Component;

Component.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const productRes = await fetch("http://localhost:4000/api/v1/product");
  const productData = await productRes.json();

  return {
    props: {
      products: productData?.data?.data,
    },
  };
};
