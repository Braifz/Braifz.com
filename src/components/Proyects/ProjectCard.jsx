const dataProjectCard = {
    title: 'Braifz.com',
    stack: 'React js, Framer motion, CSS3, Formik',
    github: 'www.github.com',
    deploy: 'braifz.com'
} 


const ProjectCard = ({data}) => {
    return(
        <div className="card-container">
            <div className="title-container">
                <h1 className="title">{data.title}</h1>
            </div>
            <div className="stack-container">
                <p className="stack">{data.stack}</p>
            </div>
            <ul className="links-container">
                <li><a href={data.github}>Github</a></li>
                <li><a href={data.deploy}>braifz.com</a></li>
            </ul>
        </div>
    )
}

export default ProjectCard;