import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialNetworks from '../social-networks/social-networks'
import { ItemMenu } from '../../../interface'
import '../../scss/footer.scss'

interface ItemsProps {
  items: Array<ItemMenu[]>
}

const Footer: React.FC<ItemsProps> = ({ items }) => (
  <footer>
    <Container>
      <Row>
        {items.map((item, index) => (
          <Col className="menu-blok" key={index}>
            <ul>
              {
                item.map(({ id, title, link }) => (
                  <li key={id}>
                    <Link to={link}>{title}</Link>
                  </li>)
                )
              }
            </ul>
          </Col>))
        }
      </Row>
      <Row className="p-3">
        <Col>
          <div>&copy; {new Date().getFullYear()} Компания Justin</div>
        </Col>
        <Col className="d-flex justify-content-around social-networks" >
          <SocialNetworks />
        </Col>
        <Col>
          <a href="https://justin.ua/polityka-konfidentsijnosti/">Політика конфіденційності</a>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer;