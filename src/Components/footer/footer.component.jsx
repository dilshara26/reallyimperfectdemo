import './footer.styles.scss'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BiChevronLeft,BiChevronRight } from "react-icons/bi";
import { BsChevronRight,BsChevronLeft } from "react-icons/bs";

const Footer =()=>{
    return(
        <div className="footer-container">
            <div className="footer-content-box">
                <h1>REALLY IMPERFECT</h1>
                <div className="column-box">
                    <div className="mobile-col-box">
                        <div className="services footer-links">
                            <h3>Services</h3>
                            <Link className='footer-link'>Web Hosting</Link>
                            <Link className='footer-link'>Domains</Link>
                            <Link className='footer-link'>Premium Hosting</Link>
                            <Link className='footer-link'>Private Server</Link>
                            <Link className='footer-link'>E-mail Hosting</Link>

                        </div>
                        <div className="support footer-links">
                            <h3>Support</h3>
                            <Link className='footer-link'>Pricing Plan </Link>
                            <Link className='footer-link'>Documentation</Link>
                            <Link className='footer-link'>Guide</Link>
                            <Link className='footer-link'>Tutorial</Link>
                        </div>
                    </div>
                 
                    <div className="mobile-col-box">
                        <div className="services footer-links">
                            <h3>Company</h3>
                            <Link className='footer-link'>About</Link>
                            <Link className='footer-link'>Blog</Link>
                            <Link className='footer-link'>Join Us</Link>
                            <Link className='footer-link'>Press</Link>
                        <Link className='footer-link'>Partner</Link>
                    </div>
                    <div className="support footer-links">
                        <h3>Legal</h3>
                        <Link className='footer-link'>Claim</Link>
                        <Link className='footer-link'>Privacy</Link>
                        <Link className='footer-link'>Terms</Link>
                    </div>
                 

                    </div>
                  
                    <div className="newsletter">
                        <h3>Services</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem.</p>
                    </div>
                </div>
                <hr className='hr-line' />
                <p className='rights'>Designed with <BsChevronLeft/> 3  by Curve 2022. All right reserved</p>
            </div>
        </div>
    )
}

export default Footer;