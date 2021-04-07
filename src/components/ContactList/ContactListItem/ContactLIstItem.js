import styles from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number, deleteContact }) => {
  return (
    <li className={styles.contact__item} key={id}>
      <p className={styles.contact__info}>
        <span className={styles.contact__infoName}>{name}:</span>
        <span className={styles.contact__infoNumber}> {number}</span>
      </p>

      <button
        className={styles.btn__delete}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
