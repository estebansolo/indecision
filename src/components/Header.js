import React from 'react'

export const Header = ({ title, subtitle }) => {
	return (
		<div>
			<h1>{title}</h1>
			{subtitle && <h2>{subtitle}</h2>}
		</div>
	);
};

Header.defaultProps = {
	title: 'Indecision',
	subtitle: 'Put your life in the hands of a computer'
};