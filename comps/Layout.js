import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <div style={{ width: "100%" }}>
      <Navbar />
      {children}

      <Footer />
    </div>
  );
};

export default Layout;
