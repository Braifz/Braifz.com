import braifzImg from "../../assets/img/capture-braifz.png";
import "./ProjectCard.css";

const ProjectCard = ({ data }) => {
  //data -> image,title,stack,github,deploy,descr
  return (
    <div className="card-container">
      <img src={braifzImg} alt="proyect-img" />
      <h2 className="card-title">{data.title}</h2>
      <p>{data.description}</p>
      <h3>Techs</h3>
      <ul className="card-stack-container">
        {data.stack.map((el, i) => (
          <li className="card-stack-item" key={i}>
            {el}
          </li>
        ))}
      </ul>
      <ul className="card-links-container">
        <li>
          <a className="card-links" href={data.github}>
            Github
          </a>
        </li>
        <li>
          <a className="card-links" href={data.deploy}>
            Deploy
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProjectCard;
