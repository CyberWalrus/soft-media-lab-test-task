import React, { FunctionComponent } from 'react';
import Form from '../../containers/form/form';
import styles from './app.modules.scss';

const App: FunctionComponent = () => {
  return (
    <div className={styles.app}>
      <main>
        <Form />
      </main>
    </div>
  );
};

export default App;
