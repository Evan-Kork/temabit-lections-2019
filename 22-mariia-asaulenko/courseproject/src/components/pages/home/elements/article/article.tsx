import * as React from 'react';
import '../../../../../scss/pages/home/elements/article.scss'
import {ChildrenProps} from '../../../../../../interface'

const Article = ({children}:ChildrenProps) => (
  <div className="article d-flex flex-column justify-content-center">{children}</div>
)

export default Article;