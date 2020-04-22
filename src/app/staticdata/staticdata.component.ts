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
  //   this.http.get("assets/user.json").subscribe(
  //     data =>{
  //       console.log(data);
  //      this.rowData = data;
  // })

 this.rowData="https://api.jsonbin.io/b/5e9fe554435f5604bb45dce5";
}
  columnDefs = [
    {field: 'name',header:"Name",filter:true},
    {field: 'value',header:"Value",filter:true }
];

rowData:any=[];


}
