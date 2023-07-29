import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/sections/Banner";
import Services from "@/sections/Services";
import dynamic from "next/dynamic";
import { useDispatch } from "react-redux";
import { setCategories } from "@/redux/features/category/categorySlice";
import { setProduct } from "@/redux/features/product/productSlice";

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
        <DynamicFeaturedProducts />
        <DynamicCategories />
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
