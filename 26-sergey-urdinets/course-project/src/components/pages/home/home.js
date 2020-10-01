import React, { useEffect } from 'react';
import Card from './card-home';

function Home() {
  useEffect(() => {
    document.title = 'Justin | Поштові послуги';
  }, []);

  return (
    <div className='home row justify-content-center m-0 text-center'>
      <Card
        img='https://t3.ftcdn.net/jpg/00/95/07/14/240_F_95071432_1O8BWEIDGtd27ogifnx0aIiCcsDcLtUD.jpg'
        title='Відділення'
        btnTitle='Знайти відділення'
        href='#/departments-map'
      />
      <div className='w-100 d-sm-none'></div>
      <Card
        img='https://image.flaticon.com/icons/png/512/124/124719.png'
        title='Калькулятор'
        btnTitle='Розрахувати вартість відправлення'
        href='#/'
      />
      <div className='w-100'></div>
      <img
        src='https://justin.ua/wp-content/uploads/2019/04/500_pravka.png'
        className='img-fluid d-block col col-lg-9 m-1 m-md-3 m-xl-5'
        alt='Responsive image'
      />
      <div className='w-100'></div>
    </div>
  );
}

export default Home;