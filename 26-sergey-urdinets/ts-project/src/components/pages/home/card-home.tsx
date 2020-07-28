import React, { ReactElement } from 'react';

interface Props {
  img: string;
  href: string;
  btnTitle: string;
  title: string;
}

export default function Card({
  img,
  href,
  btnTitle,
  title,
}: Props): ReactElement<Props> {
  return (
    <div className='card m-1 m-lg-5 col-10 col-sm-5 col-lg-3 col-xl-2 bg-white'>
      <img src={img} className='card-img-top m-2 mt-4' alt='Img' />
      <div className='card-body p-4'>
        <h3 className='card-title mt-2'>{title}</h3>
        <a href={href} className='btn btn-primary'>
          {btnTitle}
        </a>
      </div>
    </div>
  );
}
