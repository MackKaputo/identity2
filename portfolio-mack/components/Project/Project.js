import styles from "./Project.module.css"

function Project() {
  return (
    <div className={styles.project_container}>
      <div>Project title</div>
      <div>Project description</div>
      <div>Stack</div>
      <div>Link</div>
    </div>
  )
}

export default Project
