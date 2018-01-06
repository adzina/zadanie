import { Component, OnInit } from '@angular/core';
import {Observable,Observer} from 'rxjs/Rx';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent{
  link:string;
  repo:string;
  constructor(private http:Http) {
  }
	getLink(){
	   this.http.get('http://localhost:8081/scrape')
     .map(res=>res.json())
     .subscribe(
       data=>{
       	 this.link="https://github.com/allegro/"+data.repo;
         this.repo=data.repo;
         console.log(this.link);
     })
	}
}
