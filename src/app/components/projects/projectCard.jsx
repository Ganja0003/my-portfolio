import Link from "next/link";
export default function projectCard({ img, projectTitle,techStack, projectDescription, viewProjectLink, viewSourceLink}) {
  return (
    <>
      <div className="projectCard">
        <div className="projectImageDiv">
          <img src={img} alt="" className="projectImage" />
        </div>
        <div className="projectText">
          <h1>{projectTitle}</h1>
          <h4>{techStack}</h4>
          <p> {projectDescription}</p>
          <div className="buttons">
            <Link
              href={viewProjectLink}
              className="blueBtn Btn"
            >
              View Project
            </Link>
            <Link
              href={viewSourceLink}
              className="whiteBtn Btn"
            >
              Source
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
