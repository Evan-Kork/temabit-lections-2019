import * as React from 'react';
import '../../../../../scss/pages/home/elements/article.scss'

const Article:React.FC = ({children}) => (
  <div className="article d-flex flex-column justify-content-center">{children}</div>
)

export default Article;