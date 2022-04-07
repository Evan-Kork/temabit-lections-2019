import React from 'react';
import '../../scss/drawer.scss';
import { useSelector, useDispatch } from 'react-redux';
import SocialNetworks from '../social-networks/social-networks'
import { Link } from 'react-router-dom';

function Drawer({ items }) {
  const dispatch = useDispatch()

  function closeDrawer() {
    dispatch({ type: "CLOSE_DRAWER" })
  }

  const isDrawerOpen = useSelector(state => {
    return state.isDrawerOpened;
  });
  const classOpen = `drawer-menu${isDrawerOpen ? " open" : ""}`
  return (  
    <div className={classOpen}>
      <div className="close-btn" onClick={closeDrawer}>&#10005;</div>
      <ul>
        {
          items.flat().map(({ id, title, link }) => (
            <li onClick={closeDrawer} key={id}><Link to={link}>{title}</Link></li>
          ))
        }
      </ul>
      <div className="soc-net d-flex justify-content-between"><SocialNetworks /></div>
    </div>
  )
}

export default Drawer