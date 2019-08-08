import React, {useState} from 'react'

export const AddOption = ({handleAddOption}) => {
	const [error, setError] = useState(undefined)

	const addOption = (e) => {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		const error = handleAddOption(option);

		setError(error);
		if (!error) e.target.elements.option.value = '';
	}

	return (
		<div>
			{error && <p>{error}</p>}
			<form onSubmit={addOption}>
				<input type="text" name="option" />
				<button>Add Option</button>
			</form>
		</div>
	);
}
