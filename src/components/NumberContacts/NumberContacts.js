import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/contacts-selectors';

import styles from './NumberContacts.module.css';

const NumberContacts = () => {
  const contacts = useSelector(getContacts);

  const numberContacts = contacts.length;

  return (
    <p className={styles.text}>
      Number of contacts:
      <span className={styles.number}> {numberContacts}</span>
    </p>
  );
};

export default NumberContacts;
