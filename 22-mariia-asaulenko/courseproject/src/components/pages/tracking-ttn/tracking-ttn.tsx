import * as React from 'react';
import Header from '../../header/header';
import Drawer from '../../drawer/drawer';
import Footer from '../../footer/footer';
import ContentContainer from '../content-container/content-container';
import ContentItems from './elements/content-items/content-items';
import * as menuItems from '../../data/menu-items.json';
import TitlePages from '../title-pages/title-pages';
import '../../../scss/pages/tracking-ttn/tracking-ttn.scss';

const TrackingTtn = () => (
  <div className="ttn-page d-flex flex-column flex-grow-1">
    <Header />
    <Drawer items={menuItems} />
    <ContentContainer >
      <TitlePages title={"Трекер посилки"} />
      <ContentItems />
    </ContentContainer>
    <Footer items={menuItems} />
  </div>
)

export default TrackingTtn;