import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTelegram, faFacebookMessenger, faViber } from '@fortawesome/free-brands-svg-icons';
import socialItems from "../data/social-networks";

const icons = { faFacebookF, faInstagram, faTelegram, faFacebookMessenger, faViber };
const SocialNetworks = () => (
  <>
    {socialItems.map(({ icon, src }) => (
        <a key={icon} href={src}><FontAwesomeIcon icon={icons[icon]} /></a>
    ))
    }
  </>
)

export default SocialNetworks;