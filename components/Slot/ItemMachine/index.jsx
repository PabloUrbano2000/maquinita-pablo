import React from 'react';
import styles from '../../../styles/Slot.module.css';
import Image from 'next/image';

const ItemMachine = ({ src }) => {
  return (
    <div className={styles.containerImage}>
      <Image src={src} alt="img-slot" width={100} height={100} />
    </div>
  );
};

export default ItemMachine;
