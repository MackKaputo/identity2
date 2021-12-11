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
                    Hey! Thanks for checking out this blog. There is no blog posts yet, 
                    but stay tuned!!
                </div>
                <div>
                    This blog will contain content related to mainly software engineering.
                    However, there will also be a few posts on my Philosophical thoughts,
                    applied mathematics concepts, and many more. It's all about me sharing 
                    the knowledge I'm acquiring over time. I hope you will enjoy the content. 
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Blog