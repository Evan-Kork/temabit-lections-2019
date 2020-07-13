import React, { ReactElement } from 'react';

export default function SocialNetworks() : ReactElement {
  return (
    <div className='social-nets mt-auto'>
      <a href='https://www.facebook.com/justinpostservice' target='_blank'>
        <i className='icon-facebook'></i>
      </a>
      <a href='https://instagram.com/justinpostservice' target='_blank'>
        <i className='icon-instagram'></i>
      </a>
      <a href='https://t.me/justinpostservice_bot' target='_blank'>
        <i className='icon-telegram'></i>
      </a>
      <a href='https://m.me/justinpostservice' target='_blank'>
        <i className='icon-messenger'></i>
      </a>
      <a href='https://tinyurl.com/justinpostservice' target='_blank'>
        <i className='icon-viber'></i>
      </a>
    </div>
  );
}


