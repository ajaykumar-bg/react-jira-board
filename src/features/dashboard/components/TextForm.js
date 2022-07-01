import React from 'react';

function TextForm(props) {
	const onSubmit = (event) => {
		const form = event.target;
		event.preventDefault();
		props.onSubmit(form.input.value);
		form.reset();
	};
	return (
		<form onSubmit={onSubmit}>
			<input
				type='text'
				className='TextForm__input'
				name='input'
				placeholder={props.placeholder}
			/>
		</form>
	);
}

export default TextForm;
