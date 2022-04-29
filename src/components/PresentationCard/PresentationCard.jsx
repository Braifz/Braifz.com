import { otherDataPresentation } from "./otherDataPresentation";

// import PictureMe from '../../assets/img/me-recortado.jpeg';
import "./PresentationCard.css";
// import { motion } from 'framer-motion/dist/es/index';

const PresentationCard = () => {
  return (
    <main className="container">
      <div className="container-title">
        {/* <div className='picture-container'>
          <motion.img
            animate={{
              borderRadius: ['0%', '30%', '50%'],
            }}
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 150,
              bottom: 50,
            }}
            className='picture-me'
            src={PictureMe}
            alt='img'
          />
        </div> */}
      </div>
      <div className="text-container">
        <h1 className="title">Hello!👋 I'm Braian </h1>
        <h3 className="subtitle">A little bit about me...</h3>
        <p className="text--style">{otherDataPresentation}</p>
      </div>
    </main>
  );
};

export default PresentationCard;
