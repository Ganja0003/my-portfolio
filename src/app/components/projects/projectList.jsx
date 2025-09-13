import Projects from "./projectCard";

export default function ProjectList() {
  return (
    <>
      <h2 className="projectTitle">Projects</h2>
      <div className="projectListContainer" id='projects'>
        <Projects
          img='images/pizza.jpeg'
          projectTitle="Mealsharing"
          techStack="FULLSTACK"
          projectDescription="In progress. Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          viewProjectLink="https://github.com/Ganja0003/meal-sharing"
          viewSourceLink="https://github.com/Ganja0003/meal-sharing"
        />
         <Projects
          img='images\Quiz-app-project.png'
          projectTitle="Quiz App"
          techStack="FRONTEND"
          projectDescription="Individual project: Its a small quiz game where a user can answer multiple choice questions, see score, and switch player."
          viewProjectLink="https://quiz-app-project-2ui6.onrender.com/"
          viewSourceLink="https://github.com/Ganja0003/Quiz-App-Project"
        />
         <Projects
          img='images\tantakuy-project.png'
          projectTitle="Tantakuy"
          techStack="FULLSTACK"
          projectDescription="Team project: Final HYF project. Website where a company can create a competion and a participant can join competition and vote."
          viewProjectLink="https://tantakuy-hyf.vercel.app/"
          viewSourceLink="https://github.com/Lupescua/tantakuy-hyf"
        />
         
      </div>
    </>
  );
}
