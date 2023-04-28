import React, { useRef, useEffect } from "react";
import { BsInstagram } from "react-icons/bs";
import logo1 from '../../images/41329936363.png'
import { FaBars, FaTimes, FaTwitter, FaFacebookF } from "react-icons/fa";
import "./home.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	useEffect(() => {
		navRef.current.classList.add("responsive_nav");
	  }, []);
	
    

	return (
		<body>
		<header id="home" className="header">
			
			<div className="header__content">

			
			<div className="logo">
				<img src={logo1} alt="" />
			</div>

			<nav ref={navRef} className="box">
				<a href="/#" onClick={showNavbar}>Home</a>
				<a href="#about" onClick={showNavbar}>About Us</a>
				<a href="/#" onClick={showNavbar}>Services</a>
				<a href="/#" onClick={showNavbar}>Media</a>
				<a href="/#" onClick={showNavbar}>Photo Booth</a>
				<a href="/#" onClick={showNavbar}>Store</a>
				<a href="/#" onClick={showNavbar}>Contact</a>

                <div className="header__socials"> 
                        <ul>
                            <li><a href="https://twitter.com/powell_party" > <FaTwitter /> </a></li>
                            <li><a href="https://www.instagram.com/powell_party"><BsInstagram /></a></li>
                            <li><a href="https://www.facebook.com/powellparty"><FaFacebookF /></a></li>
                        </ul>
                    </div>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
                    
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>

			</div>
		</header>
		</body>
	);
}


export default Navbar;