import React from 'react'
import { motion } from 'framer-motion'
import "../CSS/Home.css"
import '../index.css'

// import other pages
import Projects from "./Projects"
import Skills from "./Skills"
import Certificates from "./Certificates"
import Blog from "./Blog"
import Resume from "./Resume"
import About from "./About"
import Contact from "./Contact"
import Gallery from "./Gallery"
import SemesterTimeline from "./SemesterTimeline"

import photo from '/photo.png'
import githubLogo from '../../public/github.png'
import linkedinLogo from '../../public/linkedin.png'
import gmailLogo from '../../public/gmail.png'
import whatsappLogo from '../../public/whatsapp.png'
import instagramLogo from '../../public/insta.png'
import facebookLogo from '../../public/facebook.png'

export default function Home() {

  const professions = [
    'AI Enthusiast',
    'Machine Learning Engineer',
    "Deep Learning Expert",
    'Computer Vision Researcher',
    'Developer',
  ]

  const quickLinks = [
    { img: githubLogo, title: 'GitHub', link: 'https://github.com/Sayanmondal755089' },
    { img: linkedinLogo, title: 'LinkedIn', link: 'https://www.linkedin.com/in/sayan-mondal78/' },
    { img: gmailLogo, title: 'Email', link: 'mailto:sanynmandal@gmail.com' },
    { img: whatsappLogo, title: 'WhatsApp', link: 'https://wa.me/+917550895462' },
    { img: instagramLogo, title: 'Instagram', link: 'https://www.instagram.com/sayan_mondal78/' },
    { img: facebookLogo, title: 'Facebook', link: 'https://www.facebook.com/share/1BRzJMzmjT/' },
  ]

  return (
    <div className="bg-black text-white">

      {/* 🔥 HERO SECTION (TERA EXISTING CODE) */}
      <section id="home" className="min-h-screen pt-24">

        <div className="home-top">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="photo-container"
          >
            <motion.div className="photo-ring" />
            <motion.div className="photo-frame">
              <motion.img
                src={photo}
                alt="Sayan Mondal"
                className="profile-photo"
              />
            </motion.div>
          </motion.div>

          <motion.div className="home-info">
            <h1 className="home-title">
              Hi, I’m <span className="home-name">Sayan Mondal</span>
            </h1>

            <p className="typing-effect">
              Artificial Intelligence Engineer | Frontend Developer | Tech Explorer
            </p>

            <div className="profession-tags">
              {professions.map((role, i) => (
                <div key={i} className="profession-tag">{role}</div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="quick-links">
          <h2>Connect with me</h2>
          <div className="quick-links-list">
            {quickLinks.map((item, i) => (
              <a key={i} href={item.link} target="_blank">
                <img src={item.img} alt={item.title} />
              </a>
            ))}
          </div>
        </div>

      </section>

      {/* 🔥 BAQI SECTIONS */}
      <section id="projects" className="min-h-screen pt-24">
        <Projects />
      </section>

      <section id="gallery" className="min-h-screen pt-24">
        <Gallery />
      </section>

      <section id="skills" className="min-h-screen pt-24">
        <Skills />
      </section>

      <section id="certificates" className="min-h-screen pt-24">
        <Certificates />
      </section>

      <section id="blog" className="min-h-screen pt-24">
        <Blog />
      </section>

      <section id="resume" className="min-h-screen pt-24">
        <Resume />
      </section>

      <section id="about" className="min-h-screen pt-24">
        <About />
      </section>

      <section id="contact" className="min-h-screen pt-24">
        <Contact />
      </section>

      <section id="semester" className="min-h-screen pt-24">
        <SemesterTimeline />
      </section>

    </div>
  )
}
