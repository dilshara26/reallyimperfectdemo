<<<<<<< HEAD
import './services.styles.scss'
import webdevelop from './../../Assets/webdev.png'
import mobiledev from './../../Assets/mobiledev.png'
import uiux from './../../Assets/uiux.png'
import fullstack from './../../Assets/fullstack.png'
import { Link } from 'react-router-dom'
import { BsArrowLeft,BsArrowRight,BsArrowUp,BsArrowDown } from "react-icons/bs";
import { useState } from 'react'


const Services = ()=>{
    let currentSt = null;
    const [webdev, setwebdev] = useState('display-none')
    const [uiuxdev, setuiuxdev] = useState('display-none')
    const[fsdev,setfsdev] = useState('display-none');
    const[mobdev,setmobdev] = useState('display-none');
    console.log(uiuxdev)
    const clickFunc = (e)=>{
        
        console.log(`${e.target.id}dev`=='mobdev');
        if (`${e.target.id}dev`=='uiuxdev' && uiuxdev == 'display-none'){
            
           setuiuxdev('display-view')
           console.log(uiuxdev)

        }
        else{
            setuiuxdev('display-none')
        }
        if (`${e.target.id}`=='fsdev' && fsdev == 'display-none'){
            
            setfsdev('display-view')
 
         }
         else{
             setfsdev('display-none')
         }
         if (`${e.target.id}`=='mobdev' && mobdev == 'display-none'){
            
            setmobdev('display-view')
 
         }
         else{
             setmobdev('display-none')
         }
         if (`${e.target.id}`=='webdev' && webdev == 'display-none'){
            
            setwebdev('display-view')
 
         }
         else{
             setwebdev('display-none')
         }


        
    }

    
    return(
        <div id="aboutus" className="services-section">
            <div className="content-section">

                <h1>A full-size product development <br /> software company </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, blanditiis itaque. Soluta nesciunt eius voluptate delectus! Amet modi tenetur beatae exercitationem iusto! 
                </p>

            </div>
            <div className="services-image-section">
                {/* <div className="service-col-1 service-col">
                    <img src={uiux} alt="" /> 
                    <Link>
                    <h2 id='uiux' className={`top-btn`} onClick={clickFunc}><span>< BsArrowDown className='arrow-left'/> </span> UI/UX</h2>
                    </Link>
                    <p className={`service-describe ${uiuxdev}`}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum voluptatem autem magnam praesentium quaerat voluptatibus, tempore sed.
                    </p>
                    
                </div> */}
                <div className="service-col-2">
                    <div className="row-1 service-col">
                        <img src={webdevelop} alt="" /> 
                        <Link>
                        <h2 id='webdev' onClick={clickFunc} className='bottom-btn'><span>< BsArrowUp className='arrow-left'/> </span> Web Dev</h2>
                        </Link>
                        <p className={`service-describe ${webdev}`}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum voluptatem autem magnam praesentium quaerat voluptatibus, tempore sed.
                    </p>
                    </div>
                    <div className="row-2 service-col">
                        <img src={mobiledev} alt="" /> 
                        <Link>
                        <h2 id='mobdev' onClick={clickFunc} className='bottom-btn'><span>< BsArrowUp className='arrow-left'/> </span> Mobile Dev</h2>
                        </Link>
                        <p className={`service-describe ${mobdev}`}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum voluptatem autem magnam praesentium quaerat voluptatibus, tempore sed.
                    </p>
                    </div>
                </div>
                <div className="service-col-3 service-col">
                    <img src={fullstack} alt="" /> 
                    <Link>
                        <h2 id='fsdev' onClick={clickFunc} className='top-btn'><span>< BsArrowDown className='arrow-left'/> </span> <br /> Full-stack <br /> Development</h2>
                    </Link>
                    <p className={`service-describe ${fsdev}`}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum voluptatem autem magnam praesentium quaerat voluptatibus, tempore sed.
                    </p>
                </div>

            </div>
        </div>
    )
}

