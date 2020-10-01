import * as React from 'react';
import Header from '../../header/header';
import Drawer from '../../drawer/drawer';
import Footer from '../../footer/footer';
import ContentContainer from '../content-container/content-container';
import BranchesListContent from './elements/branches-list-content/branches-list-content'
import * as menuItems from '../../data/menu-items.json';
import TitlePages from '../title-pages/title-pages';

const BranchesList:React.FC = () => (
  <div className="d-flex flex-column flex-grow-1">
    <Header />
    <Drawer items={menuItems} />
    <ContentContainer >
      <TitlePages title={"Наші відділення (поштомаркети)"} />
      <BranchesListContent />
    </ContentContainer>
    <Footer items={menuItems} />
  </div>
)

export default BranchesList;