import React from 'react';

export const Header = ({ title, subtitle }) => (
	<div className="header">
		<div className="full-container">
			<div>
				<h1 className="header__title">{title}</h1>
				{subtitle && <h2 className="header__subtitle">{subtitle}</h2>}
			</div>
		</div>
	</div>
);

Header.defaultProps = {
	title: 'Indecision',
	subtitle: 'Put your life in the hands of a computer'
};
