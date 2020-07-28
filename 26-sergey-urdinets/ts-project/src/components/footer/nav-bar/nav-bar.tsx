import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { leftColumn, centerColumn, rightColumn } from './links';

export default function NavBar(): ReactElement {
  return (
    <div className='nav-list'>
      <div className='row justify-content-center m-0'>
        <ul className='list-unstyled d-block nav-list-column'>
          {leftColumn.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.href}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul className='list-unstyled d-block nav-list-column'>
          {centerColumn.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.href}>{item.name}</Link>
              </li>
            );
          })}
        </ul>

        <ul className='list-unstyled d-block nav-list-column'>
          {rightColumn.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.href}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
