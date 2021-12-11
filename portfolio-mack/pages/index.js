import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  let [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState)
  }

  return (
    <div className={styles.container} id="home">
      <Head>
        <title>Mack Kaputo</title>
        <meta name="description" content="Mack Kaputo Software engineer personal website and blog" />
      </Head>
      
      <nav className={styles.navbar}>
        <div className={`${styles.mobile_menu}`}>
          <div className={styles.home_name}>
            <span>MACK</span>
          </div>
          
          <div className={styles.menu_burger}>
            {!showMenu? <Image src={"/menu.svg"} width={40} height={39} onClick={toggleMenu} alt="Menu"/>
            : <span onClick={toggleMenu} className={styles.close_menu}>&times;</span>}
          </div>
        </div>
        <div className={`${styles.menu} ${showMenu? "": styles.hide_menu}` }>
          <ul>
            <li onClick={toggleMenu}><Link href="/">About</Link></li>
            <li>Blog</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
      
      

      <main className={styles.main}>
        <section className={styles.jumbo}>
          
          <div className={styles.jumbo_text}>
            <h1>
              I'm a full stack developer specializing in cloud native software applications.
            </h1>
            {/* <h2>I am also a mechanical engineer, martial arts lover and life long learner.</h2> */}
            <h3>
              <blockquote>"First, solve the problem. Then, write the code"</blockquote>
              <cite>- John Johnson</cite>
            </h3>
          </div>
          <div className={styles.more_about_me_container}>
            <button><a href="#profile">View Profile </a></button>
          </div>
          
          
        </section>

        <section className={styles.profile} id="profile">
          <h2>PROFILE</h2>
          <div className={styles.profile_picture_container}> 
            <Image src={"/profile_picture_portfolio.jpeg"} width={250} height={240} alt="Profile picture" className={styles.profile_picture}/>
          </div>
          <dl>
            <dt>Name</dt>
            <dd>Mack Kaputo M.</dd>
            <dt>Skills</dt>
            <dd>TypeScript, JavaScript, Python, Dart, NodeJS, ReactJS, Django, Flutter, HTML, CSS,  
               MongoDB, Postgres, Git, CI/CD, Docker, Kubernetes 
            </dd>
            <dt>Degree</dt>
            <dd>BSc. Mechanical Engineering, University of Namibia, 2020</dd>
            <dt>Speaks</dt>
            <dd>English, French</dd>
            <dt>Interests</dt>
            <dd>
              <a href="https://www.coursera.org/account/accomplishments/verify/2H9N2GF3R4EA?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" target="blank">
                Machine Learning
              </a>
            , Education, Martial Arts, Philosophy, Engineering </dd>
            
          </dl>
        </section>

        <section>
          Contact section
        </section>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
