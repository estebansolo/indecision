import React from 'react';

export const Option = ({ text, count, deleteSingleOption }) => (
	<div className="option">
		<p className="option__text">
			{count}. {text}
		</p>
		<button className="button button--link" onClick={() => deleteSingleOption(text)}>
			remove
		</button>
	</div>
);
