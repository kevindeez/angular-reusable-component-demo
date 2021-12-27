import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { TodoListEffects } from '../core/todo-list/redux-api/todo-list.effects';
import { todoListReducers } from '../core/todo-list/redux-api/todo-list.reducers';
import { TodoListSelector } from '../core/todo-list/redux-api/todo-list.selector';
import { SharedModule } from '../shared/shared.module';
import { AddTodoModule } from './add-todo/add-todo.module';
import { DuedateTodayCountPipe } from './duedate-today-count.pipe';
import { TodoListComponent } from './todo-list.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    AddTodoModule,
    StoreModule.forFeature('todoList', todoListReducers),
    EffectsModule.forFeature([TodoListEffects])
  ],
  declarations: [TodoListComponent, DuedateTodayCountPipe],
  providers: [TodoListSelector]
})
export class TodoListModule {}
