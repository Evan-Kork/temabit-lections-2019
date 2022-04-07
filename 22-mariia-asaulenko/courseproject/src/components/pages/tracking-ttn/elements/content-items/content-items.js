import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import StatusCard from '../status-card/status-card';
import DisabledCard from '../disabled-card/disabled-card';
import ttnHistory from '../../../../data/ttn-history';
import '../../../../../scss/pages/tracking-ttn/elements/content-items.scss'

const useQuery = () => new URLSearchParams(useLocation().search);

const ContentItems = () => {
  const statusNames = ["zaplanovano", "vDoroge", "vViddilenni", "odergano"];
  let query = useQuery();
  const ttnNumber = query.get("ttn_number");

  const [orderNumber, setOrderNumber] = useState(ttnNumber);
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    setOrderNumber(ttnNumber);
    fetch(`http://localhost:9000/tracking_history/${ttnNumber}`).
      then((res) => res.json()).
      then(({ result = [] }) => setOrderData(result))
  }, [ttnNumber])

  const getOrderNumber = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setOrderNumber(event.target.value);
  }

  const setNum = () => {
    event.stopPropagation();
    event.preventDefault();
    window.location.href = `/#/tracking-ttn/?ttn_number=${orderNumber}`;
  }

  const getNewData = (heapDataArr) => {
    let newData = [...heapDataArr];

    newData.sort((a, b) => Date.parse(a.date) < Date.parse(b.date) ? 1 : -1)
    const data = newData.reduce((result, currentItem) => {
      switch (currentItem.status) {
        case ("Запланована до відправки"):
          return result.zaplanovano ?
            result : {
              ...result,
              zaplanovano: currentItem
            };
        case ("Прямує в місто одержання"):
          return result.vDoroge ?
            result : {
              ...result,
              vDoroge: currentItem
            };
        case ("На відділенні в місті одержання"):
          return result.vViddilenni ?
            result : {
              ...result,
              vViddilenni: currentItem
            };
        case ("Одержано"):
          return result.odergano ?
            result : {
              ...result,
              odergano: currentItem
            };
        default:
          return result;
      }
    }, {})

    const { vViddilenni, odergano, vDoroge, zaplanovano } = data;
    if (vViddilenni && odergano && Date.parse(vViddilenni.date) > Date.parse(odergano.date)) {
      data.odergano = null;
    };
    if (vDoroge && vViddilenni && Date.parse(vDoroge.date) > Date.parse(vViddilenni.date)) {
      data.vViddilenni = null
    };
    if (zaplanovano && vDoroge && Date.parse(zaplanovano.date) > Date.parse(vDoroge.date)) {
      data.vDoroge = null
    };
    return data
  }

  let finishData;
  if (orderData) {
    finishData = getNewData(orderData)
  };

  const handleKeyPress = (event) => event.key === 'Enter' && setNum()
  return (
    <Container className="content-items d-flex flex-column justify-content-center align-items-center w-100 ">
      <Row className="d-flex justify-content-center align-items-center my-3">
        <span className="d-none d-md-flex">Стан відправлення</span>
        <div className="d-flex justify-content-center align-items-center my-3">
          <form onSubmit={setNum}>
            <input
              id="tracking"
              className="tracking"
              type="text"
              onChange={getOrderNumber}
              value={orderNumber}
              pattern="^[ 0-9]+$"
              placeholder="Введіть номер відправлення"
              onKeyPress={handleKeyPress}>
            </input>
            <button className="submit-btn">
              <FontAwesomeIcon icon={faCaretRight} />
            </button>
          </form>
        </div>
      </Row>
      {
        (finishData) ?
          ((finishData.odergano) ?
            (<Row className="d-flex justify-content-center w-100 py-3">
              <StatusCard {...finishData.zaplanovano} {...ttnHistory[ttnHistory.length - 1]} />
            </Row>) : (
              <Row className="d-flex justify-content-between w-100 py-5">
                {
                  statusNames.map((item, index) => (
                    finishData[item] ?
                      <StatusCard {...finishData[item]} {...ttnHistory[index]} /> :
                      <DisabledCard {...ttnHistory[index]} />
                  ))
                }
              </Row>
            )
          ) :
          (<>
            <div><b>Вантаж не знайдено. Перевірте номер ТТН</b></div>
            <Row className="d-flex justify-content-between w-100 py-5">
              {
                ttnHistory.map((item) => (
                  <DisabledCard {...item} />
                ))
              }
            </Row>
          </>)
      }
    </Container >
  )
}

export default ContentItems;