import React from './node_modules/react';
import logo from './logo.svg';

import cx from './node_modules/classnames';
import styles from './styles.module.scss';

function App() {
  return (
    <div className={cx(styles.container)}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
