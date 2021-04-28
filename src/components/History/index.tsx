import React, { useContext } from 'react';
import { ContextTree } from '../../contexts/ContextTree';

import styles from './styles.module.css';

const History: React.FC = () => {
  const { history } = useContext(ContextTree)

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>History</h2>
      <ul className={styles.ul}>
        {history.map((msg, index) => (
            <li key={index} className={styles.li}>
              <h3 className={styles.h3}>{msg.title}</h3>
              <p className={styles.p}>{msg.body}</p>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default History;