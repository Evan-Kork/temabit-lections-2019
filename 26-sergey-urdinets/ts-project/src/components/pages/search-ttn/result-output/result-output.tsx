import React, { ReactElement } from 'react';
import { deliveryImgs } from '../../../../img/img';
import { ResultTTN } from '../../../../interfaces/interfaces';
import { DELIVERY_STATUS } from '../../../constants';

function getImg(status: DELIVERY_STATUS) {
  switch (status) {
    case DELIVERY_STATUS.PLANNED_TO_DELIVERY:
      return deliveryImgs.opened;
    case DELIVERY_STATUS.ACCEPTED_TO_DELIVERY:
      return deliveryImgs.opened;
    case DELIVERY_STATUS.IN_SENDER_CITY:
      return deliveryImgs.opened;
    case DELIVERY_STATUS.IN_THE_ROAD:
      return deliveryImgs.onRoad;
    case DELIVERY_STATUS.ON_THE_DEPARTMENT:
      return deliveryImgs.onDepartment;
    case DELIVERY_STATUS.COMPLETED:
      return deliveryImgs.completed;
    default:
      return deliveryImgs.error;
  }
}

type Props = {
  item: ResultTTN;
};

export default function ResultOutput({ item }: Props): ReactElement<Props> {
  return (
    <>
      <div className='col col-sm-4 col-xl-2 mt-4'>
        <div className='ttn-status-img d-flex justify-content-center'>
          <img
            src={getImg(item.status)}
            className='img-fluid d-block'
            alt='Image'
          />
        </div>
        <p className='h5 mt-3 text-center bottom-spacer'>{item.status}</p>
        <p>{item.orderDescription}</p>
        {item.date ? <p>{`Дата: ${item.date}`}</p> : null}
        {item.time ? <p>{`Час: ${item.time}`}</p> : null}
        {item.departmentNumber ? (
          <p>Відділення: {item.departmentNumber}</p>
        ) : null}
        {item.departmentAdress ? (
          <p>Адреса відділення: {item.departmentAdress}</p>
        ) : null}
      </div>
      <div className='w-100 d-sm-none'></div>
    </>
  );
}
