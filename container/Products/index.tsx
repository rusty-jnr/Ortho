/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Row, Col, Collapse } from "antd";
import style from "styles/Products/Products.module.css";
import HomeStyle from "styles/Home/Landing.module.css";
import ReadyToJoin from "components/Ready-to-Join";

import { useDispatch } from "react-redux";
import { toggleRequestModal } from "redux/RequestBetaAccess/action";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProductsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { Panel } = Collapse;
  const [imageStates, setImageStates] = useState<any>({
    community: null,
    checkout: null,
    business: null,
  });

  const animation = useAnimation();
  const [itemsRef, itemsInView] = useInView({
    threshold: 0.2,
  });
  useEffect(() => {
    if (itemsInView) {
      animation.start((i) => ({
        transform: "translateY(0%)",
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.5,
        },
      }));
    }
  }, [animation, itemsInView]);

  const imgAnimation = useAnimation();
  const [imgRef, imgInView] = useInView({
    threshold: 0.2,
  });
  useEffect(() => {
    if (imgInView) {
      imgAnimation.start((i) => ({
        transform: "translateX(0%) scale(1.0)",
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0.3,
          delay: 0.5,
        },
      }));
    }
  }, [imgAnimation, imgInView]);

  return (
    <div className={`${style.products_container}`}>
      <div className={`container ${HomeStyle.sec_one}`}>
        <Row gutter={100} id="community" className={style.box_one}>
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
            <div className={HomeStyle.icon_box}>
              <img
                src="/images/svg/community.svg"
                alt=""
                className={HomeStyle.icon}
              />
            </div>
            <h2>Payment Links</h2>
            <Collapse
              expandIconPosition="end"
              accordion
              ghost
              onChange={(e) => setImageStates({ ...imageStates, community: e })}
            >
              
              {/* <Panel header="Never have a downtime" key="1">
                <p>
                   Ortho helps you manage downtime, set backup provider should
                  there be a downtime with your primary provider
                </p>
              </Panel> */}
              <Panel header="Integrate providers in seconds" key="2">
                <p>
                  get instant access to over 31 providers accross the globe, no code required - manage all from one dashboard
                </p>
              </Panel>
              <Panel header="All your numbers on one board" key="3">
                <p>
                  track how  your business is doing, get financial insight
                  and realtime data all from one dashboard. 
                </p>
              </Panel> 
              
            </Collapse>
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
            <div className={HomeStyle.bright}>
              <img
                src="/images/svg/community_main.svg"
                alt=""
                className={
                  !imageStates.community ? HomeStyle.show : HomeStyle.hide
                }
              />
              <img
                src="/gifs/community/community_1.gif"
                alt=""
                className={
                  imageStates.community === "1"
                    ? HomeStyle.show
                    : HomeStyle.hide
                }
              />
              <img
                src="/gifs/community/community_2.gif"
                alt=""
                className={
                  imageStates.community === "2"
                    ? HomeStyle.show
                    : HomeStyle.hide
                }
              />
              <img
                src="/gifs/community/community_3.gif"
                alt=""
                className={
                  imageStates.community === "3"
                    ? HomeStyle.show
                    : HomeStyle.hide
                }
              />
               <img
                src="/gifs/community/community_3.gif"
                alt=""
                className={
                  imageStates.community === "4"
                    ? HomeStyle.show
                    : HomeStyle.hide
                }
              />
            </div>
          </Col>
        </Row>

        <Row
          gutter={100}
          style={{ marginTop: "80px" }}
          id="checkout"
          className={style.box_two}
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
            <div className={HomeStyle.light}>
              <img
                src="/images/svg/checkout_main.svg"
                alt=""
                className={
                  !imageStates.checkout ? HomeStyle.show : HomeStyle.hide
                }
              />
              <img
                src="/gifs/checkout/checkout_1.gif"
                alt=""
                className={
                  imageStates.checkout === "1" ? HomeStyle.show : HomeStyle.hide
                }
              />
              <img
                src="/gifs/checkout/checkout_2.gif"
                alt=""
                className={
                  imageStates.checkout === "2" ? HomeStyle.show : HomeStyle.hide
                }
              />
              <img
                src="/gifs/checkout/checkout_3.gif"
                alt=""
                className={
                  imageStates.checkout === "3" ? HomeStyle.show : HomeStyle.hide
                }
              />
            </div>
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
            <div className={HomeStyle.icon_box}>
              <img
                src="/images/svg/checkout-flow.svg"
                alt=""
                className={HomeStyle.icon}
              />
            </div>
            <h2>Direct Charge</h2>
            <Collapse
              expandIconPosition="end"
              accordion
              ghost
              onChange={(e) => setImageStates({ ...imageStates, checkout: e })}
            >
              <Panel header="Give your users options" key="1">
                <p>
                Give your customers options, set up desired payment providers, and accept payments from multiple providers in a single checkout. no-code is required </p>
              </Panel>
              <Panel header="Your own custom switcher" key="2">
                <p>
                Create checkout rules that are tailored to your business needs and enter new markets with a few clicks. no code is required .
                </p>
              </Panel>
              {/* <Panel header="customised checkout look" key="3">
                <p>
                customise your checkout flow with various ortho theme that
                  best suit your business brands.
                </p>
              </Panel> */}
            </Collapse>
          </Col>
        </Row>

       
      </div>

      {/* <div className={`container ${style.more_coming}`}>
        <div className={style.container}>
          <Row>
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={12}
              className={style.more_info}
            >
              <motion.div
                initial={{ transform: "translateY(100%)", opacity: 0 }}
                animate={animation}
                ref={itemsRef}
              >
                <h2>
                  And lots <span>more coming</span>
                </h2>
                <p>
                  we are always experimenting and pushing the limits of what
                  we can do with payments, take advantage of Ortho today.
                </p>
                <button onClick={() => dispatch(toggleRequestModal(true))}>
                Book Demo
                </button>
              </motion.div>
            </Col>
            <Col
              xs={0}
              sm={24}
              md={12}
              lg={12}
              xl={12}
              className={style.more_info}
              ref={imgRef}
            >
              <motion.img
                initial={{ transform: "translateX(100%) scale(0)" }}
                animate={imgAnimation}
                src="/images/svg/more_coming.svg"
                alt=""
              />
            </Col>
          </Row>
        </div>
      </div> */}

      <ReadyToJoin />
    </div>
  );
};

export default ProductsPage;
