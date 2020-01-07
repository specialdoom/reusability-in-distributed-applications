import React from 'react';
import ReactDOM from 'react-dom';

import List from '../src/components/List';
const App = () => {
  return (
    <div>
      <List />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
