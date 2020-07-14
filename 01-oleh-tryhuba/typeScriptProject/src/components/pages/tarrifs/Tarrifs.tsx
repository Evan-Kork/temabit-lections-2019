import React, {Fragment} from 'react';
import './Tarrifs.scss'

const Tariffs = () => {
	return (
		<Fragment>
			<h1 className='title'>Тарифи</h1>
			<p className="about">Ми будуємо якісну доставку. Якісне не може бути найдешевшим. Ми розуміємо специфіку ринку
				та відслідковуємо
				купівельну спроможність наших клієнтів. Саме тому, наші послуги на 10-15% доступніші ціною, ніж у головних
				лідерів ринку.</p>
			<div className="table-wrapper">
				<table className="rates-table">
					<tbody>
					<tr>
						<td colSpan={2} width="177" className="title">
							<p>Типорозмір</p>
						</td>
						<td width="51" className="blue sm">
							<p>XS</p>
						</td>
						<td width="42" className="blue sm">
							<p>S</p>
						</td>
						<td width="59" className="blue sm">
							<p>M</p>
						</td>
						<td width="51" className="green sm">
							<p>L</p>
						</td>
						<td width="51" className="green sm">
							<p>XL</p>
						</td>
						<td width="51" className="deep-blue sm">
							<p>ХXL</p>
						</td>
						<td width="51" className="light-blue sm">
							<p>XXXL</p>
						</td>
						<td rowSpan={2} width="110">
							<p>Доплата<sup>3</sup> за 1 кг</p>
							<p>понад 30 кг</p>
						</td>
					</tr>
					<tr>
						<td colSpan={2} width="177" className="title">
							<p>Фактична вага<sup>1</sup><span>(кг)</span></p>
						</td>
						<td width="51" className="blue">
							<p>0,5</p>
						</td>
						<td width="42" className="blue">
							<p>1</p>
						</td>
						<td width="59" className="blue">
							<p>2</p>
						</td>
						<td width="51" className="green">
							<p>5</p>
						</td>
						<td width="51" className="green">
							<p>10</p>
						</td>
						<td width="51" className="deep-blue">
							<p>15</p>
						</td>
						<td width="51" className="light-blue">
							<p>30</p>
						</td>
					</tr>
					<tr>
						<td colSpan={2} width="177" className="title">
							<p>Найдовша сторона <span>(см)</span></p>
						</td>
						<td colSpan={3} width="152" className="blue">
							<p>40</p>
						</td>
						<td colSpan={2} width="101" className="green">
							<p>60</p>
						</td>
						<td colSpan={2} width="101" className="deep-blue">
							<p>90</p>
						</td>
						<td width="110">
							<p>4XL+</p>
							<p>(120)</p>
						</td>
					</tr>
					<tr>
						<td colSpan={2} width="177" className="title">
							<p>Зручна передача<sup>2</sup> <span>(грн)</span></p>
						</td>
						<td width="51" className="dirty-blue">
							<p>14</p>
						</td>
						<td width="42" className="dirty-blue">
							<p>17</p>
						</td>
						<td width="59" className="dirty-blue">
							<p>19</p>
						</td>
						<td width="51" className=" dirty-light-blue ">
							<p>21</p>
						</td>
						<td width="51" className=" dirty-light-blue ">
							<p>27</p>
						</td>
						<td width="51" className=" light-cyan ">
							<p>36</p>
						</td>
						<td width="51" className=" light-cyan ">
							<p>50</p>
						</td>
						<td width="110">
							<p>0,6</p>
						</td>
					</tr>
					<tr>
						<td colSpan={2} width="177" className="title">
							<p>У межах міста<sup>2</sup> <span>(грн)</span></p>
						</td>
						<td width="51" className="dirty-blue">
							<p>25</p>
						</td>
						<td width="42" className="dirty-blue">
							<p>30</p>
						</td>
						<td width="59" className="dirty-blue">
							<p>35</p>
						</td>
						<td width="51" className=" dirty-light-blue ">
							<p>38</p>
						</td>
						<td width="51" className=" dirty-light-blue ">
							<p>49</p>
						</td>
						<td width="51" className=" light-cyan ">
							<p>65</p>
						</td>
						<td width="51" className=" light-cyan ">
							<p>90</p>
						</td>
						<td width="110">
							<p>1,4</p>
						</td>
					</tr>
					<tr>
						<td colSpan={2} width="177" className="title">
							<p>У межах області<sup>2</sup> <span>(грн)</span></p>
						</td>
						<td width="51" className="dirty-blue">
							<p>30</p>
						</td>
						<td width="42" className="dirty-blue">
							<p>35</p>
						</td>
						<td width="59" className="dirty-blue">
							<p>40</p>
						</td>
						<td width="51" className=" dirty-light-blue ">
							<p>45</p>
						</td>
						<td width="51" className=" dirty-light-blue ">
							<p>55</p>
						</td>
						<td width="51" className=" light-cyan ">
							<p>70</p>
						</td>
						<td width={51} className=" light-cyan ">
							<p>95</p>
						</td>
						<td width="110">
							<p>1,9</p>
						</td>
					</tr>
					<tr>
						<td rowSpan={4} width="135" className="title">
							<p>По Україні<sup>2</sup> (тарифні зони) <span>(грн)</span></p>
						</td>
						<td width="42" className="left-border">
							<p>1</p>
						</td>
						<td rowSpan={4} width="51" className="dirty-blue">
							<p>33</p>
						</td>
						<td rowSpan={4} width="42" className="dirty-blue">
							<p>37</p>
						</td>
						<td rowSpan={4} width="59" className="dirty-blue">
							<p>42</p>
						</td>
						<td rowSpan={4} width="51" className=" dirty-light-blue ">
							<p>47</p>
						</td>
						<td rowSpan={4} width="51" className=" dirty-light-blue ">
							<p>57</p>
						</td>
						<td rowSpan={4} width="51" className=" light-cyan ">
							<p>75</p>
						</td>
						<td rowSpan={4} width="51" className=" light-cyan ">
							<p>95</p>
						</td>
						<td width="110">
							<p>2,5</p>
						</td>
					</tr>
					<tr>
						<td width="42" className="left-border">
							<p>2</p>
						</td>
						<td width="110">
							<p>3,0</p>
						</td>
					</tr>
					<tr>
						<td width="42" className="left-border">
							<p>3</p>
						</td>
						<td width="110">
							<p>4,0</p>
						</td>
					</tr>
					<tr>
						<td width="42" className="left-border">
							<p>4</p>
						</td>
						<td width="110">
							<p>&nbsp;5,5</p>
						</td>
					</tr>
					</tbody>
				</table>
			</div>
		</Fragment>
	)
};

export default Tariffs;