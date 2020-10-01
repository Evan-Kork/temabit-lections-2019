import * as React from 'react';
import '../../../scss/pages/title-pages/title-pages.scss';

interface TitleProp {
  title: string
}

const TitlePages:React.FC<TitleProp> = ({title}) => (
  <div className="title d-flex flex-column align-items-center">
    <div className="line-top"></div>
    <h2>{title}</h2>
  </div>
)

export default TitlePages;