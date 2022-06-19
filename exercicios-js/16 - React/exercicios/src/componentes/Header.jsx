import React from 'react'

const Header = (props) => {
    return <header id='header'>
        <div id="logo">
            <img alt="teste"></img>
        </div>
        <nav>
            <ul>
                <li>{props.inicio}</li>
                <li>Meio</li>
                <li>Fim</li>
            </ul>
        </nav>

    </header>
}

export default Header