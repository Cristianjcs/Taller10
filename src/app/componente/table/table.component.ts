import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  datosApi!:any;

  constructor(public apiService:ApiService) { }

  ngOnInit(): void {
    this.obtenerDatosApi();
  }
  obtenerDatosApi(){
    this.apiService.obtenerDatos().subscribe(res=>
      this.datosApi=res,
      err=>console.log(err))
    }
    
}
