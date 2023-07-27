import RootLayout from "@/components/Layouts/RootLayout";

const Home = () => {
  return <div>Home</div>;
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
