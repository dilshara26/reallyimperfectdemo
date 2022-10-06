import './services.styles.scss'
import webdev from './../../Assets/webdev.png'
import mobiledev from './../../Assets/mobiledev.png'
import uiux from './../../Assets/uiux.png'
import fullstack from './../../Assets/fullstack.png'
import { Link } from 'react-router-dom'
import { BsArrowLeft,BsArrowRight,BsArrowUp } from "react-icons/bs";

const Services = ()=>{
    return(
        <div className="services-section">
            <div className="content-section">

                <h1>A full-size product development <br /> software company </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, blanditiis itaque. Soluta nesciunt eius voluptate delectus! Amet modi tenetur beatae exercitationem iusto! 
                </p>

            </div>
            <div className="services-image-section">
                <div className="service-col-1 service-col">
                    <img src={uiux} alt="" /> 
                    <Link>
                    <h2 className='top-btn'><span>< BsArrowLeft className='arrow-left'/> </span> UI/UX</h2>
                    </Link>
                    
                </div>
                <div className="service-col-2">
                    <div className="row-1 service-col">
                        <img src={webdev} alt="" /> 
                        <Link>
                        <h2 className='bottom-btn'><span>< BsArrowLeft className='arrow-left'/> </span> Web Dev</h2>
                        </Link>
                    </div>
                    <div className="row-2 service-col">
                        <img src={mobiledev} alt="" /> 
                        <Link>
                        <h2 className='bottom-btn'><span>< BsArrowUp className='arrow-left'/> </span> Mobile Dev</h2>
                        </Link>
                    </div>
                </div>
                <div className="service-col-3 service-col">
                    <img src={fullstack} alt="" /> 
                    <Link>
                        <h2 className='top-btn'><span>< BsArrowLeft className='arrow-left'/> </span> <br /> Full-stack <br /> Development</h2>
                    </Link>
                    
                </div>

            </div>
        </div>
    )
}

export default Services;