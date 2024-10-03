/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Col, Row } from "antd";
import style from "styles/Company/Company.module.css";
import HomeStyle from "styles/Home/Landing.module.css";
import ReadyToJoin from "components/Ready-to-Join";

import { motion } from "framer-motion";

const CompanyPage: React.FC<any> = () => {
  return (
    <div className={style.company_container} id="about">
      <motion.div
        initial={{ transform: "translateY(100%)" }}
        animate={{
          transform: "translateY(0%)",
          transition: {
            type: "spring",
            duration: 1.5,
            bounce: 0.3,
            delay: 0.5,
          },
        }}
        className={`container ${style.company_banner}`}
      >
        <motion.img
          initial={{ transform: "scale(0)" }}
          animate={{
            transform: "scale(1.0)",
            transition: {
              type: "spring",
              duration: 1.5,
              bounce: 0.3,
              delay: 0.5,
            },
          }}
          src="/images/svg/company.svg"
          alt=""
        />
      </motion.div>

      <motion.div
        initial={{ transform: "translateY(100%)" }}
        animate={{
          transform: "translateY(0%)",
          transition: {
            type: "spring",
            duration: 1.5,
            bounce: 0.3,
            delay: 0.5,
          },
        }}
        className={`container ${style.banner_text}`}
      >
        <motion.h1
          initial={{ transform: "scale(0)" }}
          animate={{
            transform: "scale(1.0)",
            transition: {
              type: "spring",
              duration: 1.5,
              bounce: 0.3,
              delay: 0.5,
            },
          }}
        >
          Easing and speeding payment integration across various providers.
        </motion.h1>
      </motion.div>

      <div className={`container ${HomeStyle.sec_one}`}>
        <Row gutter={100} className={style.box_one}>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
            className={style.text}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <img
              src="/images/svg/vision_icon.svg"
              alt=""
              className={HomeStyle.icon}
            />
            <h2>Our Vision</h2>
            <p>
            We're building the digital foundation that will enable businesses and developers to seamlessly incorporate payment processors from around the world and monitor the whole thing from a single dashboard. At Ortho, we strive to have a single API provide access to all the payment providers. </p>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
            className={style.img}
            style={{ textAlign: "right" }}
          >
            <img src="/images/svg/vision.svg" alt="" />
          </Col>
        </Row>
        <Row
          gutter={100}
          style={{ marginTop: "80px" }}
          className={style.box_one}
        >
          <Col
            xs={{ span: 24, order: 2 }}
            sm={{ span: 24, order: 2 }}
            md={{ span: 12, order: 1 }}
            lg={12}
            xl={12}
            className={style.img}
            style={{ textAlign: "left" }}
          >
            <img src="/images/svg/mission.svg" alt="" />
          </Col>
          <Col
            xs={{ span: 24, order: 1 }}
            sm={{ span: 24, order: 1 }}
            md={12}
            lg={12}
            xl={12}
            className={style.text}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <img
              src="/images/svg/mission_icon.svg"
              alt=""
              className={HomeStyle.icon}
            />
            <h2>Our Mission</h2>
            <p>
            The pace of life is increasing. Success requires a number of factors, one of which is payment. For starters, Ortho is dedicated to consolidating payment methods and making them easily accessible, both of which will open up greater prospects for businesses. </p>
          </Col>
        </Row>
      </div>

      <ReadyToJoin />
    </div>
  );
};

export default CompanyPage;
