import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';


function Header() {
  return (
    <header class=" m-4    md:place-self-center  md:w-[60%]">
  <nav class="flex flex-wrap gap-2   md:place-self-center    justify-between    text-black md:w-[95%]    ">
        <img src="HOSTBRIDGE.png" alt="Logo" width="100"  class="  md:justify-start " />

    <ul className="flex   md:justify-end gap-x-3 md:flex-1">
      <li>
        <FontAwesomeIcon icon={faFacebook}   />
      </li>
      <li>
        <FontAwesomeIcon icon={faInstagram}   />
      </li>
      <li>
        <FontAwesomeIcon icon={faLinkedin}   />
      </li>
      <li>
        <FontAwesomeIcon icon={faTwitter}   />
      </li>
    </ul>

  </nav>
</header>

  )
}

export default Header
