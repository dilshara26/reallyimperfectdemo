<<<<<<< HEAD
import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import { useState } from "react";
import logo from "./../../Assets/logo.png";

// import { BiChevronLeft,BiChevronRight } from "react-icons/bi";

import { BsChevronRight, BsChevronLeft, BsChevronDown,BsChevronUp } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

// import styles
import "./navigation.styles.scss";
const Navigation = () => {
  const [collapse, setCollapse] = useState(true);
  const [mobile, setMobile] = useState(false);

  const collapseHandler = (event) => {
    if (collapse === true) {
      setCollapse(false);
    } else {
      setCollapse(true);
    }
    console.log(collapse);
  };

  const mobileHandler = (event) => {
    if (mobile === true) {
      setMobile(false);
    } else {
      setMobile(true);
    }
    console.log(mobile);
  };

  return (
    <Fragment>
      <div className="navigation">
        <div className="logo-div">
          <Link className="logo-container" to="/">
            <img src={logo} alt="" />
          </Link>
        </div>

        <div
          className={`nav-links-container ${
            collapse === true ? "nav-links-hide" : "nav-links-display"
          }`}
        >
          <Link
            className="icon-link navlink-check-wrap"
            onClick={collapseHandler}
          >
            {collapse === true ? (
              <BsChevronLeft className=" navlink-check" />
            ) : (
              <BsChevronRight className=" navlink-check" />
            )}
          </Link>
          <Link
            to={'/'}
            className={`nav-link ${
              collapse === true ? "nav-link-dnone" : "nav-link-dinline"
            } `}
          >
            HOME
          </Link>
          <a
            href ="#aboutus"
            className={`nav-link ${
              collapse === true ? "nav-link-dnone" : "nav-link-dinline"
            }`}
          >
            ABOUT US
          </a>
          <a
            href="#aboutus"
            className={`nav-link ${
              collapse === true ? "nav-link-dnone" : "nav-link-dinline"
            }`}
          >
            SERVICES
          </a>
          <a
            href="#newsletter"
            className={`nav-link ${
              collapse === true ? "nav-link-dnone" : "nav-link-dinline"
            }`}
          >
            JOIN US
          </a>
          <a
            href="#contactus"
            className={`nav-link ${
              collapse === true ? "nav-link-dnone" : "nav-link-dinline"
            }`}
          >
            CONTACT US
          </a>
        </div>

        <div className={`m-nav-container`}>
          {collapse ? (
            <BsChevronDown size={30} onClick={collapseHandler} />
          ) : (
            <BsChevronUp size={30} onClick={collapseHandler} />
          )}
          <div className={`m-nav-links  ${collapse?'m-nav-link-hide':''}`}>
            <a href="/" className="m-nav-link">HOME</a>
            <a href="#aboutus" className="m-nav-link">ABOUT US</a>
            <a href="#aboutus" className="m-nav-link">SERVICES</a>
            <a href="#newsletter" className="m-nav-link">JOIN US</a>
            <a href="#contactus" className="m-nav-link">CONTACT US</a>
          </div>
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
=======
import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import { useState } from "react";
import logo from "./../../Assets/logo.png";

// import { BiChevronLeft,BiChevronRight } from "react-icons/bi";

import { BsChevronRight, BsChevronLeft, BsChevronDown,BsChevronUp } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

// import styles
import "./navigation.styles.scss";
const Navigation = () => {
  const [collapse, setCollapse] = useState(true);
  const [mobile, setMobile] = useState(false);

  const collapseHandler = (event) => {
    if (collapse === true) {
      setCollapse(false);
    } else {
      setCollapse(true);
    }
    console.log(collapse);
  };

  const mobileHandler = (event) => {
    if (mobile === true) {
      setMobile(false);
    } else {
      setMobile(true);
    }
    console.log(mobile);
  };

  return (
    <Fragment>
      <div className="navigation">
        <div className="logo-div">
          <Link className="logo-container" to="/">
            <img src={logo} alt="" />
          </Link>
        </div>

        <div
          className={`nav-links-container ${
            collapse === true ? "nav-links-hide" : "nav-links-display"
          }`}
        >
          <Link
            className="icon-link navlink-check-wrap"
            onClick={collapseHandler}
          >
            {collapse === true ? (
              <BsChevronLeft className=" navlink-check" />
            ) : (
              <BsChevronRight className=" navlink-check" />
            )}
          </Link>
          <Link
            to={'/'}
            className={`nav-link ${
              collapse === true ? "nav-link-dnone" : "nav-link-dinline"
            } `}
          >
            HOME
          </Link>
          <a
            href ="#aboutus"
            className={`nav-link ${
              collapse === true ? "nav-link-dnone" : "nav-link-dinline"
            }`}
          >
            ABOUT US
          </a>
          <a
            href="#aboutus"
            className={`nav-link ${
              collapse === true ? "nav-link-dnone" : "nav-link-dinline"
            }`}
          >
            SERVICES
          </a>
          <a
            href="#newsletter"
            className={`nav-link ${
              collapse === true ? "nav-link-dnone" : "nav-link-dinline"
            }`}
          >
            JOIN US
          </a>
          <a
            href="#contactus"
            className={`nav-link ${
              collapse === true ? "nav-link-dnone" : "nav-link-dinline"
            }`}
          >
            CONTACT US
          </a>
        </div>

        <div className={`m-nav-container`}>
          {collapse ? (
            <BsChevronDown size={30} onClick={collapseHandler} />
          ) : (
            <BsChevronUp size={30} onClick={collapseHandler} />
          )}
          <div className={`m-nav-links  ${collapse?'m-nav-link-hide':''}`}>
            <a href="/" className="m-nav-link">HOME</a>
            <a href="#aboutus" className="m-nav-link">ABOUT US</a>
            <a href="#aboutus" className="m-nav-link">SERVICES</a>
            <a href="#newsletter" className="m-nav-link">JOIN US</a>
            <a href="#contactus" className="m-nav-link">CONTACT US</a>
          </div>
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
>>>>>>> 1ba06054eaa345100f9c3a0514b36893de6711bf
