import { Component } from 'react';
import { PhonebookForm } from './PhonebookComponents/PhonebookForm/PhonebookForm';
import { ContactsList } from './PhonebookComponents/ContactsList/ContactsList';
import { Filter } from './PhonebookComponents/Filter/Filter';
import { Section } from './Section/Section';
import { Notification } from './PhonebookComponents/Notification/Notification';
import initValues from '../json/initValues';

export class App extends Component {
  state = {
    contacts: initValues,
    filter: '',
  };

  componentDidMount() {
    const contact = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contact);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = contact => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  handleFilterChange = event => {
    const { value } = event.currentTarget;
    this.setState({
      filter: value,
    });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  clearFilterField = () => {
    this.setState({ filter: '' });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <Section title="Add new contact">
          <PhonebookForm
            contacts={contacts}
            addContact={this.addContact}
          ></PhonebookForm>
        </Section>

        <Section title="Filter contacts">
          <Filter
            onChange={this.handleFilterChange}
            value={filter}
            onClick={this.clearFilterField}
          ></Filter>
        </Section>

        <Section title="Saved contacts">
          {contacts.length ? (
            <ContactsList
              filteredContacts={this.getFilteredContacts()}
              onDelete={this.deleteContact}
            ></ContactsList>
          ) : (
            <Notification message="There is no contacts in your contact list"></Notification>
          )}
        </Section>
      </>
    );
  }
}
