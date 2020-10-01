import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTelegram, faFacebookMessenger, faViber } from '@fortawesome/free-brands-svg-icons';
import * as socialItems from "../data/social-networks.json";
import {Icon} from '../../../interface'

const icons:Icon = { faFacebookF, faInstagram, faTelegram, faFacebookMessenger, faViber };
const SocialNetworks:React.FC = () => (
  <>
    {socialItems.map(({ icon, src }) => (
        <a key={icon} href={src}><FontAwesomeIcon icon={icons[icon]} /></a>
    ))
    }
  </>
)

export default SocialNetworks;