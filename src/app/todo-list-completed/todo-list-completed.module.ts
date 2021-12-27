import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { TodoListCompletedComponent } from './todo-list-completed.component';
import { TodoListCompletedRoutes } from './todo-list-completed.routing';

@NgModule({
  imports: [FormsModule, CommonModule, SharedModule, TodoListCompletedRoutes],
  declarations: [TodoListCompletedComponent]
})
export class TodoListCompletedModule {}
