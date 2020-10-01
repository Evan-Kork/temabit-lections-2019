import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='nav-list'>
      <div className='row justify-content-center m-0'>
        <ul className='list-unstyled d-block mt-4'>
          <li>
            <Link to='/'>Про Justіn</Link>
          </li>
          <li>
            <Link to='/departments-map'>Карта вiдділень</Link>
          </li>
          <li>
            <Link to='/departments-list'>Список вiдділень</Link>
          </li>
          <li>
            <Link to='/info'>Довідкова інформація</Link>
          </li>
        </ul>
        <ul className='list-unstyled d-block mt-4'>
          <li>
            <Link to='/'>Тарифи</Link>
          </li>
          <li>
            <Link to='/'>Умови надання послуг</Link>
          </li>
          <li>
            <Link to='/'>Питання та відповіді</Link>
          </li>
          <li>
            <Link to='/'>Укласти договiр</Link>
          </li>
        </ul>
        <ul className='list-unstyled d-block mt-4'>
          <li>
            <Link to='/'>Нашi партнери</Link>
          </li>
          <li>
            <Link to='/'>Кредитнi посередники</Link>
          </li>
          <li>
            <Link to='/'>Новини</Link>
          </li>
          <li>
            <Link to='/'>Контакти</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
