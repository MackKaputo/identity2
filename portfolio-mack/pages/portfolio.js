import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import { useState } from 'react'

import { Footer, Nav } from '../components'

const Portfolio = () => {
    return (
        <>
            <Head>
            <title>Mack | Portfolio</title>
            <meta name="description" content="Mack Kaputo Software engineer Portfolio" />
            </Head>

            <Nav />

            <main>
                <div>Portfolio Projects </div>
            </main>
            <Footer />
        </>
    )
}

export default Portfolio