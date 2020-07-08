import * as React from 'react'
import '../../../../../scss/pages/home/elements/cards.scss'
import * as cards from '../../../../data/card-info.json';
import CardItem from './card-item/card-item';
import { CardProp } from "../../../../../../interface";

const Cards = () => (
  <div className="cards-row d-flex flex-row justify-content-around w-100">
    {
      cards.map((item:CardProp, index:number) => (
        <CardItem key={index} {...item} />
      ))
    }
  </div>
)

export default Cards