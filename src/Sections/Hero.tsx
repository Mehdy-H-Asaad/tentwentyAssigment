import "../Style/Hero/Hero.scss";
import Container from "../Components/Container";
import backGroundImg from "../Assets/imgs/8e0a4f8b807a5a6235350d3b78539454.jpg";
import backGroundImg2 from "../Assets/imgs/boats.jpg";
import { useState } from "react";
import { AnimationOnScroll } from "../Components/AnimationOnScroll";

function Hero() {
	const [img, setImg] = useState(backGroundImg);
	const [animationName, setAnimationName] = useState(
		"changingBackgroundImgOne"
	);

	const handleClick = () => {
		if (img === backGroundImg) {
			setImg(backGroundImg2);
			setAnimationName("changingBackgroundImgTwo");
		} else {
			setImg(backGroundImg);
			setAnimationName("changingBackgroundImgOne");
		}
	};

	return (
		<div className="hero" style={{ animationName: animationName }}>
			<Container>
				<div className="text-box">
					<AnimationOnScroll>
						<h3>Welcome To TenTwenty Farms</h3>
					</AnimationOnScroll>
					<AnimationOnScroll>
						<p>From our Farms to your hands</p>
					</AnimationOnScroll>
				</div>

				<AnimationOnScroll>
					<div className="animation-box">
						<div className="current-img">
							<img
								src={img}
								className="img-slider"
								alt=""
								onClick={() => handleClick()}
							/>
						</div>
					</div>
				</AnimationOnScroll>
			</Container>
		</div>
	);
}

export default Hero;
