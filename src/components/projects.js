import GitHubIcon from '@mui/icons-material/GitHub';
import EcoCartLogo from '../assets/projects-imgs/Eco-Cart-logo.jpg'
import './projects.css'

export const Projects = () => {
    return (
        <div className='pj-container'>
            <div className='pj-text'>
                <h3 className='text'>
                    Stuff I've Built
                </h3>
                <span className='span-text'>
                    (and actually finished)
                </span>
            </div>

            <div className='project-container'>
                <div className='projects'>
                    <div className='pj-img'>
                        <img src={EcoCartLogo} alt='Eco-Cart' className='img' />
                    </div>

                    <div className='pj-details'>
                        <div className='pj-title'>
                            <h2>
                                Eco-Cart
                            </h2>

                            <div className='pj-links'>
                                <a href='https://github.com/Atharv-28/eco-cart_frontend'
                                    target='blank' className='pj-github'>
                                    <GitHubIcon fontSize='medium' />
                                </a>
                            </div>
                        </div>

                        <div className='pj-description'>
                            <p>
                                Eco-Cart is an e-commerce platform focused on eco-friendly                                products. It allows users to browse and purchase sustainable
                                items, promoting a greener lifestyle. Built with React, it
                                features a modern design and user-friendly interface for an
                                enjoyable shopping experience.
                            </p>
                        </div>

                        <div className='more-about'>
                            <button className='pj-button'>
                                <a href='' className='pj-anchor' >
                                    View Deatils
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
