import { Fragment } from 'react';
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as MarvelLogo } from '../../assets/marvel.svg';
import './navigation.styles.scss';
const Navigation = () => {
    return (
      <Fragment>
        <div className='navigation'>
        <div>
        <Link className='logo-container' to='/'>
        <MarvelLogo />
        </Link>
        </div>
        <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
                Shop    
            </Link>
            <Link className='nav-link' to='/sign-in'>
                SignIn    
            </Link>
        </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }
export default Navigation