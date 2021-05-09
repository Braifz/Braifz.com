import React from 'react';
import PictureMe from '../img/fotomia_comprimida.jpg';
import '../styles/index.css';

import githubicon from '../img/github.png';
import linkedinicon from '../img/linkedin.png';
function App() {
  const English = {
    greeting: ' Welcome! :D',
    aboutme: 'Im Braian, Front-End dev Jr.',
    ilive: 'I live in Buenos Aires, Argentina',
    ilike: 'I like the cats, drink coffee and doing acrobatics',
    techs: 'Techs what i use are Html, Css , Javascript , React and Git ',
    button: '🇦🇷 ',
  };

  return (
    <main className='container'>
      <div className='bg'></div>
      <div className='bg bg2'></div>
      <div className='bg bg3'></div>
      <p className='greeting'> {English.greeting}</p>
      <div class='picture-container'>
        <img className='picture-me' src={PictureMe} alt='me ' />
      </div>
      <div className='text-container'>
        <p className='text--style'>{English.aboutme}</p>
        <p className='text--style'>{English.ilive}</p>
        <p className='text--style'>{English.ilike}</p>
        <p className='text--style'>{English.techs}</p>
      </div>
      <div className='buttom-links'>
        <div className='github-icon'>
          <a href='https://github.com/Braifz'>
            <img src={githubicon} alt='github' />
          </a>
        </div>
        <div className='linkedin-icon'>
          <a href='https://www.linkedin.com/in/braian-fernandez-ba90291a8/'>
            <img src={linkedinicon} alt='linkedin' />
          </a>
        </div>
      </div>
    </main>
  );
}

export default App;
