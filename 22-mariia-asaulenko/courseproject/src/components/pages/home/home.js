import React from 'react';
import Header from '../../header/header';
import Drawer from '../../drawer/drawer'
import MainCarusel from './elements/carusel/main-carusel';
import Cards from './elements/cards/cards'
import Article from './elements/article/article'
import ImgCard from './elements/img-card/img-card'
import Footer from '../../footer/footer';
import menuItems from '../../data/menu-items';

const Home = () =>
  (
    <>
      <Header />
      <Drawer items={menuItems} />
        <MainCarusel />
        <Article >
          <Cards />
          <ImgCard />
        </Article>
        <Footer items={menuItems} />
    </>
  )

export default Home;
