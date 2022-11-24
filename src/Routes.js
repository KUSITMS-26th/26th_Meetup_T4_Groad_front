import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './pages/MyResume/Myresume';
import Detail from './pages/Mypage/Mypage';
import Cart from './pages/Resume/Resume';
import Payment from './pages/Review/Review';
import Main from './pages/Main/Main';
import Footer from './component/footer/Footer';
import Header from './component/nav/Nav';
import ScrollToTop from './components/ScrollToTop';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path="/myresume" element={<Myresume />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/review" element={<Review />} />
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
