import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import StatusCard from '../status-card/status-card';
import DisabledCard from '../disabled-card/disabled-card';
import * as ttnHistory from '../../../../data/ttn-history.json';
import { plainToClass } from "class-transformer";
import { ResultData, State } from '../../../../../../interface';
import { validate } from "class-validator";
import { DataTtn, Ttn, ValDataTtn } from './class-datattn';
import {STATUS_PACKAGE} from './enum'
import "reflect-metadata";
import "es6-shim";
import '../../../../../scss/pages/tracking-ttn/elements/content-items.scss'

interface DataTransform {
  [zaplanovano: string]: DataTtn;
  vDoroge?: DataTtn;
  vViddilenni?: DataTtn;
  odergano?: DataTtn;
}

const useQuery = () => new URLSearchParams(useLocation().search);

const ContentItems: React.FC = () => {
  const statusNames: Array<string> = ["zaplanovano", "vDoroge", "vViddilenni", "odergano"];
  let query = useQuery();
  const ttnNumber: string = query.get("ttn_number");

  const orderNumber = React.useMemo( ()=>new Ttn(),[]) ;
  let setOrderNumber: React.Dispatch<React.SetStateAction<string>>;

  const useorderNumber = (orderNumber: Ttn, ttnNumber: string) => {
    [orderNumber.code, setOrderNumber] = React.useState(ttnNumber);
    const [orderData, setOrderData]: [Array<DataTtn>, React.Dispatch<React.SetStateAction<Array<DataTtn>>>] = React.useState([]);
    React.useEffect(() => {
      setOrderNumber(ttnNumber);
      fetch(`http://localhost:9000/tracking_history/${ttnNumber}`).
        then((res) => res.json()).
        then((result: ResultData) => {
          console.log('result', result)
          if (result.status) {
            const dataToOrder = plainToClass(ValDataTtn, result);
            validate(dataToOrder).then((res) => {
              if (res.length > 0) {
                console.log('Error!!!! Poop data! Look=>', res)
                setOrderData([]);
              } else {
                setOrderData(dataToOrder.result);
              }
            })
          } else {
            setOrderData([]);
          }
        })
    }, [ttnNumber])
    const getOrderNumber = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
      event.stopPropagation();
      event.preventDefault();
      setOrderNumber(event.target.value);
    }, [event]);
    const setNum = React.useCallback((orderNumber) => {
      event.stopPropagation();
      event.preventDefault();
      validate(orderNumber).then(res => {
        if (res.length > 0) {
          res.map(({ constraints }: any, index: number) => {
            for (let nameError in constraints) {
              alert(constraints[nameError])
            }
          })
        } else {
          window.location.href = `/#/tracking-ttn/?ttn_number=${orderNumber.code}`;
        }
      })
    }, [])
    const handleKeyPress = React.useCallback((event: React.KeyboardEvent) => {
    return event.key === 'Enter' && setNum(orderNumber)
  }, [orderNumber]);
    return {getOrderNumber, handleKeyPress, setNum, orderData};
  }
  const {getOrderNumber, handleKeyPress, setNum, orderData} = useorderNumber (orderNumber, ttnNumber);

  const getNewData = React.useCallback((heapDataArr: Array<DataTtn>) => {
    let newData: Array<DataTtn> = [...heapDataArr];
    newData.sort((a, b) => Date.parse(a.date) < Date.parse(b.date) ? 1 : -1)
    const data: DataTransform = newData.reduce((result: DataTransform, currentItem: DataTtn) => {
      switch (currentItem.status) {
        case (STATUS_PACKAGE.ZAPLANOVANO):
          return result.zaplanovano ?
            result : {
              ...result,
              zaplanovano: currentItem
            };
        case (STATUS_PACKAGE.V_DOROGE):
          return result.vDoroge ?
            result : {
              ...result,
              vDoroge: currentItem
            };
        case (STATUS_PACKAGE.V_VIDDILENNI):
          return result.vViddilenni ?
            result : {
              ...result,
              vViddilenni: currentItem
            };
        case (STATUS_PACKAGE.ODERGANO):
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
  }, [])

  let finishData: DataTransform;
  if (orderData.length > 0) {
    finishData = getNewData(orderData)
  };

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
              value={orderNumber.code}
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