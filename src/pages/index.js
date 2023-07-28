import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/sections/Banner";
import Services from "@/sections/Services";
import Catagories from "@/sections/Catagories";
import dynamic from "next/dynamic";

const Home = ({ catagories }) => {
  const DynamicCategories = dynamic(() => import("@/sections/Catagories"), {
    loading: () => <h1>Loading...</h1>,
    ssr: false,
  });
  return (
    <main className="layout">
      <Banner />
      <div className="body_wrapper md:px-[50px] p-[20px]">
        <Services />
        <DynamicCategories catagories={catagories} />
      </div>
    </main>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:4000/api/v1/proCat");
  const data = await res.json();
  return {
    props: {
      catagories: data?.data?.data,
    },
    revalidate: 5,
  };
};
