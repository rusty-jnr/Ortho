/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "../styles/JoinCommunity.module.css";

const JoinCommunity: React.FC<any> = () => {

  return (
    <div className={`container ${style.join_community}`}>
      <div>
        <h2>
          Join our <span>community</span>
        </h2>
        <p>
          Join our developer community and connect with other engineers across
          the globe using ortho.
        </p>
        <a
              href="https://join.slack.com/t/ortho-community/shared_invite/zt-1h2u0dsed-8EyFmqCrPkQnCaRUrcYgFw"
              target="_blank"
              rel="noopener noreferrer"
            > <button>Join Now</button></a>
       
      </div>
      <img src="/images/svg/join_community.svg" alt="" />
    </div>
  );
};

export default JoinCommunity;
