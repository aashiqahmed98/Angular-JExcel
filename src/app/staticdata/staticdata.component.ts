import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {FormControl} from '@angular/forms';
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
  asset = new FormControl();
  assetlist: string[] = ['Number of screens', 'Processing capacity above 8 GB ram', 'WFH Option', 'All Applications Whitelisted', 'Ethernet Cable', 'Stable Broadband connection'];

  columnDefs = [
    {field: 'value',header:"Value",filter:true ,sortable:true,width:400}
  ];
  

domLayout='autoHeight' //Auto-Height of rows

rowData:any;

}
