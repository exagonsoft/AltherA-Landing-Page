import React from 'react'
import horizont from '../assets/images/aboutSection.webp'
import './AboutComponents/about.css'

const About = () => {
  return (
    <section>
      <div className="flex w-full flex-wrap justify-center items-center AboutMainContainner">
        <img src={horizont} className='' ></img>
        <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
          <div className="flex flex-1 md:justify-start  justify-center items-center flex-col md:mr-10 ">
            
          </div>
          <div className="flex flex-1 justify-center items-center flex-col md:mr-10 ">
           
          </div>
        </div>
      </div>
    </section>
  )
}

export default About