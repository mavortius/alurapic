import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { MessageModule } from '../shared/components/message/message.module';

@NgModule({
  declarations: [ SigninComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MessageModule
  ]
})
export class HomeModule {
}
