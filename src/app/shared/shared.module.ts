import { MaterialModule } from './modules/material.module';
import { NgModule } from "@angular/core";
import { ProgressSpinnerComponent } from './components/loaders/progress-spinner/progress-spinner.component';
import { AppOverlayModule } from './components/loaders/overlay/overlay.module';

@NgModule({
  imports: [
     MaterialModule,
     AppOverlayModule
  ],
  declarations: [
  ProgressSpinnerComponent
],
  entryComponents: [
  ],
  exports: [
    MaterialModule,
    ProgressSpinnerComponent,
    AppOverlayModule
  ]
})
export class SharedModule { }
