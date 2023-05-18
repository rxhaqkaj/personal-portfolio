import React from 'react'

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.facebook.com/linnda.xhaqkajj"
                 className="home__social__icon" target="_blank" rel="noreferrer">
                <i class="uil uil-facebook-f"></i>
            </a>
            <a href="https://www.linkedin.com/in/rilinda-xhaqkaj-248013220/" 
                className="home__social__icon" target="_blank" rel="noreferrer">
                <i class="uil uil-linkedin-alt"></i>
            </a>

            <a href="https://github.com/" 
                className="home__social__icon" target="_blank" rel="noreferrer">
                <i class="uil uil-github-alt"></i>
            </a>
        </div>
    );
};

export default Social