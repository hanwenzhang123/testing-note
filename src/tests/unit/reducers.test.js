import Todo from 'components/Todo';

describe('Todos Reducer Unit Tests', () => {
  it('should return an empty array when initial state and action is undefined', () => {
    expect(todos(undefined, {})).toEqual([]);
  });
  
  it('should update initial state by adding 1 Todo item to the list', () => {
    const addTodoAction = {
     type: "ADD_TODO",
     id: 1,
     text: "buy milk"
    };
    expect(todos([], addTodoAction)).toEqual([{
      completed: false,
      id: 1,
      text: "buy milk"
    }])
  });
  
  it('should update initial state by adding the second todo item to the list', () => {
    const initialState = [{
     completed: false,
     id: 1,
     text: "buy milk"
    }]
    const addTodoAction = {
     type: "ADD_TODO",
     id: 2,
     text: "go shopping"
    }
    expect(todos(initialState, addTodoAction)).toEqual([
      {
        completed: false,
        id: 1,
        text: "buy milk"
      },
      {
        completed: false,
        id: 2,
        text: "go shopping"
      }
    ])
  });
  
  it('should toggle incomplete todo item to complete', () => {
    const initialState = [{
     id: 1,
     text: "buy milk",
      completed: false
    }]
    const toggleTodoAction = {
     type: "TOGGLE_TODO",
     id: 1,
    };
    expect(todos(initialState, toggleTodoAction)).toEqual([{
      id: 1,
      text: "buy milk",
      completed: true
    }])
  });
});
  
