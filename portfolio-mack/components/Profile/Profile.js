import styles from "./Profile.module.css"
import Image from 'next/image'

const Profile = () => {
    return (
        <section className={styles.profile} id="profile">
            <h2>PROFILE</h2>
            <div className={styles.profile_content}>
                <div>
                    <div className={styles.profile_picture_container}> 
                        <Image src={"/profile_picture_portfolio.jpeg"} width={250} height={240} alt="Profile picture" className={styles.profile_picture}/>
                    </div>
                    <div className={styles.profile_picture_container_desk}> 
                        <Image src={"/profile_picture_portfolio.jpeg"} width={570} height={540} alt="Profile picture" className={styles.profile_picture}/>
                    </div>
                </div>

                <div>
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
                </div>
            </div>
            
        </section>
    )
}

export default Profile