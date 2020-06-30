import React, {FC} from 'react';
import ReactDom from 'react-dom'


type placeholderProps = {
	placeholder: string
}

const HeaderSearch = ({placeholder}: placeholderProps) => {
	return (
		<div className="header__search">
			<input type="text"
			       placeholder={placeholder}/>
		</div>
	)
};


export default HeaderSearch;