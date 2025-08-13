import Projects from "./projectCard";

export default function ProjectList() {
  return (
    <>
      <div className="projectListContainer">
        <Projects
          img='/pizza.jpeg'
          projectTitle="Mealsharing"
          techStack="FULLSTACK"
          projectDescription="a combination of technologies used to build and run an application, website, or other software project"
          viewProjectLink="https://github.com/Ganja0003/meal-sharing"
          viewSourceLink="https://github.com/Ganja0003/meal-sharing"
        />
         <Projects
          img='/pizza.jpeg'
          projectTitle="Quiz App"
          techStack="FRONTEND"
          projectDescription="a combination of technologies used to build and run an application, website, or other software project"
          viewProjectLink="https://quiz-app-project-2ui6.onrender.com/"
          viewSourceLink="https://github.com/Ganja0003/Quiz-App-Project"
        />
         <Projects
          img='/pizza.jpeg'
          projectTitle="Tantakuy"
          techStack="FULLSTACK"
          projectDescription="a combination of technologies used to build and run an application, website, or other software project"
          viewProjectLink="https://tantakuy-hyf.vercel.app/"
          viewSourceLink="https://github.com/Lupescua/tantakuy-hyf"
        />
         <Projects
          img='/pizza.jpeg'
          projectTitle="Weather App"
          techStack="FRONTEND"
          projectDescription="a combination of technologies used to build and run an application, website, or other software project"
          viewProjectLink="https://weather-app-6pug.onrender.com/"
          viewSourceLink="https://github.com/Ganja0003/weather-app"
        />
      </div>
    </>
  );
}
