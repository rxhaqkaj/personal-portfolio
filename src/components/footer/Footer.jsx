import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__container container">
                <h1 className="footer__title">
                    Rilinda
                </h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className='footer__link'>About</a>
                    </li>
                    <li>
                        <a href="#services" className='footer__link'>Services</a>
                    </li>
                    <li>
                        <a href="#contact" className='footer__link'>Contact</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="https://www.facebook.com/linnda.xhaqkajj"
                        className="footer__social__link" target="_blank" rel="noreferrer">
                        <i class="bx bxl-facebook"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/rilinda-xhaqkaj-248013220/"
                        className="footer__social__link" target="_blank" rel="noreferrer">
                        <i class="bx bxl-linkedin"></i>
                    </a>

                    <a href="https://github.com/"
                        className="footer__social__link" target="_blank" rel="noreferrer">
                        <i class="bx bxl-github"></i>
                    </a>
                </div>
                <span className='footer__copy'>
                    &#169; All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer