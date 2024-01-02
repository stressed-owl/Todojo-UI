import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <div className="min-h-[100vh]">
        { children }
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
