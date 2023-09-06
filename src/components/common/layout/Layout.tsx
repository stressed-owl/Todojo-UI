import React from "react";
import Header from "../../header/Header";
import "./scss/Layout.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout-right">
        <div className="layout-right-content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
