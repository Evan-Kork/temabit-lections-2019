import React    from 'react';
import ReactDom from 'react-dom'

const HeaderSearch = (props) => {
	return (
		<div className="header__search">
			<input type="text"
			       placeholder={props.placeholder} />
		</div>
	)
};


export default HeaderSearch;