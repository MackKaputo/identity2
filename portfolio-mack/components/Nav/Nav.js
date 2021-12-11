import styles from './Nav.module.css'
import Link from "next/link"
import Image from 'next/image'
import { useState } from 'react'

const Nav = () => {

    let [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu((prevState) => !prevState)
    }

    return (
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
          </ul>
        </div>
      </nav>
    )
}

export default Nav