import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  let [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Mack Kaputo</title>
        <meta name="description" content="Mack Kaputo Software engineer personal website and blog" />
      </Head>
      
      <nav className={styles.navbar}>
        <div className={`${styles.mobile_menu}`}>
          <div className={styles.home_name}>
            <span>MK</span>
          </div>
          
          <div className={styles.menu_burger}>
            <Image src={"/menu.svg"} width={40} height={40} onClick={toggleMenu}/>
          </div>
        </div>
        <div className={`${styles.menu} ${showMenu? "": styles.hide_menu}` }>
          <ul>
            <li>About Me</li>
            <li>Blog</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
      

      <main className={styles.main}>
        <div> My Content here </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
