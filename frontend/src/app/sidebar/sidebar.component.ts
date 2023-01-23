import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private _route: Router
  ) { }

  ngOnInit(): void {
  }
  
  hayNiebla(){
  	return this.http.get<boolean>('http://localhost:8001/');
  }

}


