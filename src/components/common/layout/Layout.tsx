import React from "react";
import Header from "../../header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      { children }
    </div>
  );
};

export default Layout;
