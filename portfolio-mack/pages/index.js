import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

import { Footer, Nav, Profile } from '../components'

export default function Home() {
  


  return (
    <div className={styles.container} id="home">
      <Head>
        <title>Mack Kaputo</title>
        <meta name="description" content="Mack Kaputo Software engineer personal website and blog" />
      </Head>
      

      <Nav />
      

      <main className={styles.main}>
        <section className={styles.jumbo}>
          
          <div className={styles.jumbo_text}>
            <h1>
              I'm a full stack developer specializing in engineering cloud native software applications.
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

        <Profile />

      </main>

      <Footer />
    </div>
  )
}
