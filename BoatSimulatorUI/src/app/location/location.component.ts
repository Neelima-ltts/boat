import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

    locations:string[]=[]; 
  
  constructor(
    private httpClientService:HttpClientService,
    router:Router
  ) { }
  
  ngOnInit() {
    this.httpClientService.getEngines().subscribe(
     response =>{this.locations}
    );
  }

}
