import React from 'react';
import {Department} from '../../../../../../interfaces/interfaces'

interface Props {
  data: Department[]
}

export default function Table(props: Props) {
  return (
    <table className='w-100'>
      <thead className='text-center bg-white'>
        <tr>
          <th>№</th>
          <th>
            Адреса,
            <br />
            <a href='#/info' target='_blank'>
              тип відділення<sup>[?]</sup>
            </a>
          </th>
          <th>Навігація</th>
          <th>
            <a href='#/info' target='_blank'>
              Сервіси<sup>[?]</sup>
            </a>
          </th>
          <th>Графік роботи</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((i, index) => (
          <tr key={index} className={index % 2 ? 'bg-white' : 'bg-light'}>
            <td>{i.number}</td>
            <td>{`${i.adress}. ${i.format} (до ${i.max_weight} кг)`}</td>
            <td>{i.public.navigation_ua}</td>
            <td>
              {i.services.remittance ? <>Грошовий переказ<br /></> : null}
              {i.services.cardpay ? <>Оплата карткою<br /></>  : null}
              {i.services.fitting ? <>Примірочна<br /></>  : null}
              {i.services.vending ? <>Вендинг<br /></>  : null}
              {i.services.monobank ? <>Картка "Монобанк"<br /></>  : null}
              {i.services["3mob"] ? <>3Mob<br /></>  : null}
              {i.services.uplata ? <>Uplata<br /></>  : null}
              {i.services.joint ? <>Joint<br /></>  : null}
            </td>
            <td>{i.shedule_description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}