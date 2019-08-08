import React from 'react';
import Modal from 'react-modal';

export const OptionModal = ({ selectedOption, handleClearSelectedOption }) => (
	<Modal
		onRequestClose={handleClearSelectedOption}
		ariaHideApp={false}
		isOpen={!!selectedOption}
		contentLabel="Selected Option"
	>
		<h3>Selected Option</h3>
		{selectedOption && <p>{selectedOption}</p>}
		<button onClick={handleClearSelectedOption}>Okay</button>
	</Modal>
);
