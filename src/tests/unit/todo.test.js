import React from 'react';
import Todo from 'components/Todo';
import Enzyme, { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Todo /> component Unit Tests', () => {
  const mockFn = jest.fn();
  const props = {
    onClick = mockFn,
    completed: false,
    text: "buy milk"
  }
  
  let component;
  
  //setup and tear down
  beforeEach(() => {
    component = shallow(<Todo {...props} />);
  })
  
  it('should render 1 <Todo />', () => {
    expect(component).toHaveLength(1);
    expect(component.find("15")).toHaveLength(1);
  });

  it('should render props correctly', () => {
    console.log(component.props());   //print out onClick, style, children
    expect(component.props().children).toEqual("buy milk");
  });

  it('should set props correctly', () => {
    component.setProps({ text: "hello" });
    expect(component.props().children).toEqual("hello");
  });

  it('should call onClick handler when Todo component is clicked', () => {
    component.simulate("click");
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

describe('<Todo /> styling behaviors', () => {
  const mockFn = jest.fn();
  
  it("should not have linethrough style when Todo is not complete", ()=>{
    const component = shallow(
      <Todo onClick={mockFn} completed={false} text="go shopping" />
    );
    console.log(component.props());
    expect(component.props().style).toEqual({ textDecoration: "none" })
  })
  
  it("should have linethrough style when Todo is complete", ()=>{
    const component = shallow(
      <Todo onClick={mockFn} completed={true} text="go shopping" />
    );
    console.log(component.props());
    expect(component.props().style).toEqual({ textDecoration: "line-through" })
  })
});
