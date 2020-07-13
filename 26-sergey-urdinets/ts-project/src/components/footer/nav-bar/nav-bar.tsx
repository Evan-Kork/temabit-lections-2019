import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import {leftColumn, centerColumn, rightColumn} from './links';

export default function NavBar(): ReactElement {
  return (
    <div className='nav-list'>
      <div className='row justify-content-center'>
        <div className='col-8 col-md-4 col-lg-3'>
          <ul className='list-unstyled'>
              {leftColumn.map((item, index) => {
                return (
                  <li  key={index}>
                    <Link to={item.href}>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className='col-8 col-md-4 col-lg-3'>
          <ul className='list-unstyled'>
              {centerColumn.map((item, index) => {
                return (
                  <li  key={index}>
                    <Link to={item.href}>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className='col-8 col-md-4 col-lg-3'>
          <ul className='list-unstyled'>
              {rightColumn.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.href} >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}


