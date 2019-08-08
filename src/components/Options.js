import React from 'react';
import { Option } from './Option';

export const Options = ({ deleteOptions, options, handleDeleteSingleOption }) => (
	<div>
		<div className="widget-header">
			<h3 className="widget-header__title">Your Options</h3>
			<button className="button button--link" onClick={deleteOptions}>
				Remove All
			</button>
		</div>
		{options.length === 0 && <p className="widget-message">Please add an option to get started!</p>}
		{options.map((option, index) => (
			<Option key={index} count={index + 1} text={option} deleteSingleOption={handleDeleteSingleOption} />
		))}
	</div>
);
