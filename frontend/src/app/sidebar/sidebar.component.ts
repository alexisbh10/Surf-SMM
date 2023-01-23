import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const axios = require('axios').default;

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
  
  async hayNiebla(){
    var result = "Error";
    try{
      const response = await axios.get('http://localhost:8001')
      console.log(response)
    }catch(error){
      console.log(error)
    }
  }

}


