/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Col, Row, Select, Space } from "antd";
import { Input } from "antd";
import style from "styles/Countries/Countries.module.css";
import Homestyle from "styles/Home/Landing.module.css";
import ReadyToJoin from "components/Ready-to-Join";

import { motion } from "framer-motion";

const CountriesPage: React.FC<any> = () => {
  const countries = [
    { name: "Nigeria" },
    { name: "Algeria" },
    { name: "The United States of America" },
    { name: "The United Kingdom" },
  ];

  return (
    <div className={`${style.countries}`}>
      <div className={`container ${style.hero}`}>
        <div className={style.sec_one}>
          <Row
            gutter={100}
            className={Homestyle.box_one}
            style={{ marginTop: "80px" }}
          >
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={12}
              className={Homestyle.text}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
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
              >
                <h2>
                  Find out as soon as <span>Ortho</span> launches in your
                  country
                </h2>
                <p>
                  We are expanding all over Africa - enter your details below to
                  find out as soon as we are live in your country! You will also
                  be added to our email list and receive occasional updates and
                  product announcements from Ortho. You can unsubscribe at any
                  time. Learn more about our Privacy Policy.
                </p>
              </motion.div>
            </Col>

            <Col
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={12}
              style={{ textAlign: "left" }}
              className={`${style.form} ${Homestyle.form}`}
            >
              <motion.div
                initial={{ transform: "translateX(-100%) scale(0)" }}
                animate={{
                  transform: "translateX(0%) scale(1.0)",
                  transition: {
                    type: "spring",
                    duration: 1.5,
                    bounce: 0.3,
                    delay: 0.5,
                  },
                }}
                className={style.form_container}
              >
                <h3>Let me know when ortho lunches in</h3>
                <Space
                  direction="vertical"
                  size="middle"
                  style={{ display: "flex", marginTop: "40px" }}
                >
                  <div className={style.form_holder}>
                    <label>Country</label>
                    <Select
                      placeholder="Select country"
                      allowClear
                      options={countries.map((country, i) => ({
                        value: country.name,
                        label: country.name,
                      }))}
                    />
                  </div>
                  <div className={style.form_holder}>
                    <label htmlFor="email">Email</label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="e.g John@smith.com"
                    />
                  </div>
                  <div className={style.form_holder}>
                    <button>Notify Me</button>
                  </div>
                </Space>
              </motion.div>
            </Col>
          </Row>
        </div>
      </div>

      <ReadyToJoin />
    </div>
  );
};

export default CountriesPage;
