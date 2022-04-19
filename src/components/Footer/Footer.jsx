import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <footer>
      <ul className='footer-container'>
        <li className='col col-1'>
          <a href='https://github.com/Braifz'>
            <h1>Github</h1>
          </a>
        </li>
        <li className='col col-2'>
          <a href='https://www.linkedin.com/in/braian-f-ba90291a8/'>
            <h1>Linkedin</h1>
          </a>
        </li>
        <li className='col col-3'>
          <a href='https://www.instagram.com/braifz/'>
            <h1>Instagram</h1>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
