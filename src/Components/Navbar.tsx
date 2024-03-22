import "../Style/Navbar/Navbar.scss";
import { AnimationOnScroll } from "./AnimationOnScroll";
import Container from "./Container";
import { GoArrowRight } from "react-icons/go";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";

function Navbar() {
	const navLinks = ["About", "News", "Services", "Our Team", "Make Enquiry"];
	const [isShown, setIsShown] = useState<boolean>(false);
	return (
		<div className="navbar">
			<Container className="nav-container">
				<AnimationOnScroll>
					<div className="navbar-box">
						<ul className="menu">
							{navLinks.map((ele, index: number) => {
								return <li key={index}>{ele}</li>;
							})}
						</ul>
						<CiMenuBurger
							size={20}
							className="menu-icon"
							onClick={() => setIsShown(!isShown)}
							style={{ cursor: "pointer" }}
						/>
						<div className="contact-box">
							<a className="contact-button">Contact us</a>
							<GoArrowRight className="contact-icon" />
						</div>
					</div>
				</AnimationOnScroll>
				{isShown && (
					<ul className="hover-menu">
						{navLinks.map((ele, index: number) => {
							return (
								<li key={index} onClick={() => setIsShown(false)}>
									<a href="#">{ele}</a>
								</li>
							);
						})}
					</ul>
				)}
			</Container>
		</div>
	);
}

export default Navbar;
