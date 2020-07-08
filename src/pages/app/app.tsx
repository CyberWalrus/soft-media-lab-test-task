import React, { FunctionComponent } from 'react';
import Form from '../../containers/form/form';
import './app.modules.scss';

const App: FunctionComponent = () => {
  return (
    <div className="app">
      <main>
        <Form />
      </main>
    </div>
  );
};

export default App;
