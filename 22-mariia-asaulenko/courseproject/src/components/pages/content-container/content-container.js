import React from 'react';
import '../../../scss/pages/content-container/content-container.scss';

const ContentContainer = ({ children }) => (
  <div className="content d-flex flex-column align-items-center flex-grow-1">
    {children}
  </div>
)

export default ContentContainer;