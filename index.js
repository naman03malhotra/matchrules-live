import React, { Component } from 'react';
import { render } from 'react-dom';
import { matchRules } from 'match-rules';

const source = {
  admin: 'user_admin',
};

const RULE = {
  admin: 'user_admin',
}

class App extends Component {

  render() {
    return (
      <div>
        {matchRules(source, RULE) && 
        <div>render admin stuff</div>}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
