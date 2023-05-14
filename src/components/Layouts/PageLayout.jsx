import Footer from "../Elements/Footer";
import Navbar from "../Fragments/Navbar";

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
