import React from 'react';

import styles from './Button.css';

export default ({ children }) => (
  <button className={styles.btn}>{children}</button>
);
