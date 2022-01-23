import styles from "./Projects.module.css"
import { Project } from "../index"

function Projects() {
  return (
    <div className={styles.projects_container}>
      <Project />
      <Project />
      <Project />
    </div>
  )
}

export default Projects
