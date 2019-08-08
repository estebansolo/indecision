import React from 'react';
import { Option } from './Option';

export const Options = ({ deleteOptions, options, handleDeleteSingleOption }) => (
	<div>
		<button onClick={deleteOptions}>Remove All</button>
		{options.length === 0 && <p>Please add an option to get started!</p>}
		{options.map((option) => <Option key={option} text={option} deleteSingleOption={handleDeleteSingleOption} />)}
	</div>
);
