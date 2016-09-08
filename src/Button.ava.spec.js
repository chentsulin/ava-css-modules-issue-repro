import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';
import styles from './Button.css';

test('has hashed .btn className', t => {
  const element = shallow(<Button>Submit</Button>);
  const button = element.find('button');
  t.is(button.prop('className'), styles.btn);
})
