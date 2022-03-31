import { dataPresentation } from './dataPresentation';
import PictureMe from '../../assets/img/melessmb.jpg';
import './PresentationCard.css';

const PresentationCard = () => {
  return (
    <main className='container'>
      <div className='bg'></div>
      <div className='bg bg2'></div>
      <div className='bg bg3'></div>
      <p className='greeting'> {dataPresentation.greeting}</p>
      <div class='picture-container'>
        <img className='picture-me' src={PictureMe} alt='me ' />
      </div>
      <div className='text-container'>
        <p className='text--style'>{dataPresentation.aboutme}</p>
        <p className='text--style'>{dataPresentation.ilive}</p>
        <p className='text--style'>{dataPresentation.ilike}</p>
        <p className='text--style'>{dataPresentation.techs}</p>
      </div>
    </main>
  );
};

export default PresentationCard;
