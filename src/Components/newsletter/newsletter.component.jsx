<<<<<<< HEAD
import './newsletter.styles.scss';
import { BsChevronRight,BsChevronLeft } from "react-icons/bs";

const Newsletter = ()=>{
  return(
    <div id='newsletter' className="newsletter-container">
        <div className="newsletter-content">
            <h1>Delivering Value in every step of production</h1>
            <h5>Subscribe the Newsletter </h5>
            <form> 
            <input className='email' type="email" name="email" placeholder='ENTER YOUR EMAIL' />
            <button><BsChevronRight/></button>
            </form>

        </div>
    </div>
  )
}

=======
import './newsletter.styles.scss';
import { BsChevronRight,BsChevronLeft } from "react-icons/bs";

const Newsletter = ()=>{
  return(
    <div id='newsletter' className="newsletter-container">
        <div className="newsletter-content">
            <h1>Delivering Value in every step of production</h1>
            <h5>Subscribe the Newsletter </h5>
            <form> 
            <input className='email' type="email" name="email" placeholder='ENTER YOUR EMAIL' />
            <button><BsChevronRight/></button>
            </form>

        </div>
    </div>
  )
}

>>>>>>> 1ba06054eaa345100f9c3a0514b36893de6711bf
export default Newsletter; 