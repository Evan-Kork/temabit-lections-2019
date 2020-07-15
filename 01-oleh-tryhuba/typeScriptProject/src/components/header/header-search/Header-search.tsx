import React, {FC} from 'react';

type placeholderProps = {
	placeholder: string
}

const HeaderSearch: FC<placeholderProps> = ({placeholder}) => {
	return (
		<div className="header__search">
			<input type="text"
			       placeholder={placeholder}/>
		</div>
	)
};

export default HeaderSearch;