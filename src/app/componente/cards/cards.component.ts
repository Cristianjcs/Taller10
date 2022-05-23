import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

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
