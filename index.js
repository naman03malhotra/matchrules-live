import React, { Component } from 'react';
import { render } from 'react-dom';
import matchRules from 'match-rules';

const sourceObject0 = {
  admin: 'user_admin',
};

const RULE = {
  admin: 'user_admin',
}

const sourceObject1 = {
  enable_unique_feature: true,
  when_user_is_admin: true,
  age_more_than_18: 25,
};

const ENABLE_UNIQUE_FEATURE = {
  enable_unique_feature: true,
  when_user_is_admin: true,
  age_more_than_18: (value, sourceObject1) => value > 18,
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
        country: (value, sourceObject1) => value === 'US' || value === 'IN',
      },
    },
  },
};


// example where you have to dynamically match the generated rule
const itemCreatedByUser = {
  user_id: 123,
}

const userSource = {
  id: 123,
}

const DYNAMIC_USER_RULE = (itemCreatedByUserParam) => {
  return {
    id: itemCreatedByUserParam.user_id,
  }
}

class App extends Component {

  render() {
    return (
      <div>
        {matchRules(sourceObject0, RULE)?
        <div>render admin stuff</div>:
        <div>render non - admin stuff</div>}

        {matchRules(sourceObject1, ENABLE_UNIQUE_FEATURE)?
        <div>unique feature enabled</div>:
        <div>not rendered</div>}

        {matchRules(sourceObject2, DEEP_RULE_EXAMPLE)?
        <div>deep data source</div>:
        <div>not rendered</div>}

        {matchRules(userSource, DYNAMIC_USER_RULE(itemCreatedByUser))?
        <div>dynamic rule case rendered</div>:
        <div>not rendered</div>}

      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
