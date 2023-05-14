import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarehouseRoutingModule } from './warehouse-routing.module';
import { DucklingContainerComponent } from './components/duckling-container/duckling-container.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DucklingFormComponent } from './components/duckling-form/duckling-form.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";
import { DucklingDeleteFormComponent } from './components/duckling-delete-form/duckling-delete-form.component';


@NgModule({
  declarations: [
    DucklingContainerComponent,
    DucklingFormComponent,
    DucklingDeleteFormComponent
  ],
  imports: [
    CommonModule,
    WarehouseRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class WarehouseModule { }
