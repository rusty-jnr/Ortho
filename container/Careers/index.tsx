/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Col, Row } from "antd";
import style from "styles/Careers/Careers.module.css";
import Homestyle from "styles/Home/Landing.module.css";
import ReadyToJoin from "components/Ready-to-Join";

import { motion } from "framer-motion";

const CareersPage: React.FC<any> = () => {
  const offers = [
    {
      img: "/images/svg/working_hours.svg",
      title: "Flexible Working Hours",
      sub_title:
        "You may work from the comfort of your own home or any location in the globe.",
    },
    {
      img: "/images/svg/periodic_leave.svg",
      title: "Periodic Leave",
      sub_title:
        "Take some time out to relax, get some energy back, and be paid while you're at it.",
    },
    {
      img: "/images/svg/personal_dev.svg",
      title: "Personal Developement",
      sub_title:
        "You develop, and so do we. Get time and assistance for your self-development initiatives.",
    },
    {
      img: "/images/svg/work_gadget.svg",
      title: "Work Gadget",
      sub_title:
        "You won't have to worry about not having the tools you need to get your task done since they will all be given to you.",
    },
  ];

  return (
    <div className={`${style.careers}`}>
      <div className={`container ${style.hero}`}>
        <div className={style.sec_one}>
          <Row gutter={100} className={Homestyle.box_one} style={{ marginTop: "80px" }}>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={12}
              style={{ textAlign: "left" }}
              className={Homestyle.img}
            >
              <motion.img
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
                src="/images/svg/careers_hero.svg"
                alt=""
              />
            </Col>
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
                  Become a part of shaping <span>the future.</span>
                </h2>
                <p>
                We are a quickly expanding team of mission-driven designers, developers, product managers, and marketers dedicated to delivering exceptional results for our customers.
                </p>
              </motion.div>
            </Col>
          </Row>
        </div>
      </div>

      <div className={style.spacer}>
        <div className={style.hero_info}>
          <h2>
            “Ortho has a pleasant and optimistic culture, which makes me glad to
            be a member of the team.”
          </h2>
          <p>
            Cynthia anagonwe, <span>Product Manager</span>
          </p>
        </div>
      </div>

      <div className={`container ${style.choosing_ortho}`}>
        <h2>
          What to anticipate if you choose to work <span>with ortho</span>
        </h2>
        <div className={Homestyle.offer_conatiner}>
          {offers.map((offer, i) => (
            <div className={style.offer_boxes} key={i}>
              <img src={offer.img} alt="" />
              <h4>{offer.title}</h4>
              <p>{offer.sub_title}</p>
            </div>
          ))}
        </div>
      </div>

      <ReadyToJoin />
    </div>
  );
};

export default CareersPage;
