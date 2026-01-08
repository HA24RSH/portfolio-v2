import { Link } from 'react-router-dom';
import logo from '../assets/PFP-3.png';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import '../components/navbar.css';

export const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='nv-container'>
                <div className='nv-logo'>
                    <Link to='/' className='link-logo'>
                        <img src={logo} alt='logo' className='logo-img' />
                    </Link>

                    <div className='nv-details'>
                        <Link to='/work' className='nv-links'>
                            Work
                        </Link>
                        <Link to='/projects' className='nv-links'>
                            Projects
                        </Link>
                    </div>
                </div>

                <div className='nv-content'>
                    <button className='theme'>
                        <DarkModeIcon />
                    </button>
                </div>
            </div>
        </nav>
    )
}
