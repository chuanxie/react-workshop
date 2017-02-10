import { mount } from 'enzyme'
import ListOfPeople from './ListOfPeople'
import React from 'react'

test('it renders the heading', () => {
  const wrapper = mount(<ListOfPeople people={[]} />)
  expect(wrapper.find('h2').text()).toEqual(`List of Jack's Friends`)
})

