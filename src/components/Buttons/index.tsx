import React, { useContext, useState } from 'react';
import { ContextTree } from '../../contexts/ContextTree';

import styles from './styles.module.css';

const Buttons: React.FC = () => {
  const {createNewTree, handleButtonPreOrder, handleButtonInOrder, handleButtonPostOrder, handleButtonBFS} = useContext(ContextTree)
  const [nNodes, setNNodes] = useState(0);

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Algoritmos</h2>
      <input type="number" className={styles.inputNumber} onChange={(e) => setNNodes(Number(e.target.value))} placeholder="Número de nós"/>
      <button type="button" className={styles.button} onClick={() => createNewTree(nNodes)}>Gerar árvore</button>
      <button type="button" className={styles.button} onClick={handleButtonPreOrder}>Pré-ordem</button>
      <button type="button" className={styles.button} onClick={handleButtonInOrder}>Em ordem</button>
      <button type="button" className={styles.button} onClick={handleButtonPostOrder}>Pós-ordem</button>
      <button type="button" className={styles.button} onClick={handleButtonBFS}>Em largura</button>
    </div>
  );
}

export default Buttons;