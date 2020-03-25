import React from 'react';
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCalculator } from '@fortawesome/free-solid-svg-icons'
import '../../../../../../scss/pages/home/elements/card-item.scss'
import { Link } from 'react-router-dom';

const icons = { faMapMarkerAlt, faCalculator };
const CardItem = ({ image, title, path, buttonName }) => (
  <Card  className="card-item align-items-center col-5">
    <FontAwesomeIcon icon={icons[image]} />
    <Card.Body>
      <Card.Title className="cardText">{title}</Card.Title>
      <Link className="btn-btn" to={path}>{buttonName}</Link>
    </Card.Body>
  </Card>
)

export default CardItem