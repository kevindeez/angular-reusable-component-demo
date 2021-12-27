import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';

import { SpinnerOverlayModule } from './spinner-overlay/spinner-overlay.module';
import { StateModule } from './store/store.module';
import { TodoListService } from './todo-list/todo-list.service';

@NgModule({
  imports: [OverlayModule, SpinnerOverlayModule, StateModule],
  declarations: [],
  providers: [TodoListService]
})
export class CoreModule {}
