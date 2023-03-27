import './blog.styles.scss';
import Bannerblog from './../../Assets/blog-image/Frame 10.png' 
import Banner2Blog from './../../Assets/blog-image/Frame 11.png'

import Blog3 from './../../Assets/blog-image/Frame 12.png'
import Blog4 from './../../Assets/blog-image/Group 16.png'
import Blog5 from './../../Assets/blog-image/Group 17.png'
import Blog6 from './../../Assets/blog-image/Group 18.png'

import { BsArrowRight,BsChevronLeft } from "react-icons/bs";
import { useState } from 'react';

const Blog = ()=>{
    const [hoverState,updateHoverState] = useState(['','','','','','']);

    const mouseEnter = (event)=>{
        console.log(event.target.id);
        hoverState[Number(event.target.id)] = 'blur';
        updateHoverState(hoverState);
        console.log(hoverState)

    }

    const mouseLeave = (event)=>{
        for (let i = 0; i < hoverState.length; i++) {
            hoverState[i] = ''
            
        }
        updateHoverState(hoverState);

    }

    
    return(
        <div className="blog-section">
            <h1>Blog <BsArrowRight /></h1>
            <div className="blog-view">
                <div className="top-blog-view">
                    <div className="banner-long">
                        <img className={`blog-banner ${hoverState[0]}`} onMouseOver={mouseEnter} onMouseLeave={mouseLeave}  id='0' src={Bannerblog} alt="" />
                    </div >
                       
                    <div className='banner-square'>
                        <img className={`blog-banner ${hoverState[1]}`} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} id='1' src={Banner2Blog} alt="" />
                    </div>

                </div>
                <div className="bottom-blog-view">
                   
                    
                            <img className={`blog-banner ${hoverState[2]}`} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} id='2' src= {Blog3} alt="" />
            
                        <img className={`blog-banner ${hoverState[3]}`} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} id='3' src= {Blog4} alt="" />
                     

                   
                 
                            <img className={`blog-banner ${hoverState[4]}`} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} id='4' src= {Blog5} alt="" />
                 
                        <img className={`blog-banner ${hoverState[5]}`} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} id='5' src= {Blog6} alt="" />
                   

                 


                </div>
            </div>
        </div>
    )
}

export default Blog;