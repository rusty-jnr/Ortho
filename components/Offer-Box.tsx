/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import style from "../styles/OfferBox.module.css";
import Link from "next/link";

const OfferBox: React.FC<any> = ({ data }) => {
  const [currentImg, setCurrentImg] = useState<any>(data.img);

  const handleHover = (img: any) => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 768) {
      setCurrentImg(img);
    }
  }

  return (
    <div
      className={style.offer_box}
      onMouseOver={() => handleHover(data?.subImg)}
      onMouseOut={() => setCurrentImg(data?.img)}
    >
      <div className={style.offer_img}>
        <img src={currentImg} alt="" />
      </div>
      <div className={style.offer_content}>
        <div>
          <h4>{data.title}</h4>
          <p>{data.subTitle}</p>
        </div>
        {data.LinkTo && renderButton({LinkType:'LinkTo', LinkUrl:data.LinkTo, ButtonText: data.buttonTitle})}
        {data.LinkRedirect && renderButton({LinkType:'LinkRedirect', LinkUrl:data.LinkRedirect, ButtonText:data.buttonTitle})}
      </div>
    </div>
  );
};

interface RenderButtonProps {
  LinkType:string
  LinkUrl:string
  ButtonText: string
}

type LinkType = 'LinkTo' | 'LinkRedirect';

const renderButton = ({LinkType, LinkUrl, ButtonText}: RenderButtonProps) =>{
  
  switch(LinkType){
    case 'LinkTo':
      return (<Link href={LinkUrl || ''}>
      <button>{ButtonText}</button>
      </Link>)

      case 'LinkRedirect':
        return (
          <a
              href={LinkUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
               <button>{ButtonText}</button>
            </a>
        )
  }
}

export default OfferBox;
