import './hero.styles.scss'
import Navigation from './../../Routes/Navigation/navigation.component'

// import images 
import Logo1 from './../../Assets/samplelogo1.png'
import Logo2 from './../../Assets/samplelogo2.png'
import Logo3 from './../../Assets/samplelogo3.png'
import Logo4 from './../../Assets/samplelogo4.png'

const Hero = ()=>{
    return(
        <div className="landing-container">
           <Navigation/> 
           <div className='hero-section'>
            <div className="branding-section">
                <h1>Creating world class Platforms <br /> with <span className='software'>Software</span>  and <span className='tech'>Tech</span> </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vero vel consectetur. Temporibus explicabo eos, saepe fuga, aspernatur nam accusamus atque odit sapiente eveniet cumque.

                </p>
                <button className='gin-btn'> GET IN TOUCH</button>
            </div>
            <div className="testimonial-section">
                <img src={Logo1} alt="" />
                <img src={Logo2} alt="" />
                <img src={Logo3} alt="" />
                <img src={Logo4} alt="" />


            </div>
        </div>
        </div>
        

    )
   



 
}

export default Hero;