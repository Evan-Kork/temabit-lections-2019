import React from 'react';

function Card(props) {
  return (
    <div className='card m-1 m-lg-5 col-10 col-sm-5 col-lg-3 col-xl-2 bg-white'>
      <img src={props.img} className='card-img-top m-2 mt-4' alt='Img' />
      <div className='card-body p-4'>
        <h3 className='card-title mt-2'>{props.title}</h3>
        <a href={props.href} className='btn btn-primary'>
          {props.btnTitle}
        </a>
      </div>
    </div>
  );
}

export default Card;
