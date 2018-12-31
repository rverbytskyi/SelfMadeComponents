import React from 'react'
import { shallow } from 'enzyme'

import Title from '../Title.component'

describe('Testing Subtitle component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Title title='' />,
    );
    expect(wrapper).toMatchSnapshot()
    wrapper.setProps({ title: undefined })
    expect(wrapper).toMatchSnapshot()
    wrapper.setProps({ title: 'asd' })
    expect(wrapper).toMatchSnapshot()
    wrapper.setProps({ containerStyle: null })
    expect(wrapper).toMatchSnapshot()
    wrapper.setProps({ containerStyle: 55 })
    expect(wrapper).toMatchSnapshot()
    wrapper.setProps({ containerStyle: {} })
    expect(wrapper).toMatchSnapshot()
    wrapper.setProps({ titleStyle: null })
    expect(wrapper).toMatchSnapshot()
    wrapper.setProps({ titleStyle: 55 })
    expect(wrapper).toMatchSnapshot()
    wrapper.setProps({ titleStyle: {} })
    expect(wrapper).toMatchSnapshot()
  });
});
