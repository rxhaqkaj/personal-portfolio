import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }
  return (
    <section className='qualification section'>
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState === 1
              ? "qualification__button qualification__active button__flex"
              : "qualification__button button__flex"}
                onClick= {() => toggleTab(1)}
              >
            <i className='uil uil-graduation-cap qualification__icon'></i>
            Education
          </div>

            <div className={toggleState === 2
              ? "qualification__button qualification__active button__flex"
              : "qualification__button button__flex"}
                 onClick= {() => toggleTab(2)}
              >
            <i className='uil uil-briefcase-alt qualification__icon'></i>
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div className={toggleState === 1 
            ? "qualification__content qualification__content__active"
            : "qualification__content"}>
            <div className="qualifications__data">
              <div>
                <h3 className="qualification__title">Computer Science and Engineering</h3>
                <span className="qualification__subtitle">
                  University for Business and Technology
                </span>
                <div className="qualification__calendar">
                  <i className='uil uil-calendar-alt'></i>
                  2019 - 2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualifications__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">High School</h3>
                <span className="qualification__subtitle">
                  Ismail Qemali
                </span>
                <div className="qualification__calendar">
                  <i className='uil uil-calendar-alt'></i>
                  2016 - 2018
                </div>
              </div>
            </div>
            <div className="qualifications__data">
              <div>
                <h3 className="qualification__title">Elementary School</h3>
                <span className="qualification__subtitle">
                  Skenderbeu
                </span>
                <div className="qualification__calendar">
                  <i className='uil uil-calendar-alt'></i>
                  2007 - 2015
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div className={toggleState === 2
            ? "qualification__content qualification__content__active"
            : "qualification__content"}>
            <div className="qualifications__data">
              <div>
                <h3 className="qualification__title">Software Developer</h3>
                <span className="qualification__subtitle">
                  Centralsoft
                </span>
                <div className="qualification__calendar">
                  <i className='uil uil-calendar-alt'></i>
                  2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualifications__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Software Developer Intern</h3>
                <span className="qualification__subtitle">
                  Centralsoft
                </span>
                <div className="qualification__calendar">
                  <i className='uil uil-calendar-alt'></i>
                  Sep 2021 - Oct 2021
                </div>
              </div>
            </div>
            <div className="qualifications__data">
              <div>
                <h3 className="qualification__title">Development of University Projects</h3>
                <span className="qualification__subtitle">
                University for Business and Technology
                </span>
                <div className="qualification__calendar">
                  <i className='uil uil-calendar-alt'></i>
                  2020 - 2021
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification 