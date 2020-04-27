import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-staticdata',
  templateUrl: './staticdata.component.html',
  styleUrls: ['./staticdata.component.css']
})
export class StaticdataComponent implements OnInit {
public rowModelType;
private gridApi; 
  constructor(private http:HttpClient) {
  // this.rowModelType='serverSide';   
  }    
   
  ngOnInit(): void {
   
    
 this.rowData=this.http.get("https://raw.githubusercontent.com/AashiqinCode/Angular-JExcel/Aashiq/src/assets/user.json");
}

  selectedasset:String;
  asset = new FormControl();
  assetlist: string[] = ['Number of screens', 'Processing capacity above 8 GB ram', 'WFH Option', 'All Applications Whitelisted', 'Ethernet Cable', 'Stable Broadband connection'];

  columnDefs = [
    {field: 'value',header:"Value",filter:true ,sortable:true,width:300,editable:true}
  ];
  rowData:any;
  domLayout='autoHeight' //Auto-Height of rows

  // Adding a row on Grid
  gridrowadd(){
    var selectedRows = this.gridApi.getSelectedNodes();
    if (!selectedRows || selectedRows.length === 0) {
      return;
    }
  }
}
