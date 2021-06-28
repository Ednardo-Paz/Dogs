import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        name={name}
        id={name}
        className={styles.input}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        type={type}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
