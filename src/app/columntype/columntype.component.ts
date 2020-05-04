import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {FormControl} from '@angular/forms';
import * as jexcel from 'jexcel';
@Component({
  selector: 'app-columntype',
  templateUrl: './columntype.component.html',
  styleUrls: ['./columntype.component.css']
})
export class ColumntypeComponent implements OnInit {
  
  constructor() { }

  data = [
    [1, 'String', ''],
    [2,'Dropdown',''],
    [3, 'AutoComplete', ''],
    [4,'Date',''],
    [5,'Image','']
  ];
  ngOnInit(): void {  }
    
  ngAfterViewInit() {
    jexcel(document.getElementById("spreadsheet") ,{
      data: this.data,
        columns: [
          { title: 'ID', type:'numeric',width:100 },
          { title: 'Name',type:'text', width: '100' },
          { title: 'Active?',type:'checkbox' ,width: 100 }
      ],
      minDimensions: [3,5],
      contextMenu:function(){return null;} ,//making the context menu as empty funciton
      columnSorting:true,


    });
  }
}
