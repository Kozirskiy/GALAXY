import  React from 'react';
import ProFile from './ProFile';

const NavBar = () => {
    return (
        <nav className='nav'>
            <div className='nav__wrapper dfex'>
              <div className='nav__link'>
                <div>
                  <a className='nav__links' href=''>Profile</a>
                </div>
                <div>
                  <a className='nav__links' href=''>Message</a>
                </div><div>
                  <a className='nav__links' href=''>News</a>
                </div>
                <div>
                  <a className='nav__links' href=''>Music</a>
                </div>
                <div>
                  <a className='nav__links' href=''>Settings</a>
                </div>
              </div>

              <ProFile/>
              
            </div>
          </nav>
    )
}

export default NavBar;