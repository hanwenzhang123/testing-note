import Todo from 'components/Todo';

describe('Todos Reducer Unit Tests', () => {
  it('should return an empty array when initial state and action is undefined', () => {
    expect(todos(undefined, {})).toEqual([]);
  });
  it('should update initial state by adding 1 Todo item to the list", () => {
    const addTodoAction = {
     type: "ADD_TODO",
     id: 1,
     text: "buy milk"
    }
    expect(todos([]. addTodoAction)).toEqual([{
      completed: false,
      id: 1,
      text: "buy milk"
    }])
  });
});
  
