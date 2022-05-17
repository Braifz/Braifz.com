import "./ProjectCard.css";

const ProjectCard = ({ data }) => {
  return (
    <div className="card-container">
      <img src={data.image} alt="proyect-img" />
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
          <a
            className="card-links"
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            className="card-links"
            href={data.deploy}
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProjectCard;
