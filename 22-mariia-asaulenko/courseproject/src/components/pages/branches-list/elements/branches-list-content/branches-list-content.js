import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import '../../../../../scss/pages/branches-list/branches-list-content.scss'
import { Link } from 'react-router-dom';

const BranchesListContent = () => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ begin: 0, end: 19 });
  useEffect(() => {
    fetch('http://localhost:9000/branches').
      then((res) => res.json()).
      then(({ result = [] }) => {
        setData(result)
      })
  }, [])

  const paginationNext = () => {
    window.scrollTo(0, 0);
    setPagination({ begin: pagination.end + 1, end: pagination.end + 20 });
  }
  const paginationPrev = () => {
    window.scrollTo(0, 0);
    setPagination({ begin: pagination.begin - 20, end: pagination.end - 20 });
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
                map(({ number, adress, format, max_weight, services, shedule_description, ...rest }) => {
                  const shouldDisplay = Object.values(services).includes(1);
                  return (
                    <tr key={number}>
                      <td>{number}</td>
                      <td>{`${adress} ${format} (${max_weight})`}</td>
                      <td>{rest.public.navigation_ua}</td>
                      {
                        shouldDisplay ?
                        (<td className="text-capitalize">
                          <b>Додаткові:</b>
                          {`картка ${
                            Object.entries(services).reduce((str, [key, value]) =>
                              value ? `${str} ${key},` : str, "")}`}
                        </td>
                        ): 
                        <td></td>
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