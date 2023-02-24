import PropTypes from 'prop-types';
import { RiUserAddFill } from 'react-icons/ri';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { Form, Btn, Input } from './PhonebookForm.styled';

export class PhonebookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    addContact: PropTypes.func,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
  };

  handleInputChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = evt => {
    evt.preventDefault();
    const { contacts, addContact } = this.props;
    const { name, number } = this.state;
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const alreadyExists = contacts.findIndex(item => {
      const prevItem = item.name.toLowerCase();
      const newItem = contact.name.toLowerCase();
      return prevItem === newItem;
    });

    if (alreadyExists >= 0) {
      Notify.failure(`${contact.name} is already in contacts`);
      return;
    } else {
      addContact(contact);
    }

    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <Input
          type="text"
          name="name"
          value={name}
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={this.handleInputChange}
          required
        />
        <Input
          type="tel"
          name="number"
          value={number}
          placeholder="Enter phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={this.handleInputChange}
          required
        />
        <Btn type="submit" aria-label="Add contact">
          <RiUserAddFill size="1.8em" />
        </Btn>
      </Form>
    );
  }
}
