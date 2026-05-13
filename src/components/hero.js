import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import XIcon from '@mui/icons-material/X';
import logo from '../assets/PFP-3-bg-rm.png'
import './hero.css'

export const Hero = () => {
    return (
        <div className='hero-container'>
            <div className='hero-logo'>
                <img src={logo} alt='Logo' className='h-logo' />
            </div>

            <div className='hero-text'>
                <h2>Harshvardhan Gadagade</h2>
                <h3>Engineer</h3>
                <div className='inside-text'>
                    <h3>
                        Love to build cool stuff.
                    </h3>
                </div>
            </div>

            <div className='hero-resume'>
                <button className='hs-button'>
                    <a href='' className='hs-links'>Resume / CV</a>
                </button>

                <button className='hs-button'>
                    <a href='' className='hs-links'>Get in Touch</a>
                </button>
            </div>

            <div className='hero-socials'>
                <a href='https://github.com/HA24RSH' className='social-links'>
                    <GitHubIcon fontSize='medium' />
                </a>

                <a href='https://www.linkedin.com/in/harshvardhan-gadagade/' className='social-links'>
                    <LinkedInIcon fontSize='medium' />
                </a>

                <a href='https://x.com/haarshhqt' className='social-links'>
                    <XIcon fontSize='medium' />
                </a>

                <a href="mailto:harshvardhangadagade24@gmail.com" className='social-links'>
                    <EmailIcon fontSize='medium' />
                </a>
            </div>
        </div>
    )
}
