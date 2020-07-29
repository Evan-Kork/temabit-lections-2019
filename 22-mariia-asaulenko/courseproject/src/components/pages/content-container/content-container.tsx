import * as React from 'react';
import '../../../scss/pages/content-container/content-container.scss';

const ContentContainer:React.FC = ({ children }) => (
  <div className="content d-flex flex-column align-items-center flex-grow-1">
    {children}
  </div>
)

export default ContentContainer;