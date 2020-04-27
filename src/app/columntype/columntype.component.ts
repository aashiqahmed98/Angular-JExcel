import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-columntype',
  templateUrl: './columntype.component.html',
  styleUrls: ['./columntype.component.css']
})
export class ColumntypeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  columnDefs = [
    {field: 'id',header:'Id' ,width:50},
    {field: 'name',header:'Name',width:150},
    {field: 'active',header:'Active?',width:100,editable:true,checkboxSelection: true} 
  ];
  rowData=[
    {id:1,name:'String',active:''},
    {id:2,name:'Dropdown',active:''},
    {id:3,name:'Autocomplete',active:''},
    {id:4,name:'Date',active:''},
    {id:5,name:'Image',active:''}
    
  ];
  domLayout='autoHeight'

}
