import React from 'react';
import Modal from 'react-modal';

export const OptionModal = ({ selectedOption, handleClearSelectedOption }) => (
	<Modal
		onRequestClose={handleClearSelectedOption}
		ariaHideApp={false}
		isOpen={!!selectedOption}
		contentLabel="Selected Option"
		closeTimeoutMS={200}
		className="modal"
	>
		<h3 className="modal__title">Selected Option</h3>
		{selectedOption && <p className="modal__body">{selectedOption}</p>}
		<button className="button" onClick={handleClearSelectedOption}>
			Okay
		</button>
	</Modal>
);
