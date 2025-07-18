import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header class=" m-4   grid place-self-center  md:w-[60%]">
      <nav class="flex flex-col md:flex-row gap-2   md:place-self-center    justify-between    text-black md:w-[95%]    ">
        <img
          src="HOSTBRIDGE.png"
          alt="Logo"
          width="100"
          class="  md:justify-start self-center "
        />

        <ul className="flex   md:justify-end gap-x-2 md:flex-1">
          <li>
            <FontAwesomeIcon icon={faFacebook} />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} />
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedin} />
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} />
          </li>
          <li>
            <FontAwesomeIcon icon={faTiktok} />
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
          </li>

          <li className="  mt-1">
            <img src="/icons/threads.svg" alt="Threads" className="w-4 h-4 "    />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
