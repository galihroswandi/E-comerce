import Footer from "../Elements/Footer";
import Navbar from "../Elements/Navbar";

const PageLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
