import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhotoFormComponent } from './photo-form.component';
import { VMessageModule } from '../../shared/components/vmessage/vmessage.module';

@NgModule({
  declarations: [PhotoFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    VMessageModule
  ]
})
export class PhotoFormModule {
}
