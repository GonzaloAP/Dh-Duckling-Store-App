import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DucklingFormComponent} from "../duckling-form/duckling-form.component";
import {DucklingI} from "../../interfaces/duckling.interface";
import {MatTableDataSource} from "@angular/material/table";
import {DucklingService} from "../../services/duckling.service";
import {PageEvent} from "@angular/material/paginator";
import {DucklingDeleteFormComponent} from "../duckling-delete-form/duckling-delete-form.component";

@Component({
  selector: 'app-duckling-container',
  templateUrl: './duckling-container.component.html',
  styleUrls: ['./duckling-container.component.css']
})
export class DucklingContainerComponent implements OnInit {

  ducklings: DucklingI[] = [];
  tempDuckling : DucklingI | null = null;
  dataSource = new MatTableDataSource<DucklingI>();
  displayedColumns: string[] = ['id', 'color', 'size', 'price', 'quantity', 'actions'];
  pageIndex = 0;
  pageSize = 25;
  pageSizeOptions=[25, 50, 100, 200];
  filterValue = '';

  constructor(private dialog: MatDialog,
              private ducklingService: DucklingService) {
  }

  ngOnInit(): void {
    this.loadDucklings();
  }

  public openDucklingForm(duckling: DucklingI | null, isEditing: boolean): void {
    this.tempDuckling = duckling;
    const dialogRef = this.dialog.open(DucklingFormComponent, {
      width: '500px',
      disableClose: true,
      data: {
        duckling: duckling,
        isEditing: isEditing,
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res === undefined) {
        let auxDuckling = dialogRef.componentInstance.data.duckling;
        if (!dialogRef.componentInstance.data.isEditing) {
          this.ducklings.push(auxDuckling);
        } else {
          if (this.tempDuckling) {
            const existentDucklingPos = this.ducklings.indexOf(this.tempDuckling);
            this.ducklings[existentDucklingPos] = auxDuckling;
          }
        }
        this.dataSource.data = this.ducklings.slice(this.pageIndex, this.pageSize);
        this.tempDuckling = null;
      }
    });
  }

  public openDeleteDucklingForm(duckling: DucklingI): void {
    const dialogRef = this.dialog.open(DucklingDeleteFormComponent, {
      width: '500px',
      disableClose: true,
      data: {
        duckling: duckling
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res === undefined) {
        let auxDuckling = dialogRef.componentInstance.data.duckling;

        const deletedDucklingPos = this.ducklings.indexOf(auxDuckling);
        this.ducklings.splice(deletedDucklingPos, 1);
        this.dataSource.data = this.ducklings.slice(this.pageIndex, this.pageSize);
      }
    });
  }


  loadDucklings(): void {
    this.ducklingService.getAll().subscribe(data => {
      this.ducklings = data;
      this.dataSource.data = this.ducklings.slice(this.pageIndex, this.pageSize);
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onPageEvent(event: PageEvent): void {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.ducklings.length) {
      endIndex = this.ducklings.length;
    }
    this.dataSource.data = this.ducklings.slice(startIndex, endIndex);
  }

}
