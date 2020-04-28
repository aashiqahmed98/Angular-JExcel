import { Component } from '@angular/core';
import { INoRowsOverlayAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-gender-renderer',
  template: `
  
    
  `,
})
export class TypeCellRenderer implements INoRowsOverlayAngularComp {
  
  agInit(params): void {
      console.log(params);
   
  }
}
