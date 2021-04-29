import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Engine, HttpClientService, Main } from '../service/http-client.service';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.css']
})
export class EngineComponent implements OnInit {

  engines:string[]=[]; 

constructor(
  private httpClientService:HttpClientService,
  router:Router
) { }

ngOnInit() {
  this.httpClientService.getEngines().subscribe(
   response =>{this.engines}
  );
}

}
