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
  MatInputModule,
  MatGridListModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatAutocompleteModule
} from '@angular/material';

import {NgModule} from '@angular/core';

@NgModule({
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatChipsModule,
    MatInputModule,
    MatGridListModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatAutocompleteModule
  ],
})
export class MaterialModule { }
