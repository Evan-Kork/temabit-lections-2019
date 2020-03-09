import React from 'react';

function getImg(status) {
  switch (status) {
    case 'Запланована до відправки':
      return 'https://justin.ua/wp-content/uploads/2019/06/start_on.png';
    case 'В місті відправника':
      return 'https://justin.ua/wp-content/uploads/2019/06/start_on.png';
    case 'Прямує в місто одержання':
      return 'https://justin.ua/wp-content/uploads/2019/06/road_on.png';
    case 'На відділенні в місті одержання':
      return 'https://justin.ua/wp-content/uploads/2019/06/department_on.png';
    case 'Одержано':
      return 'https://justin.ua/wp-content/uploads/2019/06/end_success_on.png';
    default:
      return 'https://justin.ua/wp-content/uploads/2019/06/start_on.png';
  }
}

function ResultOutput(props) {

  return (
    <>
      <div className='col col-sm-4 col-xl-2 mt-4'>
        <div className='ttn-status-img d-flex justify-content-center'>
          <img
            src={getImg(props.item.status)}
            className='img-fluid d-block'
            alt='Image'
          />
        </div>
        <p className='h5 mt-3 text-center bottom-spacer'>{props.item.status}</p>
        <p>{props.item.orderDescription}</p>
        {props.item.date ? <p>{`Дата: ${props.item.date}`}</p> : null}
        {props.item.time ? <p>{`Час: ${props.item.time}`}</p> : null}
        {props.item.departmentNumber ? (
          <p>Відділення: {props.item.departmentNumber}</p>
        ) : null}
        {props.item.departmentAdress ? (
          <p>Адреса відділення: {props.item.departmentAdress}</p>
        ) : null}
      </div>
      <div className='w-100 d-sm-none'></div>
    </>
  );
}

export default ResultOutput;
