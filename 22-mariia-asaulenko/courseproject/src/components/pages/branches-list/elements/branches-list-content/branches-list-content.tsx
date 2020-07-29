import * as React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import '../../../../../scss/pages/branches-list/branches-list-content.scss'
import { Link } from 'react-router-dom';
import { plainToClass } from "class-transformer";
import { ResultData } from '../../../../../../interface'
import { dataBranch, dataArr } from './class-branch'
import { validate } from 'class-validator'
import "reflect-metadata";
import "es6-shim";

interface Prop {
  itemsOnPage?: number;
}
const BranchesListContent: React.FC<Prop> = ({ itemsOnPage = 20 }) => {
  const [data, setData]: [Array<dataBranch>, Function] = React.useState([]);
  const [pagination, setPagination] = React.useState({ begin: 0, end: itemsOnPage });
  React.useEffect(() => {
    fetch('http://localhost:9000/branches').
      then((res) => res.json()).
      then((result: ResultData) => {
        if (result.status) {
          const branchesInfo = plainToClass(dataArr, result);
          validate(branchesInfo).then(res => {
            if (res.length > 0) {
              console.log('Error!!!! Poop data!Look=>', res)
            } else {
              setData(branchesInfo.result)
            }
          })
        }
      })
  }, [])

  const paginationNext = () => {
    window.scrollTo(0, 0);
    setPagination({ begin: pagination.end, end: pagination.end + itemsOnPage });
  }
  const paginationPrev = () => {
    window.scrollTo(0, 0);
    setPagination({ begin: pagination.begin - itemsOnPage, end: pagination.end - itemsOnPage });
  }

  return (
    <Container className="list-content">
      <Row className="text-center mb-3">
        <Col></Col>
        <Col>
          <Link to="/viddilennya" className="btn-btn">Карта відділень</Link>
        </Col>
      </Row>
      <Row>
        <Table striped bordered>
          <thead>
            <tr>
              <th className="number-th">№</th>
              <th className="addr-th">Адреса відділення</th>
              <th className="navigation-th">Навігація</th>
              <th className="servise-th">Сервіси</th>
              <th className="shedule-th">Графік роботи</th>
            </tr>
          </thead>
          <tbody>
            {
              data.slice(pagination.begin, pagination.end).
                map(({ number, shedule_description, services, getAdress, getServices, getNavigation }) => {
                  const shouldDisplay = Object.values(services).includes(1);
                  return (
                    <tr key={number}>
                      <td>{number}</td>
                      <td>{getAdress()}</td>
                      <td>{getNavigation()}</td>
                      {
                        shouldDisplay ? (getServices()) : <td></td>
                      }
                      <td>{shedule_description}</td>
                    </tr>
                  )
                })
            }
          </tbody>
        </Table>
      </Row>
      <Row className="justify-content-around">
        <button className="btn-prev" onClick={paginationPrev}>&lt; prev</button>
        <button className="btn-next" onClick={paginationNext}>next &gt;</button>
      </Row>
    </Container>
  )
}

export default BranchesListContent;