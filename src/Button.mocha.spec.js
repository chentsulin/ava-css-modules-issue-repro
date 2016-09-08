import assert from 'assert';
import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';
import styles from './Button.css';

describe('Button', () => {
  it('has hashed .btn className', () => {
    const element = shallow(<Button>Submit</Button>);
    const button = element.find('button');
    assert.equal(button.prop('className'), styles.btn);
  })
});

