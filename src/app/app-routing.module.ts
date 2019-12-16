import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementComponent } from './management/management.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialModule } from './material.modules';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: '', component: ManagementComponent }
];

@NgModule({
  declarations: [
    ManagementComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatNativeDateModule,
    MaterialModule,
    ReactiveFormsModule],
  exports: [RouterModule, ManagementComponent]
})
export class AppRoutingModule { }
