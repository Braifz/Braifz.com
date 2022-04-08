import ProjectCard from './ProjectCard';
import {dataProjectCard} from './dataProjectCard.js'
import './Projects.css';

const Proyects = () => {
  return (
    <div className='proyects-container'>
      <h1 className='text-proyects'>Proyectos</h1>
      <ProjectCard data={dataProjectCard}/>
      <ProjectCard data={dataProjectCard}/>
      <ProjectCard data={dataProjectCard}/>
    </div>
  );
};

export default Proyects;
