import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import Services from "@/components/UI/Services";

const Home = () => {
  return (
    <main className="layout">
      <Banner />
      <div className="body_wrapper md:px-[50px] p-[20px]">
        <Services />
      </div>
    </main>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
