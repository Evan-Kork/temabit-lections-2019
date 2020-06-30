import React    from 'react';

const HeaderSearch = (props) => {
	return (
		<div className="header__search">
			<input type="text"
			       placeholder={props.placeholder} />
		</div>
	)
};

export default HeaderSearch;