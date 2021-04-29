import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  boats:string[]=[]; 
  
  constructor(
    private httpClientService:HttpClientService,
    router:Router
  ) { }
  
  ngOnInit() {
    this.httpClientService.getEngines().subscribe(
     response =>{this.boats=response;}
    );
  }

}
