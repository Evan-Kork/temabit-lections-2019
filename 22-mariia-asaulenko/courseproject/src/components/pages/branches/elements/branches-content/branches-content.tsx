import * as React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../../../scss/pages/branches/elements/branches-content/branches-content.scss'

const BranchesContent:React.FC = () => (
  <Container className="branches-content">
    <Row className="text-center">
      <Col className="d-none d-md-flex"></Col>
      <Col className="d-none d-md-flex">Ми там, де Вам зручно!</Col>
      <Col>
        <Link className="btn-btn" to="/spisok-viddilen">Список поштомаркетів (відділень)</Link>
      </Col>
    </Row>
  </Container>
)
      
export default BranchesContent;