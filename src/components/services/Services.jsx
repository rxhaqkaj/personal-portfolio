import React from 'react'
import { useState } from 'react'
import './services.css'


const Services = () => {
	const [toggleState, setToggleState] = useState(0)

	const toggleTab = (index) => {
		setToggleState(index)
	}

	return (
		<section className="services section" id="services">
			<h2 className="section__title">Services</h2>
			<span className="section__subtitle">What I offer</span>
			<div className="services__container container grid">
				<div className="services__content">
					<div className="services__subcontent">
						<i className='uil uil-web-grid services__icon'></i>
						<h3 className="services__modal__title">Software <br/>Development</h3>
					</div>
					<span className="services__button" onClick={() => toggleTab(1)}>View More
						<i className='uil uil-arrow-right services__button__icon'></i>
					</span>
					<div className={toggleState === 1 ? "services__modal active__modal" : "services__modal" }>
						<div className="services__modal__content">
							<i onClick={() => toggleTab(0)} className='uil uil-times services__modal__close'></i>
							<h3 className="services__modal__title">Software Developer</h3>
							<ul className="services__modal__services grid">
								<li className="services__modal__service">
									<i className='uil uil-check-circle services__modal__icon'></i>
									<p className="services__modal__info">
										Crafting efficient software, I enhance user experiences through coding.
									</p>
								</li>
								<li className="services__modal__service">
									<i className='uil uil-check-circle services__m odal__icon'></i>
									<p className="services__modal__info">
										Troubleshooting and debugging, I ensure smooth software operation.
									</p>
								</li>
								<li className="services__modal__service">
									<i className='uil uil-check-circle services__modal__icon'></i>
									<p className="services__modal__info">
										Building scalable systems, I empower businesses as a software developer.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="services__content">
					<div className="services__subcontent">
						<i className='uil uil-arrow services__icon'></i>
						<h3 className="services__modal__title">Quality <br/>Work</h3>
					</div>
					<span className="services__button" onClick={() => toggleTab(2)}>View More
						<i className='uil uil-arrow-right services__button__icon'></i>
					</span>
					<div className={toggleState === 2 ? "services__modal active__modal" : "services__modal" }>
						<div className="services__modal__content">
							<i onClick={() => toggleTab(0)} className='uil uil-times services__modal__close'></i>
							<h3 className="services__modal__title">Quality Work</h3>
							<ul className="services__modal__services grid">
								<li className="services__modal__service">
									<i className='uil uil-check-circle services__modal__icon'></i>
									<p className="services__modal__info">
										Ensuring excellence in every line of code, I provide high-quality software solutions.
									</p>
								</li>
								<li className="services__modal__service">
									<i className='uil uil-check-circle services__modal__icon'></i>
									<p className="services__modal__info">
										Delivering top-notch code, I offer unmatched quality as a software developer.
									</p>
								</li>
								<li className="services__modal__service">
									<i className='uil uil-check-circle services__modal__icon'></i>
									<p className="services__modal__info">
										Quality is my priority, and I strive for perfection as a software developer.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="services__content" >
					<div className="services__subcontent">
						<i className='uil uil-edit services__icon'></i>
						<h3 className="services__modal__title">Collaborative <br/>Work</h3>
					</div>
					<span className="services__button" onClick={() => toggleTab(3)}>View More
						<i className='uil uil-arrow-right services__button__icon'></i>
					</span>
					<div className={toggleState === 3 ? "services__modal active__modal" : "services__modal" }>
						<div className="services__modal__content">
							<i onClick={() => toggleTab(0)} className='uil uil-times services__modal__close'></i>
							<h3 className="services__modal__title">Collaborative Work</h3>
							<ul className="services__modal__services grid">
								<li className="services__modal__service">
									<i className='uil uil-check-circle services__modal__icon'></i>
									<p className="services__modal__info">
										Collaborative software developer, driving teamwork and effective communication.
									</p>
								</li>
								<li className="services__modal__service">
									<i className='uil uil-check-circle services__modal__icon'></i>
									<p className="services__modal__info">
										Engaged in collaboration, delivering successful projects as a developer.
									</p>
								</li>
								<li className="services__modal__service">
									<i className='uil uil-check-circle services__modal__icon'></i>
									<p className="services__modal__info">
										Tech-savvy team player, driving innovation through collaboration.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Services