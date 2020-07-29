import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPhone } from '@fortawesome/free-solid-svg-icons'
import '../../scss/header.scss';

const Header:React.FC = () => {
  const dispatch = useDispatch();
  function openDrawer() {
    dispatch({ type: 'OPEN_DRAWER' });
  }
  const [orderNumber, setOrderNumber] = React.useState('');
  const getOrderNumber = (event:React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setOrderNumber(event.target.value);
  }
  const setNum = (event:React.SyntheticEvent) => {
    event.stopPropagation();
    event.preventDefault();
    window.location.href = `/#/tracking-ttn/?ttn_number=${orderNumber}`;
    setOrderNumber('');
  }

  return (
    <header className="header d-flex justify-content-around">
      <Row className="d-flex">
        <Col className="menu-item order-lg-1">
          <Link to="/">
            <img alt="logo" src="http://localhost:9000/img/logo_new.png"></img>
          </Link>
        </Col>
        <Col className="contact menu-item d-md-none order-lg-3">
          <a href="#">
            <FontAwesomeIcon icon={faPhone} />
          </a>
        </Col>
        <Col className="menu-item d-none d-md-flex order-lg-3">
          <a className="contact" href="#">0-800-301-661</a>
        </Col>
        <Col className="menu-item d-md-none order-lg-4">
          <a href="#">
            <FontAwesomeIcon icon={faSearch} />
          </a>
        </Col>
        <Col className="menu-item d-none d-md-flex order-lg-4">
          <form onSubmit={setNum}>
            <input
              onChange={getOrderNumber}
              className="tracking"
              type="text"
              pattern="^[0-9]+$"
              placeholder="Введіть номер відправлення"
              value={orderNumber}
            >
            </input>
          </form>
        </Col>
        <Col className="menu-item order-lg-5" onClick={openDrawer}>
          <div className="burger-btn">&#9776;</div>
        </Col>
        <div className="group-btn d-flex flex-row order-lg-2 my-0 mx-auto m-lg-0">
          <Col className="menu-item ">
            <a href="#">
              <img alt="delivery" src="http://localhost:9000/img/Knopka_Mignarodna_DOSTAVKA.png"></img>
            </a>
          </Col>
          <Col className="menu-item">
            <a href="#">
              <img alt="user-cabbinet" src="http://localhost:9000/img/KABINET.png"></img>
            </a>
          </Col>
        </div>
      </Row>
    </header>
  )
}

export default Header;