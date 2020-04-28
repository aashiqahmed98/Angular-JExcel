import { Component, OnInit } from '@angular/core';

import { TypeCellRenderer } from './type-cell-renderer.component';

import {agRichSelectCellEditor} from '@ag-grid-enterprise/rich-select';
@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.css']  
})
export class ColumnsComponent implements OnInit {
public frameworkComponents;

  constructor() { 
  this.frameworkComponents = { typeCellRenderer: TypeCellRenderer };
  }
  ngOnInit(): void {
  }

  columnDefs = [
    {field: 'title',header:"Column Title",sortable:true,width:100,editable:true},
    {field: 'type',header:"Column Type",filter:true ,sortable:true,width:100,editable:true,
  
    cellRenderer: 'typeCellRenderer',
    cellEditor: 'agRichSelectCellEditor',
    cellEditorParams: {
      cellHeight: 40,
      values: ['Type1', 'Type2'],
      cellRenderer: 'typeCellRenderer',
    },
  
  },
    {field: 'width',header:"Width",sortable:true,width:80,editable:true},
    {field: 'render',header:"Render",sortable:true,width:100,editable:true},
    {field: 'mask',header:"Mask",filter:true ,sortable:true,width:100,editable:true},
    {field: 'decimal',header:"Decimal",sortable:true,width:90,editable:true},
    {field: 'datasource',header:"DataSource",filter:true ,sortable:true,width:250,editable:true}

  ];
rowData=[
  {title:'title1',type:'some',width:'10',render:'square',mask:'some',decimal:'.',datasource:'WFH'}
];
  domLayout='autoHeight' //Auto-Height of rows

  onRowEditingStarted($event) {
    console.log('never called - not doing row editing');
}
}
