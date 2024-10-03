/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Row, Col } from "antd";
import Link from "next/link";
import LayoutStyle from "./layout.module.css";

const Footer: React.FC = () => {
  return (
    <div className={`container ${LayoutStyle.footer}`}>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={8} xl={7}>
          <Link href="/">
            <img src="/images/svg/logo_b.svg" alt="" />
          </Link>
          <div className={LayoutStyle.copy_right}>
            © {new Date().getFullYear()} Ortho technologies. All rights reserved
          </div>
     
        </Col>
 
        <Col xs={24} sm={24} md={12} lg={8} xl={6}>
          <h5>Products</h5>
          <ul>
            <Link href="/products#community">
              <li>Payment links</li>
            </Link> 
            <Link href="/products#checkout">
              <li>Direct Charge</li>
            </Link> 
            
          </ul>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={6}>
          <h5>Developer</h5>
          <ul>
          <a
              href="https://docs.tryortho.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
            <li>Quick Start</li>
            </a>
            <a
              href="https://docs.tryortho.co/category/libraries"
              target="_blank"
              rel="noopener noreferrer"
            >
            <li>Libraries</li>
            </a>
            <a
              href="https://docs.tryortho.co/category/supported-providers"
              target="_blank"
              rel="noopener noreferrer"
            >
            <li>Supported Providers</li>
            </a> 
          </ul>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={5}>
          <h5>Socials</h5>
          <ul className={LayoutStyle.socials}>
            <li>
              <a href="https://twitter.com/tryortho" target="_blank" rel="noopener noreferrer">
                <img src="/images/svg/twitter.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/tryortho/" target="_blank" rel="noopener noreferrer">
                <img src="/images/svg/instagram.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="https://medium.com/tryortho" target="_blank" rel="noopener noreferrer">
                <img src="/images/svg/medium.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="https://www.producthunt.com/products/ortho-2" target="_blank" rel="noopener noreferrer">
                <img src="/images/svg/product_hunt.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/tryortho/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                <img src="/images/svg/linkedIn.svg" alt="" />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
