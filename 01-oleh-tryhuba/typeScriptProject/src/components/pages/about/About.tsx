import React, {Fragment} from 'react';

import './About.scss'

const About = () => {
	return (

		<Fragment>
			<h1>About page</h1>
			<section className="about-us-banner">
				<div className="about-us-banner-wrapper">
					<div className="banner-container">
						<div className="left-banner-container">
							<h1>Моя посилка - в моєму супермаркеті</h1>
						</div>
						<div className="right-banner-container">
							<p>Justin — значно більше, ніж просто пошта. У нас ви можете відправити чи отримати посилку з
								України та іншої країни. Але це ще не все. Також у нас можна отримати картку Монобанку, оформити
								страховку чи кредит.</p>

							<p>Justin — про комфорт. Наші поштомаркети там, де ви буваєте щодня — супермаркети та ТЦ.
								Відділення розташовані практично в кожному Сільпо, Fozzy, Фора. А це означає, що з Justin ви
								економите час, який можна провести зі своїми близькими.</p>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	)
};

export default About;