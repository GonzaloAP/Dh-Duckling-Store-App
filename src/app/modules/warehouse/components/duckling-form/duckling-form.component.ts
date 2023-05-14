import {Component, Inject, OnInit} from '@angular/core';
import {DucklingContainerComponent} from "../duckling-container/duckling-container.component";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AlertService} from "../../../../services/alert.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DucklingI} from "../../interfaces/duckling.interface";
import {DucklingService} from "../../services/duckling.service";
import {SpinnerService} from "../../../../spinner/spinner.service";

@Component({
  selector: 'app-duckling-form',
  templateUrl: './duckling-form.component.html',
  styleUrls: ['./duckling-form.component.css']
})
export class DucklingFormComponent implements OnInit {

  ducklingForm: FormGroup = new FormGroup({});
  colors = ["Rojo", "Verde", "Amarillo", "Negro"];
  sizes = ["XLarge", "Large", "Medium", "Small", "XSmall"];
  maxPrice = 100000;
  min = 1;
  maxQuantity = 100;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<DucklingContainerComponent>,
              private formBuilder: FormBuilder,
              private ducklingService: DucklingService,
              private alertService: AlertService,
              private spinner: SpinnerService) {
  }

  ngOnInit(): void {
    this.setDucklingForm(this.data.duckling, this.data.isEditing);
  }

  public setDucklingForm(duckling: DucklingI, isEditing: boolean) {
    this.ducklingForm = this.formBuilder.group({
      id: [(duckling) ? duckling.id : 0],
      color: [(duckling) ? duckling.color : '', Validators.required],
      size: [(duckling) ? duckling.size : '', Validators.required],
      price: [(duckling) ? duckling.price : '', Validators.required],
      quantity: [(duckling) ? duckling.quantity : '', Validators.required]
    });

    if (isEditing) {
      this.ducklingForm.controls['color'].disable();
      this.ducklingForm.controls['size'].disable();
    }
  }

  public process() {
    if (this.ducklingForm.invalid) {
      this.alertService.warning('Llene todos los campos obligatorios del formulario.', 'Formulario Incompleto');
      return;
    }

    this.spinner.show();
    if(this.data.isEditing){
      this.update();
    }else{
      this.save();
    }
  }

  public save() {
    this.ducklingService.save(this.ducklingForm.value).subscribe(data => {
      if (data) {
        this.alertService.success('Patito guardado correctamente!', 'Exito');
        this.data.duckling = data;
        this.dialogRef.close();
      } else {
        this.alertService.error('Ocurrió un error al guardar el patito.', 'Error');
      }
      this.spinner.hide();
    }, error => {
      this.spinner.hide();
    });
  }

  public update() {
    this.ducklingForm.controls['color'].enable();
    this.ducklingForm.controls['size'].enable();

    this.ducklingService.update(this.ducklingForm.value).subscribe(data => {
      if (data) {
        this.alertService.success('Patito modificado correctamente!', 'Exito');
        this.data.duckling = data;
        this.dialogRef.close();
      } else {
        this.alertService.error('Ocurrió un error al modificar el patito.', 'Error');
      }
      this.spinner.hide();
    }, error => {
      this.spinner.hide();
    });
  }

}
