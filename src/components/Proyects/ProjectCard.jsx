import './ProjectCard.css'

const ProjectCard = ({data}) => {
    return(
        <div className="card-container">
            <div className="title-container">
                <h1>{data.title}</h1>
            </div>
            <div className="stack-container">
                <p className="stack">{data.stack}</p>
                <img src="https://placekitten.com/200/300" alt="kitty-img" />
            </div>
            <ul className="links-container">
                <li><a href={data.github}>Github</a></li>
                <li><a href={data.deploy}>braifz.com</a></li>
            </ul>
        </div>
    )
}

export default ProjectCard;