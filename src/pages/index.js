import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/sections/Banner";
import Services from "@/sections/Services";
import dynamic from "next/dynamic";
import { useDispatch } from "react-redux";
import { setCategories } from "@/redux/features/category/categorySlice";
import { setProduct } from "@/redux/features/product/productSlice";
import Link from "next/link";

const Home = ({ catagories, products }) => {
  const dispatch = useDispatch();

  if (catagories.length > 0) {
    dispatch(setCategories(catagories));
  }

  if (products.length > 0) {
    dispatch(setProduct(products));
  }

  const DynamicCategories = dynamic(() => import("@/sections/Catagories"), {
    loading: () => <h1>Loading...</h1>,
    ssr: false,
  });

  const DynamicFeaturedProducts = dynamic(
    () => import("@/sections/FeaturedProducts"),
    {
      loading: () => <h1>Loading...</h1>,
      ssr: false,
    }
  );

  return (
    <main className="layout">
      <Banner />
      <div className="body_wrapper md:px-[50px] p-[20px]">
        <Services />
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
            <DynamicFeaturedProducts />
          </div>
        </section>
        <section className="featured_category_section bg-white p-[15px] rounded-xl section_gap">
          <div className="section_heading">
            <h4 className="section_title font-bold md:text-[28px] text-[24px] mb-[30px]">
              Featured Categories
            </h4>
          </div>
          <DynamicCategories />
        </section>
      </div>
    </main>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const categoryRes = await fetch("http://localhost:4000/api/v1/proCat");
  const categoryData = await categoryRes.json();

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
