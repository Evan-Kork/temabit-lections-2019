import * as React from 'react';
import Header from '../../header/header';
import Drawer from '../../drawer/drawer';
import Footer from '../../footer/footer';
import BranchesContent from './elements/branches-content/branches-content';
import MyGoogleMap from './elements/google-map/google-map';
import ContentContainer from '../content-container/content-container';
import * as menuItems from '../../data/menu-items.json';
import TitlePages from '../title-pages/title-pages';
import '../../../scss/pages/tracking-ttn/tracking-ttn.scss';

const Branches:React.FC = () => (
  <div className="ttn-page d-flex flex-column flex-grow-1">
    <Header />
    <Drawer items={menuItems} />
    <ContentContainer >
      <TitlePages title={"Карта поштомаркетів (відділень)"} />
      <BranchesContent />
      <MyGoogleMap />
    </ContentContainer>
    <Footer items={menuItems} />
  </div>
)

export default Branches;