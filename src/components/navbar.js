import DarkModeIcon from '@mui/icons-material/DarkMode';
import '../components/navbar.css';

export const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='nv-container'>

                    <div className='nv-details'>
                        <a href='#home-section' className='nv-links'>
                        Home
                        </a>
                        <a href='#work-section' className='nv-links'>
                            Work
                        </a>
                        <a href='#project-section' className='nv-links'>
                            Projects
                        </a>
                    </div>

                <div className='nv-content'>
                    <button className='theme'>
                        <DarkModeIcon fontSize='small'/>
                    </button>
                </div>
            </div>
        </nav>
    )
}
