import React from 'react'

export const Option = ({ text, deleteSingleOption }) => (
	<div>
		{text}
		<button onClick={() => deleteSingleOption(text)}>remove</button>
	</div>
);