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
		<header>
			<div className="logo">
				<img src={logo1} alt="" />
			</div>

			<nav ref={navRef} className="box">
				<a href="/#">Home</a>
				<a href="/#">About Us</a>
				<a href="/#">Services</a>
				<a href="/#">Media</a>
				<a href="/#">Photo Booth</a>
				<a href="/#">Store</a>
				<a href="/#">Contact</a>

                <div className="header__socials"> 
                        <ul>
                            <li><a href="/#"> <FaTwitter /> </a></li>
                            <li><a href="/#"><BsInstagram /></a></li>
                            <li><a href="/#"><FaFacebookF /></a></li>
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
		</header>
	);
}


export default Navbar;