import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbLayoutModule, NbSelectModule } from '@nebular/theme';

@NgModule({
  declarations: [],
  imports: [CommonModule, NbLayoutModule, NbSelectModule],
  exports: [NbLayoutModule, NbSelectModule],
})
export class SharedModule {}
