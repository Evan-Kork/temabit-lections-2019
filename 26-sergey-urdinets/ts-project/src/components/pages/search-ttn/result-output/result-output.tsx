import React,  { ReactElement } from 'react';
import imgRoadOn from '../../../../img/road_on.png';
import imgStartOn from '../../../../img/start_on.png';
import imgDepartmentOn from '../../../../img/department_on.png';
import imgEndSuccessOn from '../../../../img/end_success_on.png';
import { ResultTTN } from '../../../../interfaces/interfaces';


function getImg(status: string) {
  switch (status) {
    case 'Запланована до відправки':
      return imgStartOn;
    case 'В місті відправника':
      return imgStartOn;
    case 'Прямує в місто одержання':
      return imgRoadOn;
    case 'На відділенні в місті одержання':
      return imgDepartmentOn;
    case 'Одержано':
      return imgEndSuccessOn;
    default:
      return imgStartOn;
  }
}

type Props = {
  item: ResultTTN;
}


function ResultOutput(props: Props) : ReactElement<Props> {
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
