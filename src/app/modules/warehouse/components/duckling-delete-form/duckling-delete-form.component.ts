import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DucklingContainerComponent} from "../duckling-container/duckling-container.component";
import {FormBuilder} from "@angular/forms";
import {DucklingService} from "../../services/duckling.service";
import {AlertService} from "../../../../services/alert.service";
import {SpinnerService} from "../../../../spinner/spinner.service";

@Component({
  selector: 'app-duckling-delete-form',
  templateUrl: './duckling-delete-form.component.html',
  styleUrls: ['./duckling-delete-form.component.css']
})
export class DucklingDeleteFormComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<DucklingContainerComponent>,
              private formBuilder: FormBuilder,
              private ducklingService: DucklingService,
              private alertService: AlertService,
              private spinner: SpinnerService) {
  }

  ngOnInit(): void {
  }

  public delete(): void {
    this.spinner.show();
    this.ducklingService.delete(this.data.duckling.id).subscribe(res => {
      if (res === true) {
        this.alertService.success('Patito eliminado correctamente!', 'Exito');
        this.dialogRef.close();
      } else {
        this.alertService.error('Ocurrió un error al eliminar el patito.', 'Error');
      }
      this.spinner.hide();
    }, error => {
      this.spinner.hide();
    });
  }

}
