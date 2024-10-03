/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Col, Row } from "antd";
import style from "../styles/ReadyToJoin.module.css";
import { useDispatch } from "react-redux";
import { toggleRequestModal } from "redux/RequestBetaAccess/action";
import OfferBox from "components/Offer-Box";
import Link from "next/link";

const ReadyToJoin: React.FC<any> = () => {
  const dispatch = useDispatch();
  const [playImg, setPlayImg] = useState<any>("/images/svg/play.svg");

  const readyOptions = [
    {
      img: "/images/svg/developer.svg",
      subImg: "/images/svg/developer_b.svg",
      title: "Are you a developer?",
      subTitle:
        "Integrate over 31+ payment providers with our well documented APIs and SDKs.",
        buttonTitle:'Learn More',
        LinkRedirect:'https://docs.tryortho.co/quick-start'
    },
    {
      img: "/images/svg/business.svg",
      subImg: "/images/svg/business_b.svg",
      title: "Are you a business?",
      subTitle:
        "Manage your entire payment stack from one dashboard and enter new market with confidence.",
        buttonTitle:'Learn More',
        LinkRedirect:'https://docs.tryortho.co/category/supported-providers'
    },
  ];

  return (
    <div className={`container ${style.ready_to_begin}`}>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={10} xl={12}>
          <div className={style.basic_info}>
            <h2>Ready to give your payment stack superpowers?</h2>
            <p>
            Sign up today. Your engineers, operations team, and customers will thank you later.
            </p>
            <div className={style.readyActions}>
              <button onClick={() => dispatch(toggleRequestModal(true))}>
              Book Demo
              </button>
              <div
                className={style.video}
                onMouseOver={() => setPlayImg("/images/svg/play_b.svg")}
                onMouseOut={() => setPlayImg("/images/svg/play.svg")}
              >
                <div>
                  <img src={playImg} alt="" />
                </div> 
                <Link href={"https://youtu.be/vOXYcgrPn9A"} target={"_blank"} rel="noopener noreferrer">
                <p>Watch Video</p>
                </Link> 
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={14} xl={12}>
          <div className={style.ready_conatiner}>
            {readyOptions.map((option, i) => (
              <OfferBox key={i} data={option} />
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ReadyToJoin;
