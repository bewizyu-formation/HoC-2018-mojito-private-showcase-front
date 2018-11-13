import {MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule],
})
export class MaterialModule { }
