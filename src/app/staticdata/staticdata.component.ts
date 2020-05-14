import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jexcel from 'jexcel';
import {FormControl} from '@angular/forms';
import {GetjsonService} from 'src/service/getjson.service';
import {User} from 'src/assets/user';
@Component({
  selector: 'app-staticdata',
  templateUrl: './staticdata.component.html',
  styleUrls: ['./staticdata.component.css']
})

export class StaticdataComponent implements OnInit {

 Array1:User[];
  data: User[];
  rowdata: any;
  constructor(private jsonservice:GetjsonService) {
  //  console.log( jsonservice);
  }    
   
  ngOnInit(): void {
    this.jsonservice.getvaluefromjson().subscribe((res ) => {
      this.data = res
      console.log("Response of JSON: "+this.data);
      
      console.log( "String format of JSON(Stringyfy):"+JSON.stringify(res)); //Gives a single string
      
      }); 
  
        for(let i=0;i<this.data.length;i++){
            this.Array1.push(this.data[i].value);
        }
  console.log(this.Array1);
        this.rowdata=[
          'Only laptop user',
          'Only Dektop user',
          'HVD with desktop',
          'HVD with laptop',
          'Dual assests laptop and desktop'
        ]

    }

  ngAfterViewInit() {
    jexcel(document.getElementById("spreadsheet") ,{
             data:[['Only laptop user'],
              ['Only Dektop user'],
             [ 'HVD with desktop'],
              ['HVD with laptop'],
              ['Dual assests laptop and desktop']],
              
              columns: [
                { title: 'Value', type:'text',width:'300px' },
            ],
            //  minDimensions: [10,1],
            contextMenu:function(){ return null;} ,//making the context menu as empty funciton
            // columnSorting:true,  
          });
        }

  selectedasset:String;
  asset = new FormControl();
  assetlist: string[] = ['Number of screens', 'Processing capacity above 8 GB ram', 'WFH Option', 'All Applications Whitelisted', 'Ethernet Cable', 'Stable Broadband connection'];

   
  // Adding a row on Grid
  gridrowadd(){
    
  }

}
