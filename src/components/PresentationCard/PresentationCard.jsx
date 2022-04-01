import PictureMe from '../../assets/img/me-recortado.jpeg';
import './PresentationCard.css';
import { otherDataPresentation } from './otherDataPresentation';

const PresentationCard = () => {
  return (
    <main className='container'>
      <div className='container-title'>
        <div className='picture-container'>
          <img className='picture-me' src={PictureMe} alt='img' />
        </div>
        <div className='text-container'>
          <h1 className='title'>Hola! Soy Braian :D </h1>
          <h3 className='subtitle'>Un poco sobre mi...</h3>
          <p className='text--style'>{otherDataPresentation}</p>
        </div>
      </div>
    </main>
  );
};

export default PresentationCard;
