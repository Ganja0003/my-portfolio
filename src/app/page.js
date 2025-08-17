import styles from "./page.css";
import Navbar from "@/app/components/navbar";
import About from "@/app/components/about";
import ProjectList from "@/app/components/projects/projectList";
import Contact from "@/app/components/contact";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <>
    <div className="main">
      <Navbar/>
      <About/>
      <ProjectList/>
      <Contact/>
    </div>
    
    </>
  );
}
