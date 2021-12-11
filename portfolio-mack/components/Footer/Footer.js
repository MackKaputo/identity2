import styles from "./Footer.module.css"

const Footer = () => {

    let year = new Date().toDateString().split(" ")[3]

    return (
        <footer className={styles.footer}>
            <div>
                <a href="https://twitter.com/mack_kaputo" target="blank"><i className="bi bi-twitter"></i></a>
                <a href="https://github.com/MackKaputo" target="blank"><i className="bi bi-github"></i></a>
                <a href="https://instagram.com/mack_kap" target="blank"><i className="bi bi-instagram"></i></a>
                <a></a>
            </div>
            <div className={styles.copyright}>
                <span>&#169;</span> {year} Mack Kaputo. All Rights Reserved.
            </div>
     
      </footer>
    )
}

export default Footer