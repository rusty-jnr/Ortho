/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { Row, Col } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import style from "../styles/Menu.module.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MainMenu: React.FC<any> = ({ open, closeMenu }) => {
  const router = useRouter();
  const menuItemsAnimation = useAnimation();
  const [itemsRef, itemsInView] = useInView({
    threshold: 0.2,
  });
  useEffect(() => {
    if (itemsInView) {
      menuItemsAnimation.start((i) => ({
        transform: "translateY(0%)",
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      }));
    } else if (!itemsInView && !open) {
      menuItemsAnimation.start((i) => ({
        transform: "translateY(100%)",
        opacity: 0,
      }));
    }
  }, [menuItemsAnimation, itemsInView, open]);

  const blogAnimation = useAnimation();
  const [blogRef, blogInView] = useInView({
    threshold: 0.2,
  });
  useEffect(() => {
    if (blogInView) {
      blogAnimation.start((i) => ({
        transform: "translateY(0%)",
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      }));
    } else if (!blogInView && !open) {
      blogAnimation.start((i) => ({
        transform: "translateY(100%)",
        opacity: 0,
      }));
    }
  }, [blogAnimation, blogInView, open]);

  const handleRefClick = (href?: String) => {
    if (href === router.pathname) {
      closeMenu();
    }
  };

  return (
    <div className={`container ${style.menu} ${open ? style.open : ""}`}>
      <div className={style.close}>
        <img src="/images/svg/logo_b.svg" alt="" />
        <img src="/images/svg/close.svg" alt="" onClick={() => closeMenu()} />
      </div>

      <div className={style.menu_box}>
        <div ref={itemsRef} className={style.menu_items}>
          <motion.div
            initial={{ transform: "translateY(100%)", opacity: 0 }}
            animate={menuItemsAnimation}
          >
            <Row gutter={16}>
              <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                <Link href="/">
                  <h5 onClick={() => handleRefClick("/")}>Home</h5>
                </Link> 
                <a
                  href="https://docs.tryortho.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5>Developer</h5>
                </a>
                
              </Col>
              <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                <Link href="/products">
                  <h5 onClick={() => handleRefClick("/products")}>Products</h5>
                </Link>
                <ul>
                  <Link href="/products#community">
                    <li onClick={() => handleRefClick("/products")}>
                        Payment links
                    </li>
                  </Link>  
                  <Link href="/products#checkout">
                    <li onClick={() => handleRefClick("/products")}>
                       Direct Charge
                    </li>
                  </Link>  
                </ul>
              </Col>
              <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                <Link href="/company">
                  <h5 onClick={() => handleRefClick("/company")}>Company</h5>
                </Link>
                <ul>
                  <Link href="/company">
                    <li onClick={() => handleRefClick("/company")}>About us</li>
                  </Link> 
                  <Link href="/careers">
                    <li onClick={() => handleRefClick("/careers")}>Careers</li>
                  </Link>
                </ul>
              </Col>
            </Row>
          </motion.div>
        </div>

        <div ref={blogRef}>
          <motion.div
            className={style.use_ortho}
            initial={{ transform: "translateY(100%)", opacity: 0 }}
            animate={blogAnimation}
          > 
            <div className={style.bottom_div}>
              <h3>We are fully remote!</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
