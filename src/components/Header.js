import React from 'react';

const Header = () => {
    return (
        <header class="white-text-container section-container">
            <div class="text-center">
                <h1>I am Muhammad Farhan Andani</h1>
                <p>Web designer</p>
                <p>
                    <a class="fa-icon fa-icon-2x" href="https://instagram.com/" title="">
                        <i class="fa fa-instagram"></i>
                    </a>
                    <a class="fa-icon fa-icon-2x" href="https://twitter.com/" title="">
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a class="fa-icon fa-icon-2x" href="https://github.com/" title="">
                        <i class="fa fa-github"></i>
                    </a>
                    <a class="fa-icon fa-icon-2x" href="https://www.linkedin.com/" title="">
                        <i class="fa fa-linkedin"></i>
                    </a>
                </p>
            </div>
        </header>
    );
}

export default Header;