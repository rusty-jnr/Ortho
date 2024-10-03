import Link from "next/link";
import React from "react";
import LayoutStyle from "./layout.module.css";

const NoticeBoard: React.FC<any> = () => {
  return (
    <div className={`container ${LayoutStyle.notice}`}>
      <p>
        We just launched our private beta✨<u style={{color:'white'}}><Link  href={'https://medium.com/tryortho/were-live-in-private-beta-840adcc01fc8'}>
        <a target="_blank" style={{ color: 'white', marginLeft:5 }}>Learn more</a></Link></u>
      </p> 
    </div>
  );
};

export default NoticeBoard;
