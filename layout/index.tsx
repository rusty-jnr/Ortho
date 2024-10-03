import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import LayoutStyle from "./layout.module.css";
import MainMenu from "../components/Menu";
import BetaAccess from "components/Beta-Access";

const LayoutContainer: React.FC<any> = ({ children, type }) => {
  const [open, setOpen] = useState<Boolean>(false);

  return (
    <div className={LayoutStyle.container}>
      <MainMenu open={open} closeMenu={() => setOpen(false)} />
      <BetaAccess />
      <Header type={type} openMenu={() => setOpen(true)} />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutContainer;
