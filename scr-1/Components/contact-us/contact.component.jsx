import './contact.styles.scss';
import SampleBlog from  './../../Assets/blog-image/Group 17.png'

const Contact =()=>{
    return(
        <div className="contact-container">
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
                            <h3>Country office Sri Lanka</h3>
                            <p>
                            Orion City, Sri lanka <br />
                            Tel +12834878458746 <br />
                            Info@reallyimperfect.com
                            </p>
                        </div>
                        <div className="map">
                            <img src={SampleBlog}  alt="" />
                        </div>
                    </div>

                </div>
                <div className="right-div">
                    <h1>Or Pitch Us</h1>
                    <div className='pitchbtn'>
                        <button>Schedule a Call</button>
                    </div>
                    

                </div>

            </div>
        </div>
    )
}

export default Contact;