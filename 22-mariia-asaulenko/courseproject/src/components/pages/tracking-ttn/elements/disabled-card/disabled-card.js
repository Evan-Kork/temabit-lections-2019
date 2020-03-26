import React from 'react'
import { Col } from 'react-bootstrap'
import '../../../../../scss/pages/tracking-ttn/elements/disabled-card.scss'


const DisabledCard = ({ id, alt, imgState }) => (
  <Col className="item-status col-12 col-sm-6 col-md-3 d-flex flex-column align-items-center disable" key={id}>
    <div className="img-container">
      <img alt={alt} src={imgState} />
    </div>
    <div className="title-status my-4"></div>
    <div className="line-bottom w-100 "></div>
  </Col>
)

export default DisabledCard;