import { Guid } from '../../../shared/models/guid';
import { TODOItem } from '../../../shared/models/todo-item';
import { GenericAction } from '../../store/generic-action';
import { TodoListActionTypes } from './todo-list.actions';
import { TodoListState } from './todo-list.model';

export class TodoListInitState implements TodoListState {
  public todos: TODOItem[];
  public errors?: Error;
  public isLoading: boolean;
  constructor() {
    this.todos = [];
    this.isLoading = false;
  }
}

const loadTodoItems = (
  lastState: TodoListState,
  action: GenericAction<TodoListActionTypes, void>
): TodoListState => {
  return {
    ...lastState,
    isLoading: true
  };
};

const todoItemsLoaded = (
  lastState: TodoListState,
  action: GenericAction<TodoListActionTypes, TODOItem[]>
): TodoListState => {
  return {
    ...lastState,
    todos: action.payload,
    isLoading: false
  };
};

const todoItemsLoadFailed = (
  lastState: TodoListState,
  action: GenericAction<TodoListActionTypes, Error>
): TodoListState => {
  return {
    ...lastState,
    errors: action.payload,
    isLoading: false
  };
};

const todoItemCreatedReducer = (
  lastState: TodoListState,
  action: GenericAction<TodoListActionTypes, TODOItem>
): TodoListState => {
  const prevTodos = lastState.todos;

  action.payload.id = Guid.newGuid();
  prevTodos.push(action.payload);
  const newTodos = prevTodos;
  return {
    ...lastState,
    todos: newTodos
  };
};

const selectTodoItemForEditReducer = (
  lastState: TodoListState,
  action: GenericAction<TodoListActionTypes, TODOItem>
): TodoListState => {
  const indexToUpdate = lastState.todos.findIndex((todo) => todo.id === action.payload.id);
  return {
    ...lastState,
    editTodoItemIdx: indexToUpdate
  };
};

const todoItemUpdatedReducer = (
  lastState: TodoListState,
  action: GenericAction<TodoListActionTypes, TODOItem>
): TodoListState => {
  const newTodolist = lastState.todos.map((todo) =>
    todo.id === action.payload.id ? action.payload : todo
  );

  return {
    ...lastState,
    editTodoItemIdx: null,
    todos: newTodolist
  };
};

const todoItemDeletedReducer = (
  lastState: TodoListState,
  action: GenericAction<TodoListActionTypes, string>
): TodoListState => {
  const newState = lastState.todos.filter((todo) => todo.id !== action.payload);

  return {
    ...lastState,
    editTodoItemIdx: null,
    todos: newState
  };
};

const todoItemCompletedReducer = (
  lastState: TodoListState,
  action: GenericAction<TodoListActionTypes, string>
) => {
  lastState.todos.find((todo) => todo.id === action.payload).completed = true;

  return { ...lastState };
};

export function todoListReducers(
  lastState: TodoListState = new TodoListInitState(),
  action: GenericAction<TodoListActionTypes, any>
): TodoListState {
  switch (action.type) {
    case TodoListActionTypes.LoadTodoList:
      return loadTodoItems(lastState, action);
    case TodoListActionTypes.TodoItemsLoaded:
      return todoItemsLoaded(lastState, action);
    case TodoListActionTypes.TodoItemsLoadFailed:
      return todoItemsLoadFailed(lastState, action);
    case TodoListActionTypes.TodoItemCreated:
      return todoItemCreatedReducer(lastState, action);
    case TodoListActionTypes.TodoItemsLoadFailed:
      return todoItemsLoadFailed(lastState, action);
    case TodoListActionTypes.SetTodoItemForEdit:
      return selectTodoItemForEditReducer(lastState, action);
    case TodoListActionTypes.TodoItemDeleted:
      return todoItemDeletedReducer(lastState, action);
    case TodoListActionTypes.TodoItemUpdated:
      return todoItemUpdatedReducer(lastState, action);
    case TodoListActionTypes.TodoItemCompleted:
      return todoItemCompletedReducer(lastState, action);

    default:
      return lastState;
  }
}
