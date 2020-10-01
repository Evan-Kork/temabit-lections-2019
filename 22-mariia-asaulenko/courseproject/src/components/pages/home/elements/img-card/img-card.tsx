import * as React from 'react';
import '../../../../../scss/pages/home/elements/img-card.scss'

const ImgCard:React.FC = () => (
  <img
    className="img-card w-100"
    src="http://localhost:9000/img/500_pravka.png"
    alt="branches" 
  />
)

export default ImgCard;