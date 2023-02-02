import  React from 'react';
import Logo from '../img/logoCopany.png';
const Header = () => {
    return (
        <header className='header'>
            <div className='header__content dflex'>
                <img className=' crossRotate imgLogo' alt='a' src={Logo}/>
                <h1 className="header__tittle">
                    galaxy
                </h1>
            </div>

        </header>
    )
}

export default Header;