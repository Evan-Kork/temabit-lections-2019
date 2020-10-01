import React from 'react';
import { Link } from 'react-router-dom';
import SearchTtnInput from './search-ttn-input/search-ttn-input';
import SidebarBtn from './sidebar-btn/sidebar-btn';

function Header() {
  return (
    <header>
      <Link to='/'>
        <img
          src='https://justin.ua/wp-content/uploads/2019/03/logo_new.png'
          alt='logo'
          className='mb-xl-3'
        />
      </Link>
      <a href='https://international.justin.ua/' target='_blank'>
        <img
          src='https://justin.ua/wp-content/uploads/2020/02/Knopka_Mignarodna_DOSTAVKA.png'
          alt='Img'
        />
      </a>
      <a href='https://my.justin.ua/login' target='_blank'>
        <img
          src='https://justin.ua/wp-content/uploads/2020/02/KABINET.png'
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

export default Header;
