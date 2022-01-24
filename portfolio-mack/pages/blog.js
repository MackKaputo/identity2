import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import { useState } from 'react'

import { Footer, Nav } from '../components'

const Blog = () => {
    return (
        <>
            <Head>
            <title>Mack | Blog</title>
            <meta name="description" content="Mack Kaputo Software engineer blog" />
            </Head>

            <Nav />

            <main style={{ margin: "2%", padding: "1%", height: "80vh"}}>
                <div>
                    <h1>Hey! Thanks for checking out this blog. There is no blog posts yet, 
                    but stay tuned!!</h1>
                </div>
                <div>
                    <h3>This blog will contain content related to my personal experiences and thoughts 
                    about several topics of life like success, education, religion, philosophy, lifestyles, and more!</h3>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Blog