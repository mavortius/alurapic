import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowIfAuthenticatedDirective } from './show-if-authenticated.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ShowIfAuthenticatedDirective],
  exports: [ShowIfAuthenticatedDirective]
})
export class ShowIfAuthenticatedModule {
}
