import Header from "../UI/Header";
import Footer from "../UI/Footer";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
