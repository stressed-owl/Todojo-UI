import React from "react";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
        <Header />
        <div className="min-h-[100vh] max-w-[1500px] m-auto mt-[150px] z-10">
          { children }
        </div>
        <Footer />
    </div>
  );
};

export default Layout;
