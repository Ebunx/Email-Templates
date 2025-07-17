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
    <header class=" m-4 mx-auto place-items-center w-[100%]">
  <nav class="flex flex-wrap  justify-between items-center   text-black-500 w-[55%]   ">
        <img src="HOSTBRIDGE.png" alt="Logo" width="100"  class="  justify-start -mb-4" />

    <ul className="flex justify-end gap-4 flex-1">
      <li>
        <FontAwesomeIcon icon={faFacebook} size="lg" />
      </li>
      <li>
        <FontAwesomeIcon icon={faInstagram} size="lg" />
      </li>
      <li>
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </li>
      <li>
        <FontAwesomeIcon icon={faTwitter} size="lg" />
      </li>
    </ul>

  </nav>
</header>

  )
}

export default Header