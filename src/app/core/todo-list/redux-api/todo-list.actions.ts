import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';

import { TODOItem } from '../../../shared/models/todo-item';
import { TodoListState } from './todo-list.model';

export enum TodoListActionTypes {
  LoadTodoList = '[TodoList] Load Todo List',
  TodoItemsLoaded = '[TodoList] TodoItemsLoaded',
  TodoItemsLoadFailed = '[TodoList] load todo items failed',
  TodoItemCreated = '[TodoList] TodoItemCreated',
  TodoItemDeleted = '[TodoList] TodoItemDeleted',
  TodoItemUpdated = '[TodoList] TodoItemUpdated',
  TodoItemCompleted = '[TodoList] TodoItemCompleted',
  SetTodoItemForEdit = '[TodoList] SetTodoItemForEdit'
}

export class LoadTodoList implements Action {
  public readonly type = TodoListActionTypes.LoadTodoList;

  constructor() {}
}

export class TodoItemsLoaded implements Action {
  public readonly type = TodoListActionTypes.TodoItemsLoaded;

  constructor(public payload: TODOItem[]) {}
}

export class TodoItemsLoadFailed implements Action {
  public readonly type = TodoListActionTypes.TodoItemsLoadFailed;

  constructor(public payload: Error) {}
}

export class AddTodoItemAction implements Action {
  public readonly type = TodoListActionTypes.TodoItemCreated;

  constructor(public payload: TODOItem) {}
}

export class TodoItemDeleted implements Action {
  public readonly type = TodoListActionTypes.TodoItemDeleted;

  constructor(public payload: string) {}
}

export class TodoItemUpdated implements Action {
  public readonly type = TodoListActionTypes.TodoItemUpdated;

  constructor(public payload: TODOItem) {}
}

export class SetTodoItemForEditAction implements Action {
  public readonly type = TodoListActionTypes.SetTodoItemForEdit;

  constructor(public payload: TODOItem) {}
}

export class TodoItemCompleted implements Action {
  public readonly type = TodoListActionTypes.TodoItemCompleted;

  constructor(public payload: string) {}
}

@Injectable({ providedIn: 'root' })
export class TodoListActions {
  constructor(private store: Store<TodoListState>) {}

  public loadTodoList(): void {
    this.store.dispatch(new LoadTodoList());
  }

  public addTodo(todo: TODOItem): any {
    this.store.dispatch(new AddTodoItemAction(todo));
  }

  public todoItemUpdated(todoItem: TODOItem): any {
    this.store.dispatch(new TodoItemUpdated(todoItem));
  }

  public setTodoItemForEdit(todoItem: TODOItem): any {
    this.store.dispatch(new SetTodoItemForEditAction(todoItem));
  }

  public deleteTodo(id: string) {
    this.store.dispatch(new TodoItemDeleted(id));
  }

  public todoItemCompleted(id: string) {
    this.store.dispatch(new TodoItemCompleted(id));
  }
}
