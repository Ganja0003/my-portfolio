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
          projectDescription="Individual project: A meal-sharing app where users can see meals, reserve seats and leave reviews. "
          viewProjectLink="https://meal-sharing-amber.vercel.app/"
          viewSourceLink="https://github.com/Ganja0003/meal-sharing"
        />
         <Projects
          img='images\blog.png'
          projectTitle="Blog"
          techStack="FULLSTACK"
          projectDescription="Individual project: Blog application where users can create and delete their posts with a responsive and userfriendly design."
          viewProjectLink="https://blog-rho-three-24.vercel.app/"
          viewSourceLink="https://github.com/Ganja0003/blog"
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
