import React, { useState, useEffect } from 'react';
import './BestResumes.scss';

const BestResumes = () => {
  const [bestResumes, setBestResumes] = useState([]);

  const antiBio = bestResumes.filter(e => {
    return e.antibiotic === true;
  });

  const tabClickHandler = index => {
    setActiveIndex(index);
  };

  const arr = [];
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * bestResumes.length);
    let recommend = bestResumes[randomIndex];
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
          HOT 이력서
        </span>
      ),
      tabCont: bestResumes.map(data => {
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
    fetch('./data/bestResume.json')
      .then(res => res.json())
      .then(result => setBestResumes(result));
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

export default BestResume;
