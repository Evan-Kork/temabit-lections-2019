import React from "react";
import Carousel from "react-bootstrap/Carousel";

class Slider extends React.Component {
	render() {
		return (
			<div className="Slider-component">
				<Carousel indicators={false}>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://justin.ua/wp-content/uploads/2020/02/Os_kab_Sayt.jpg"
							alt="First slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100 "
							src="https://justin.ua/wp-content/uploads/2020/02/Sayt_IZI.jpg"
							alt="Second slide"
						/>
					</Carousel.Item>
					{/* <Carousel.Item>
						<img className="d-block w-100" height="620" />
					</Carousel.Item> */}
				</Carousel>
			</div>
		);
	}
}

export default Slider;
