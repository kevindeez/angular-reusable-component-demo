import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SpinnerModule } from '../../../shared-lib/spinner/spinner.module';
import { SpinnerOverlayComponent } from './spinner-overlay.component';
import { SpinnerOverlayService } from './spinner-overlay.service';

@NgModule({
  imports: [CommonModule, SpinnerModule],
  declarations: [SpinnerOverlayComponent],
  entryComponents: [SpinnerOverlayComponent],
  providers: [SpinnerOverlayService],
  exports: []
})
export class SpinnerOverlayModule {}
