import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbLayoutModule, NbSelectModule, NbIconModule, NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbSelectModule,
    NbEvaIconsModule,
    NbIconModule,
    NbButtonModule,
  ],
  exports: [NbLayoutModule, NbSelectModule, NbEvaIconsModule, NbIconModule, NbButtonModule],
})
export class SharedModule {}
