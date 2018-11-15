import {
  MatCheckboxModule, MatGridListModule,
  MatIconModule, MatInputModule,
  MatMenuModule, MatSnackBarModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {NgModule} from '@angular/core';

@NgModule({
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatGridListModule,
    MatSnackBarModule
  ],
})
export class MaterialModule { }
