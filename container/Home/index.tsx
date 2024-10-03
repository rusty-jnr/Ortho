/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import style from "../../styles/Home/Landing.module.css";
import OfferBox from "../../components/Offer-Box";
import Carousel from "react-multi-carousel";
import Link from "next/link";

import { useDispatch } from "react-redux";
import { toggleRequestModal } from "redux/RequestBetaAccess/action";
import JoinCommunity from "components/Join-Community";
import ReadyToJoin from "components/Ready-to-Join";

const LandingPage: React.FC = () => {
  const dispatch = useDispatch();
  const [playImg, setPlayImg] = useState<any>("/images/svg/play.svg");
  const [windowWidth, setWindowWidth] = useState<any>(null);

  useEffect(() => {
    animate(0);
    function updateSize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function animate(index: any) {
    const txts: any = document.querySelector(".animate_text")?.children;
    if (!txts) {
      return;
    }
    const txtsLength: number = txts?.length;
    for (let i = 0; i < txtsLength; i++) {
      txts[i].classList.remove("text_in", "text_out");
    }
    txts[index].classList.add("text_in");

    setTimeout(() => {
      txts[index].classList.add("text_out");
    }, 2800);

    setTimeout(() => {
      animate(index === txtsLength - 1 ? 0 : index + 1);
    }, 3000);
  }

  const offers = [
    {
      img: "/images/svg/community.svg",
      subImg: "/images/svg/community_b.svg",
      title: "Payment Links",
      subTitle:
        "Accept payment from 31+ payment providers in minutes with just a simple link - no code required.",
      buttonTitle: "Learn More",
      LinkTo: "/products#community",
    },
    {
      img: "/images/svg/checkout-flow.svg",
      subImg: "/images/svg/checkout-flow_b.svg",
      title: "Direct Charge",
      subTitle:
        "Give your customers options in checkout to pay from any 31+ payment provider of their choice - no code required.",
      buttonTitle: "Learn More",
      LinkTo: "/products#checkout",
    },
    {
      img: "/images/svg/business.svg",
      subImg: "/images/svg/business_b.svg",
      title: "Storefronts",
      subTitle:
        "Get immediate access to a configurable commerce platform, add your products, set prices, and begin selling online in minutes.",
      buttonTitle: "Coming Soon",
      LinkTo: "#",
    },
    {
      img: "/images/svg/plugin.svg",
      subImg: "/images/svg/plugin_b.svg",
      title: "Adons",
      subTitle:
        "Get access to useful adons to help your business make better decision like location data, device info and custom checkout look.",
      buttonTitle: "Coming Soon",
      LinkTo: "#",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 480 },
      items: 3,
      paritialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 2,
      paritialVisibilityGutter: 100,
    },
  };

  const providers = [
    { img: "/images/svg/flutterwave.svg" },
    { img: "/images/svg/mastercard.svg", width: "100px" },
    { img: "/images/svg/interswitch.svg" },
    { img: "/images/svg/mono.svg" },
    { img: "/images/svg/lazerpay.svg" },
    { img: "/images/svg/okra.svg", width: "100px" },
    { img: "/images/svg/thepeer.svg" },
    { img: "/images/svg/fincra.svg" },
    { img: "/images/svg/monnify.svg" },
    { img: "/images/svg/our-pass.svg" },
    { img: "/images/svg/paystack.svg", width: "60px" },
    { img: "/images/svg/vogue-pay.svg" },
  ];

  return (
    <div className={style.landingContainer}>
      {/* hero second */}
      <div className={style.hero}>
        <h1>Payment infrastructure </h1>
        <div className={style.animation_box}>
          <Row>
            <Col xs={11} sm={11} md={11} lg={11} xl={12}>
              for daring
            </Col>
            <Col xs={13} sm={13} md={13} lg={13} xl={12}>
              <div className={`animate_text ${style.animate_text}`}>
                <span>Businesses</span>
                <span>Developers</span>
                <span>Startups</span>
                <span>Fintechs</span>
              </div>
            </Col>
          </Row>
        </div>
        <p>
        Get instant access to over 31+ payment providers and manage them all on one dashboard with a single integration - no code required.
        </p>
        <div className={style.heroActions}>
          <button onClick={() => dispatch(toggleRequestModal(true))}>
            Book Demo
          </button>
          <div
            className={style.video}
            onMouseOver={() => setPlayImg("/images/svg/play_w.svg")}
            onMouseOut={() => setPlayImg("/images/svg/play.svg")}
          >
            <a
              href="https://youtu.be/vOXYcgrPn9A"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img src={playImg} alt="" />
              </div>
              <p>Watch Video</p>
            </a>
          </div>
        </div>
        <div className={`container ${style.heroImg}`}>
          <img
            src={`/images/svg/${
              windowWidth <= 425 ? `hero_img.svg` : `hero_img.svg`
            }`}
            alt=""
          />
        </div>
      </div>

      {/* offer section */}
      <div className={`container ${style.offer_section}`}>
        <h2>Easy & fast integrations for services you love</h2>
        <div className={style.marquee}>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="transform 500ms ease-in-out"
            transitionDuration={500}
            arrows={false}
            ssr={true}
            itemClass="image-item"
            responsive={responsive}
          >
            {providers.map((provider, i) => (
              <div key={i} className={style.marquee_item}>
                <img
                  src={provider?.img}
                  alt=""
                  style={{ width: provider.width || "150px" }}
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className={style.what_we_offer}>
          <h2>What we offer</h2>
          <div className={style.offer_conatiner}>
            {offers.map((offer, i) => (
              <OfferBox key={i} data={offer} />
            ))}
          </div>
        </div>
      </div>

      {/* sub sections */}
      <div className={`container ${style.sec_one}`}>
        <Row gutter={100} className={style.box_one}>
          <Col
            className={style.text}
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2>Super-charge your payments in minutes </h2>
            <p>
              {`Get unmatched payment integration coverage and flexibility with our payment orchestration platform.
               Start accepting payments from our wide range of payment methods including cards, wallets, bank transfers, crypto without writing a single line of code.`}
            </p>
            <button onClick={() => dispatch(toggleRequestModal(true))}>
            Book Demo
            </button>
          </Col>
          <Col
            className={style.img}
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
            style={{ textAlign: "right" }}
          >
            <img src="/gifs/home-page/sec_one_gif.gif" alt="" />
          </Col>
        </Row>
        <Row
          gutter={100}
          style={{ marginTop: "80px" }}
          className={style.box_two}
        >
          <Col
            className={style.img}
            xs={{ span: 24, order: 2 }}
            sm={{ span: 24, order: 2 }}
            md={{ span: 12, order: 1 }}
            lg={12}
            xl={12}
            style={{ textAlign: "left" }}
          >
            <img src="/gifs/home-page/sec_two_gif.gif" alt="" />
          </Col>
          <Col
            className={style.text}
            xs={{ span: 24, order: 1 }}
            sm={{ span: 24, order: 1 }}
            md={12}
            lg={12}
            xl={12}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2>Scale in minutes, not months.</h2>
            <p>
            Set fallback providers and payment rules that best suit your business, take your business to new markets and start accepting payments on your own terms.
            </p>
            <button onClick={() => dispatch(toggleRequestModal(true))}>
            Book Demo
            </button>
          </Col>
        </Row>
      </div>

      <JoinCommunity />
      <ReadyToJoin />
    </div>
  );
};

export default LandingPage;
