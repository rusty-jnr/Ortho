/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import LayoutStyle from "./layout.module.css";
import { useDispatch } from "react-redux";
import { toggleRequestModal } from "redux/RequestBetaAccess/action";
import NoticeBoard from "./notice";


const Header: React.FC<any> = ({ openMenu, type }) => {
  const dispatch = useDispatch();
  const router = useRouter(); 
  const { showBetaModal } = router.query
  if(showBetaModal){
    dispatch(toggleRequestModal(true))
  }
  return (
    <div className={LayoutStyle.header_container}>
      <NoticeBoard/>
      <div
        className={`container ${LayoutStyle.header} ${type === "light" ? LayoutStyle.header_light : ""
          }`}
      >
        <Link href="/">
          <img
            src={`/images/svg/${type === "light" ? "logo_w.svg" : "logo_b.svg"
              }`}
            alt=""
          />
        </Link>
        <div className={LayoutStyle.headerActions}>
          {router.pathname !== "/careers" ? (
            <button style={{marginRight:10}} onClick={() => dispatch(toggleRequestModal(true))}>
            Book Demo
            </button>
          ) : (
            <button>No current openings</button>
          )}
          <Link href={"https://app.tryortho.co"} target="_blank" rel="noopener noreferrer">
            <a target="_blank" style={{ color: 'black' }}>
              <style jsx>{`
        .signinHomeButton {
          margin-right: 30px;
          width: 110px;
          height: 50px;
          background: #ffffff;
          border: 1px solid #ffffff;
          border-radius: 10px;
          cursor: pointer;
          color: black;
          font-family: "IBM Plex Sans", sans-serif;
          font-weight: 700;
        }
      `}</style>
              <button className="signinHomeButton">
                Sign In
              </button>
            </a>
          </Link>
          <div className={LayoutStyle.hamburger} onClick={() => openMenu()}>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
