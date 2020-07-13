import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import SocialNetworks from './social-networks/social-networks';
import NavBar from './nav-bar/nav-bar';

export default function Footer() : ReactElement {
  return (
    <footer>
      <div className='row justify-content-center m-0'>
        <div className='col-12'>
          <NavBar />
        </div>
        <div className='col text-center text-nowrap'>
          <span>© 2020 Компанiя Justin</span>
        </div>
        <div className='col text-center text-sm-left m-3 m-sm-1'>
          <SocialNetworks />
        </div>
        <div className='col text-nowrap text-center'>
          <Link to='/'>Політика конфіденцiйності</Link>
        </div>
      </div>
    </footer>
  );
}
