import { MaterialModule } from './modules/material.module';
import { NgModule } from "@angular/core";
import { ProgressSpinnerComponent } from './components/loaders/progress-spinner/progress-spinner.component';
import { AppOverlayModule } from './components/loaders/overlay/overlay.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    MaterialModule,
    AppOverlayModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProgressSpinnerComponent
  ],
  entryComponents: [
  ],
  exports: [
    MaterialModule,
    ProgressSpinnerComponent,
    AppOverlayModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class SharedModule { }
