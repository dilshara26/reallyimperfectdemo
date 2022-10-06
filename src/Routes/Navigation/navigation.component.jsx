import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import { useState } from "react";
import logo from "./../../Assets/logo.png"

// import { BiChevronLeft,BiChevronRight } from "react-icons/bi";

import { BsChevronRight,BsChevronLeft } from "react-icons/bs";

// import styles
import './navigation.styles.scss';
const Navigation = () => {
    const [collapse,setCollapse] = useState(true);
    const collapseHandler = (event)=>{
        if (collapse === true) {

            setCollapse(false);
          
         
        }

        else{
            setCollapse(true);
           
            
        }
        console.log(collapse)
    }

    return (
      <Fragment >
      

        <div className="navigation">
            <div className="logo-div">
            <Link className="logo-container" to="/">
                <img src={logo} alt="" />
            </Link>
            </div>
           
            <div className={`nav-links-container ${collapse === true? 'nav-links-hide': 'nav-links-display'}`}>
                <Link className="icon-link navlink-check-wrap" onClick={collapseHandler}>{collapse === true?  <BsChevronLeft className=" navlink-check"/>:  <BsChevronRight className=" navlink-check"/>}</Link>
                <Link className={`nav-link ${collapse === true? 'nav-link-dnone': 'nav-link-dinline'} `}>HOME</Link>
                <Link className={`nav-link ${collapse === true? 'nav-link-dnone': 'nav-link-dinline'}`}>ABOUT US</Link>
                <Link className={`nav-link ${collapse === true? 'nav-link-dnone': 'nav-link-dinline'}`}>SERVICES</Link>
                <Link className={`nav-link ${collapse === true? 'nav-link-dnone': 'nav-link-dinline'}`}>JOIN US</Link>
                <Link className={`nav-link ${collapse === true? 'nav-link-dnone': 'nav-link-dinline'}`}>CONTACT US</Link>
            
            </div>
        </div>
    
        <Outlet />
      </Fragment>
 
    );
  };

  export default Navigation;