import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import SearchTtnInput from './search-ttn-input/search-ttn-input';
import SidebarBtn from './sidebar-btn/sidebar-btn';
import imgIntDelivery from '../../img/Knopka_Mignarodna_DOSTAVKA.png';
import imgPersAcc from '../../img/KABINET.png';
import imgLogo from '../../img/logo_new.png';

export default function Header() : ReactElement {
  return (
    <header>
      <Link to='/'>
        <img
          src={imgLogo}
          alt='logo'
          className='mb-xl-3'
        />
      </Link>
      <a href='https://international.justin.ua/' target='_blank'>
        <img
          src={imgIntDelivery}
          alt='Img'
        />
      </a>
      <a href='https://my.justin.ua/login' target='_blank'>
        <img
          src={imgPersAcc}
          alt='Img'
        />
      </a>
      <div className='w-100 d-lg-none'></div>
      <a href='tel:0-800-301-661'>
        <span className='tel'>0-800-301-661</span>
      </a>
      <div className='w-100 d-sm-none'></div>
      <SearchTtnInput />
      <SidebarBtn />
    </header>
  );
}


