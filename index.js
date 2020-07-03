import React, { Component } from 'react';
import { render } from 'react-dom';
import matchRules from 'match-rules';

const source = {
  admin: 'user_admin',
};

const RULE = {
  admin: 'user_admin',
}

const sourceObject = {
  enable_unique_feature: true,
  when_user_is_admin: true,
  age_more_than_18: 25,
};

const ENABLE_UNIQUE_FEATURE = {
  enable_unique_feature: true,
  when_user_is_admin: true,
  age_more_than_18: (value, sourceObject) => value > 18,
};

const sourceObject2 = {
  enable_unique_feature: true,
  userData: {
    personalData: {
      profile: {
        age: 18,
        country: 'US',
      },
    },
  },
};

// Rules
const DEEP_RULE_EXAMPLE = {
  userData: {
    personalData: {
      profile: {
        country: (value, sourceObject) => value === 'US' || value === 'IN',
      },
    },
  },
};

class App extends Component {

  render() {
    return (
      <div>
        {matchRules(source, RULE)?
        <div>render admin stuff</div>:
        <div>render non - admin stuff</div>}

        {matchRules(sourceObject, ENABLE_UNIQUE_FEATURE)?
        <div>unique feature enabled</div>:
        <div>not rendered</div>}

        {matchRules(sourceObject2, DEEP_RULE_EXAMPLE)?
        <div>deep data source</div>:
        <div>not rendered</div>}

      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
