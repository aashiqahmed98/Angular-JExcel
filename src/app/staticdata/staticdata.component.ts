import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-staticdata',
  templateUrl: './staticdata.component.html',
  styleUrls: ['./staticdata.component.css']
})
export class StaticdataComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  
 this.rowData=this.http.get("https://raw.githubusercontent.com/AashiqinCode/Angular-JExcel/Aashiq/src/assets/user.json");
}
  columnDefs = [
    {field: 'name',header:"Name",filter:true ,sortable:true},
    {field: 'value',header:"Value",filter:true ,sortable:true}
];

rowData:any;
}
