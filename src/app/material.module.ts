import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatSelectModule,
  MatCardModule,
  MatChipsModule,
  MatInputModule
} from '@angular/material';

import {NgModule} from '@angular/core';

@NgModule({
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatChipsModule,
    MatInputModule
  ],
})
export class MaterialModule { }
