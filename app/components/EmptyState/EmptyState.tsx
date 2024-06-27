import React, { useState } from 'react';
import styles from './EmptyState.module.css';
const EmptyState = () => {
  return (
    <div className={styles.emptyStateWrapper}>
      <img width={'213'} height={'230px'} src={'./images/emptyState.svg'} />
      <div className={styles.emptyStateText}> No results</div>
    </div>
  );
};
export default EmptyState;
