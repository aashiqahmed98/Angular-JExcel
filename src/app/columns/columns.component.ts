import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as jexcel from 'jexcel';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.css']  
})
export class ColumnsComponent implements OnInit,AfterViewInit {
  
  constructor() {}
  
  ngOnInit(): void {}
  
  ngAfterViewInit() {
   jexcel(document.getElementById("spreadsheet"), {
      data: [
        [
          'Title1','type2',100,'square','MASK1','.','options'
        ],
      
      ],
      columns: [
        { type: "text", width: "100px",title:"Column Title" },
        { type: "dropdown", width: "150px",title:"Column Type",source:['type1','type2'] },
        { type: "numeric", width: "100px",title:"Width" },
        { type: "dropdown", width: "100px",title:"Render",source:['sqaure','rect'] },
        { type: "text", width: "100px",title:"Mask" },
        { type: "dropdown", width: "100px",title:"Decimal" ,source:['.',',']},
        { type: "dropdown", width: "200px",title:"Datasource",source:['Number of screens', 'Processing capacity above 8 GB ram', 'WFH Option', 'All Applications Whitelisted', 'Ethernet Cable', 'Stable Broadband connection'] ,
         autocomplete:true}
      ],
      
      // The source of the dropdown can also be given as a json file by using the parameter 'url'

        minDimensions: [7, 1],
        contextMenu:function(){}
    
      });
    }
  
  
 }