=======
import './services.styles.scss'
import webdevelop from './../../Assets/webdev.png'
import mobiledev from './../../Assets/mobiledev.png'
import uiux from './../../Assets/uiux.png'
import fullstack from './../../Assets/fullstack.png'
import { Link } from 'react-router-dom'
import { BsArrowLeft,BsArrowRight,BsArrowUp,BsArrowDown } from "react-icons/bs";
import { useState } from 'react'


const Services = ()=>{
    let currentSt = null;
    const [webdev, setwebdev] = useState('display-none')
    const [uiuxdev, setuiuxdev] = useState('display-none')
    const[fsdev,setfsdev] = useState('display-none');
    const[mobdev,setmobdev] = useState('display-none');
    console.log(uiuxdev)
    const clickFunc = (e)=>{
        
        console.log(`${e.target.id}dev`=='mobdev');
        if (`${e.target.id}dev`=='uiuxdev' && uiuxdev == 'display-none'){
            
           setuiuxdev('display-view')
           console.log(uiuxdev)

        }
        else{
            setuiuxdev('display-none')
        }
        if (`${e.target.id}`=='fsdev' && fsdev == 'display-none'){
            
            setfsdev('display-view')
 
         }
         else{
             setfsdev('display-none')
         }
         if (`${e.target.id}`=='mobdev' && mobdev == 'display-none'){
            
            setmobdev('display-view')
 
         }
         else{
             setmobdev('display-none')
         }
         if (`${e.target.id}`=='webdev' && webdev == 'display-none'){
            
            setwebdev('display-view')
 
         }
         else{
             setwebdev('display-none')
         }


        
    }

    
    return(
        <div id="aboutus" className="services-section">
            <div className="content-section">

                <h1>A full-size product development <br /> software company </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, blanditiis itaque. Soluta nesciunt eius voluptate delectus! Amet modi tenetur beatae exercitationem iusto! 
                </p>

            </div>
            <div className="services-image-section">
                {/* <div className="service-col-1 service-col">
                    <img src={uiux} alt="" /> 
                    <Link>
                    <h2 id='uiux' className={`top-btn`} onClick={clickFunc}><span>< BsArrowDown className='arrow-left'/> </span> UI/UX</h2>
                    </Link>
                    <p className={`service-describe ${uiuxdev}`}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum voluptatem autem magnam praesentium quaerat voluptatibus, tempore sed.
                    </p>
                    
                </div> */}
                <div className="service-col-2">
                    <div className="row-1 service-col">
                        <img src={webdevelop} alt="" /> 
                        <Link>
                        <h2 id='webdev' onClick={clickFunc} className='bottom-btn'><span>< BsArrowUp className='arrow-left'/> </span> Web Dev</h2>
                        </Link>
                        <p className={`service-describe ${webdev}`}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum voluptatem autem magnam praesentium quaerat voluptatibus, tempore sed.
                    </p>
                    </div>
                    <div className="row-2 service-col">
                        <img src={mobiledev} alt="" /> 
                        <Link>
                        <h2 id='mobdev' onClick={clickFunc} className='bottom-btn'><span>< BsArrowUp className='arrow-left'/> </span> Mobile Dev</h2>
                        </Link>
                        <p className={`service-describe ${mobdev}`}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum voluptatem autem magnam praesentium quaerat voluptatibus, tempore sed.
                    </p>
                    </div>
                </div>
                <div className="service-col-3 service-col">
                    <img src={fullstack} alt="" /> 
                    <Link>
                        <h2 id='fsdev' onClick={clickFunc} className='top-btn'><span>< BsArrowDown className='arrow-left'/> </span> <br /> Full-stack <br /> Development</h2>
                    </Link>
                    <p className={`service-describe ${fsdev}`}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum voluptatem autem magnam praesentium quaerat voluptatibus, tempore sed.
                    </p>
                </div>

            </div>
        </div>
    )
}

>>>>>>> 1ba06054eaa345100f9c3a0514b36893de6711bf
export default Services;