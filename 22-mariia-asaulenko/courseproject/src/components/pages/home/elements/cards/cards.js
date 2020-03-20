import React from 'react'
import '../../../../../scss/pages/home/elements/cards.scss'
import cards from '../../../../data/card-info';
import CardItem from './card-item/card-item';

const Cards = () => (
  <div className="cards-row d-flex flex-row justify-content-around w-100">
    {
      cards.map((item, index) => (
        <CardItem key={index} {...item} />
      ))
    }
  </div>
)

export default Cards