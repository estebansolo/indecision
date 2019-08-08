import React, { useState } from 'react';

export const AddOption = ({ handleAddOption }) => {
	const [ error, setError ] = useState(undefined);

	const addOption = (e) => {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		const error = handleAddOption(option);

		setError(error);
		if (!error) e.target.elements.option.value = '';
	};

	return (
		<div>
			{error && <p className="add-option-error">{error}</p>}
			<form className="add-option" onSubmit={addOption}>
				<input className="add-option__input" type="text" name="option" />
				<button className="button">Add Option</button>
			</form>
		</div>
	);
};
