import React from 'react'
import { shallow } from 'enzyme'

import Subtitle from '../Subtitle.component'

describe('Testing Subtitle component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Subtitle subtitle='' />,
    );
    expect(wrapper).toMatchSnapshot()
    wrapper.setProps({ subtitle: undefined })
    expect(wrapper).toMatchSnapshot()
    wrapper.setProps({ subtitle: 'asd' })
    expect(wrapper).toMatchSnapshot()
    wrapper.setProps({ containerStyle: null })
    expect(wrapper).toMatchSnapshot()
    wrapper.setProps({ containerStyle: 55 })
    expect(wrapper).toMatchSnapshot()
    wrapper.setProps({ containerStyle: {} })
    expect(wrapper).toMatchSnapshot()
    wrapper.setProps({ subtitleStyle: null })
    expect(wrapper).toMatchSnapshot()
    wrapper.setProps({ subtitleStyle: 55 })
    expect(wrapper).toMatchSnapshot()
    wrapper.setProps({ subtitleStyle: {} })
    expect(wrapper).toMatchSnapshot()
  });
});
