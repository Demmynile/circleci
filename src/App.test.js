import { render, screen } from '@testing-library/react';
import App from './App';
import {mount} from 'enzyme'




// writing the test script for the application
describe('writing a test script for the application' , () => {

  let wrapper;
  beforeEach(() => {
   wrapper = mount(<App/>)

  })
  test("testing if the header renders" , () => {
    
    expect(wrapper.find("#header").text()).toContain("Counter")

  });

  test("testing for the result of the final state" , () => {

    expect(wrapper.find("#counter-increment").simulate("click"))
    expect(wrapper.find("#answers").text()).toBe("1")

  })
  
  test("testing for the result of the final state" , () => {
    
    expect(wrapper.find("#counter-decrement").simulate("click"))
    expect(wrapper.find("#answersTwo").text()).toBe("-1")
    
  })
  

})
