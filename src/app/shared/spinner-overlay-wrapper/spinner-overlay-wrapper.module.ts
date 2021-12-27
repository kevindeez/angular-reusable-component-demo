import { NgModule } from '@angular/core';

import { SpinnerModule } from '../../../shared-lib/spinner/spinner.module';
import { SpinnerOverlayWrapperComponent } from './spinner-overlay-wrapper.component';

@NgModule({
  imports: [SpinnerModule],
  declarations: [SpinnerOverlayWrapperComponent],
  exports: [SpinnerOverlayWrapperComponent]
})
export class SpinnerOverlayWrapperModule {}
