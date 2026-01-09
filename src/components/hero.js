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
                <h2>Hi, I'm Haarshh - A Full Stack Developer who turns caffeine
                    into code.</h2>
                <div className='inside-text'>
                    <h3>
                        I craft modern web apps with React,
                        Next.js, PostgreSQL, and Bun. I believe good UI
                        isn't optional, bugs are temporary, and
                        console.log is underrated.Always learning,
                        always shipping.
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
                    <GitHubIcon />
                </a>

                <a href='https://www.linkedin.com/in/harshvardhan-gadagade/' className='social-links'>
                    <LinkedInIcon />
                </a>

                <a href='https://x.com/haarshhqt' className='social-links'>
                    <XIcon />
                </a>

                  <a href="mailto:harshvardhangadagade24@gmail.com" className='social-links'>
                    <EmailIcon />
                </a>
            </div>
        </div>
    )
}
