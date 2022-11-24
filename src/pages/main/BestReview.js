import React, { useState, useEffect } from 'react';
import './BestReview.scss';

const BestReview = () => {
  const [bestReviews, setBestReviews] = useState([]);

  const antiBio = bestReviews.filter(e => {
    return e.antibiotic === true;
  });

  const tabClickHandler = index => {
    setActiveIndex(index);
  };

  const arr = [];
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * bestReviews.length);
    let recommend = bestReviews[randomIndex];
    arr.push(recommend);
  }

  const [activeIndex, setActiveIndex] = useState(0);

  const tabContArr = [
    {
      tabTitle: (
        <span
          className={
            activeIndex === 0
              ? 'headerTitle is-active'
              : 'headerTitle none-active'
          }
          onClick={() => {
            tabClickHandler(0);
          }}
        >
        </span>
      ),
      tabCont: antiBio.map(data => {
        return <Products data={data} key={data.id} />;
      }),
    },

    {
      tabTitle: (
        <span
          className={
            activeIndex === 1
              ? 'headerTitle is-active'
              : 'headerTitle none-active'
          }
          onClick={() => {
            tabClickHandler(1);
          }}
        >
          HOT 후기
        </span>
      ),
      tabCont: bestItems.map(data => {
        return <Products data={data} key={data.id} />;
      }),
    },

    {
      tabTitle: (
        <span
          className={
            activeIndex === 2
              ? 'headerTitle is-active'
              : 'headerTitle none-active'
          }
          onClick={() => {
            tabClickHandler(2);
          }}
        >
         
        </span>
      ),
      tabCont: arr.map((data, index) => {
        return <Products data={data} key={index} />;
      }),
    },
  ];

  useEffect(() => {
    fetch('./data/bestReviews.json')
      .then(res => res.json())
      .then(result => setBestReviews(result));
  }, []);
  return (
    <div className="bestItems">
      <div className="best_header">
        <span className="best_title">
          {tabContArr.map((section, index) => {
            return section.tabTitle;
          })}
        </span>
      </div>
    </div>
  );
};

export default BestReviews;
