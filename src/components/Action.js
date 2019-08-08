import React from 'react'

export const Action = ({ hasOptions, randomPick }) => {
	return (
		<button disabled={hasOptions} onClick={randomPick}>
			What should I do?
		</button>
	);
};