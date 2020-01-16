import React from 'react';
import { shallow } from 'enzyme';
import CustomButton from '../index';

const handleClick = () => 'hello world';

describe('<CustomButton />', () => {
  it('should be defined', () => {
    expect(CustomButton).toBeDefined();
  });

  it('should render correctly', () => {
    const tree = shallow(
      <CustomButton name='button test' handleClick={handleClick} />,
    );
    expect(tree).toMatchSnapshot();
  });
});
