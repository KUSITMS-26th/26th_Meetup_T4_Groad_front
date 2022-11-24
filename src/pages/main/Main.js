import React, { useState } from 'react';
import BestReviews from './Bestreviews';
import BestResume from './BestResume';
import './Main.scss';


const Main = () => {
  const [move, setMove] = useState(0);

  const active = { transform: `translate(${move}vw)`, transition: 'all 1.5s' };
  const moveRightHandler = () => {
    setMove(prev => prev - 100);
  };
  const moveLeftHandler = () => {
    setMove(prev => prev + 100);
  };

  if (move === -300) {
    return setMove(0);
  }

  return (
    <div className="mainWrap">
      <div className="wrapWrap">
        <div className="mainBannerImgWrap">
          <div className="mainBanner">
            <img
              className="bannerImg"
              style={active}
              src="/images/banner1.png"
              alt="메인배너"
            />
          </div>
          <div className="mainBanner">
            <img
              className="bannerImg"
              style={active}
              src="images/banner2.png"
              alt="기업배너"
            />
          </div>
          <div className="btnWrap">
            {move === 0 ? (
              <button disabled onClick={moveLeftHandler} className="btn1">
                <i className="fa-solid fa-chevron-left" />
              </button>
            ) : (
              <button onClick={moveLeftHandler} className="btn1">
                <i className="fa-solid fa-chevron-left" />
              </button>
            )}

            <button onClick={moveRightHandler} className="btn2">
              <i className="fa-solid fa-chevron-right" />
            </button>
          </div>
        </div>
      </div>
      <div className="secondBanner">
        <div className="notifyBanner">
          <NotifyBanner />
        </div>

        <div className="promotionBanner">
          <img alt="promotion" src="images/promotion.png" />
        </div>
      </div>
      <BestReviews />
      <div className="fourthBanner">
        <img alt="foot_banner" src="images/footerbanner.png" />
      </div>
    </div>
  );
};

export default Main;
