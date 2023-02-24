import PropTypes from 'prop-types';
import { ContactItem } from 'components/PhonebookComponents/ContactItem/ContactItem';
import { List } from './ContactsList.styled';

export const ContactsList = ({ filteredContacts, onDelete }) => {
  return (
    <List>
      {filteredContacts.map(contact => {
        return (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
          ></ContactItem>
        );
      })}
    </List>
  );
};

ContactsList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func,
};
