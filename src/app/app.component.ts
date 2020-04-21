import { Component,OnInit } from '@angular/core';
import * as jexcel from "jexcel";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");

  }
  title = 'project-jexcel';

  ngAfterViewInit() {
    // The json file is used as string when within quotes and as object without them
    let companies=`[{
      "name":"Aashiq",
      "role":"Dev",
      "age":21,
      "Indian":true,
      "languages":["Tamil","English"]
  
  },
  
  {
      "name":"Muhsin",
      "role":"Dev-Manager",
      "age":50,
      "Indian":true,
      "languages":["Tamil","English","Urdu"]
  }
  ]`
  console.log(JSON.parse(companies)[0].name);
  
  console.log(
      `[{
      "name":"Aashiq",
      "role":"Dev",
      "age":21,
      "Indian":true,
      "languages":["Tamil","English"]
  
  },
  
  {
      "name":"Muhsin",
      "role":"Dev-Manager",
      "age":50,
      "Indian":true,
      "languages":["Tamil","English","Urdu"]
  }
  ]`)

  
    jexcel(document.getElementById("spreadsheet"), {
      data: [{
        "name":"Aashiq",
        "role":"Dev",
        "age":21,
        "Indian":true,
        "languages":["Tamil","English"]
    
    },
    
    {
        "name":"Muhsin",
        "role":"Dev-Manager",
        "age":50,
        "Indian":true,
        "languages":["Tamil","English","Urdu"]
    }
    ],
      columns: [
        { type: "dropdown", width: "80px",title:"Name", source: ["Aashiq","Muhsin"] },
        { type: "text", width: "80px",title:"Role", render: "square" },
        {type: "text", width: "80px",title:"Age", render: "square"},
        {type: "checkbox", width: "80px",title:"Indian", render: "square"},
        {type: "text", width: "80px",title:"Languages", render: "square"}
      ],
      license: '39130-64ebc-bd98e-26bc4',
      minDimensions: [5,5]
    });
  }
  
}

