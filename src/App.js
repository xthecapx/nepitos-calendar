import React, { Component } from 'react';
import classes from './App.module.scss';

const MS_PER_DAY = 1000 * 60 * 60 * 24;

function dateDiffInDays(a, b) {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / MS_PER_DAY);
}

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <div className={classes.Container}>
          <h1>Días desde la aparición del primer </h1>
          <h2>NEPITO</h2>
          <h3>{dateDiffInDays(new Date('8/9/2017'), new Date())}</h3>
        </div>
      </div>
    );
  }
}

export default App;
