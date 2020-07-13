import * as React from 'react'
import { Col } from 'react-bootstrap'
import '../../../../../scss/pages/tracking-ttn/elements/status-card.scss'

interface CardProp {
  date: string;
  departmentNumber: number;
  departmentAdress: string;
  id: string;
  alt: string;
  imgState: string;
  titleState: string;
  text: string;
}
const StatusCard = ({date, departmentNumber, departmentAdress, id,alt, imgState, titleState, text}:CardProp) => {
  
  const dataParse = (dat:string) => {
    const date = new Date(Date.parse(dat));
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timezone: 'UTC',
    };
    return date.toLocaleString("uk-UA", options);
  }

  return (
    <Col className="item-status align-items-center col-12 col-sm-6 col-md-3 d-flex flex-column" key={id}>
      <div className="img-container">
        <img alt={alt} src={imgState} />
      </div>
      <div className="title-status">{titleState}</div>
      <div className="line-bottom w-100 "></div>
      <div className="body-text">
        <div>
          <b>Дата:</b>
          {dataParse(date)}
        </div>
        <div>{text}</div>
        {
          departmentNumber &&
          <>
            <div>
              <b>Номер відділення для отримання:</b>
              {departmentNumber}
            </div>
            <div>
              <b>Адреса відділення:</b>
              {departmentAdress}
            </div>
          </>
        }
      </div>
    </Col>
  )
}

export default StatusCard;