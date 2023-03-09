import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlockUIModule } from 'ng-block-ui';
import { FormsModule } from '@angular/forms';
import { BlockUIHttpModule } from 'ng-block-ui/http';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    NgbModule,
    BlockUIModule.forRoot(),
    BlockUIHttpModule.forRoot(),
    NgSelectModule,
  ],
  exports: [
    NgbModule,
    FormsModule,
    BlockUIModule,
    NgSelectModule
  ]
})
export class SharedModule { }
