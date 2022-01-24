import styles from "./Projects.module.css"
import { Project } from "../index"

function Projects() {
  return (
    <div className={styles.projects_container}>
      <Project 
        project_title="Project 1"
        project_description="my description 1"
        stack="My stack"
        project_link="http//"
      />
      <Project 
        project_title="Project 2"
        project_description="my description 2"
        stack="My stack"
        project_link="http//"
      />
      <Project 
        project_title="Project 3"
        project_description="my description 3"
        stack="My stack"
        project_link="http//"
      />
    </div>
  )
}

export default Projects
