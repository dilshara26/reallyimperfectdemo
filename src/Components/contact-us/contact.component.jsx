import './contact.styles.scss';
import SampleBlog from  './../../Assets/blog-image/Group 17.png'
import Iframe from 'react-iframe'

const Contact =()=>{
    return(
        <div id='contactus' className="contact-container">
            <h1 className='container-header'>Talk to our Experts</h1>
            <div className="content-box">
                <div className="left-div">

                    <h1>Meet us</h1>
                    <div className="hq">
                        <h3>Headquaters</h3>
                        <p>
                        401 Adams St, Toledo, OH, 43560, United States <br />
                        Tel +12834878458746 <br />
                        HQ@reallyimperfect.com
                        </p>
                    </div>
                    <div className="local">
                        <div className="info">
                            <h3>Country office <br /> Sri Lanka</h3>
                            <p>
                            Orion City, Sri lanka <br />
                            Tel +12834878458746 <br />
                            Info@reallyimperfect.com
                            </p>
                        </div>
                        <div className="map">
                            <p>
                            <Iframe className='map-frame' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5812825770995!2d79.8767427145761!3d6.940540894985505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25994258a560d%3A0xb68b9c5ecb25c38c!2sOrion%20Tower!5e0!3m2!1sen!2slk!4v1665717631589!5m2!1sen!2slk" width="200" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
                            </p>
                        </div>
                    </div>

                </div>
                <div className="right-div">
                    <h1>Or Pitch Us</h1>
                    <div className='pitchbtn'>
                        <button>SCHEDULE A CALL</button>
                    </div>
                    

                </div>

            </div>
        </div>
    )
}

export default Contact;