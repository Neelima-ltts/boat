import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Main{
  constructor(
    public hullid:string,
    public noofengine:string,
  ) {}
}

export class Engine{
  constructor(
    public engineid:string,
    public oilpressure:string,
    public oiltemperature:string,
    public enginetemperature:string,
    public engineruntime:string,
  ) {}
}

export class Location{
  constructor(
    public hullid:string,
    public latitude:string,
    public longitude:string,
    public altitude:string,
    public timestamp:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { }

  getBoats()
  {
    console.log("test call");
    return this.httpClient.get<Main[]>('http://localhost:8080/main');
  }

  getEngines()
  {
    console.log("test call");
    return this.httpClient.get<Main[]>('http://localhost:8080/engine');
  }

  getLocations()
  {
    console.log("test call");
    return this.httpClient.get<Main[]>('http://localhost:8080/location');
  }
}
