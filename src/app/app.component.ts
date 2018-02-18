import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from "../model/device";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  devices:Device[];

  constructor(private http:HttpClient){
    this.getAll()
  }

  getAll(){
    this.http.get<Device[]>('http://localhost:3000/devices')
      .subscribe(result=>this.devices=result);
  }
}
