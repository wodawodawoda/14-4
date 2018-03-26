import React from "react";
import PropTypes from 'prop-types';

export class ContactForm extends React.Component { 
	render() {
		return (
			<form className='form container'>
				<input className='form__input' type='text' placeholder='Imię' value={this.props.contact.firstName}/>
				<input className='form__input' type='text' placeholder='Nazwisko' value={this.props.contact.lastName}/>
				<input className='form__input form__input--email' type='email' placeholder='Email' value={this.props.contact.email}/>
				<button className='form__btn' type='submit'>Dodaj kontakt</button>
			</form>
		)
	}
}
ContactForm.propTypes = {
	contact: PropTypes.object.isRequired
}

