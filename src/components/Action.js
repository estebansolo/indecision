import React from 'react';

export const Action = ({ hasOptions, randomPick }) => (
	<button className="big-button" disabled={hasOptions} onClick={randomPick}>
		What should I do?
	</button>
);
