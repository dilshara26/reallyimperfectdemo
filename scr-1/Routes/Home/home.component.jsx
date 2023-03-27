import './home.styles.scss'
import './../Navigation/navigation.styles.scss'
import Hero from '../../Components/hero-section/hero.component'
import Services from '../../Components/services/services.component'
import Footer from '../../Components/footer/footer.component'
import Blog from '../../Components/blog-section/blog.component'
import Newsletter from '../../Components/newsletter/newsletter.component'
import Contact from '../../Components/contact-us/contact.component'

const Home = ()=>{
    return(
        <div className="home-view">
            <Hero/>
            <Services/> 
            <Newsletter/>
            <Blog/> 
            <Contact/>
            <Footer/>    
        </div>
   

    )
}

export default Home;