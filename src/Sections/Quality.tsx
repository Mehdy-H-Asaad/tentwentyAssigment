import { AnimationOnScroll } from "../Components/AnimationOnScroll";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import "../Style/Quality/Quality.scss";
import Container from "../Components/Container";
import sliderData from "../Data/ImageSlider.json";

function Quality() {
	return (
		<div className="quality">
			<Container>
				<AnimationOnScroll>
					<h3 className="main-title">Quality Products</h3>
				</AnimationOnScroll>
				<AnimationOnScroll>
					<p className="quality-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</AnimationOnScroll>
			</Container>
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={false}
				slidesPerView={2}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: false,
				}}
				pagination={false}
				modules={[EffectCoverflow, Pagination]}
				className="mySwiper"
			>
				{sliderData.map(ele => {
					return (
						<SwiperSlide>
							<AnimationOnScroll>
								<div className="swiper-holder">
									<img src={ele.imgUrl} alt="" />
									<h3>{ele.name}</h3>
									<p>{ele.location}</p>
								</div>
							</AnimationOnScroll>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}

export default Quality;
