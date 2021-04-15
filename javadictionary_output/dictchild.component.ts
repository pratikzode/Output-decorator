import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'dictchild-comp',
    templateUrl: './dictchild.component.html',
    styles:['fieldset{background-color:orange}']
    
  })
  export class DictChildComponent{
        searchword:string="";

        //custom event
        @Output() eventObj=new EventEmitter<string>();

        onSearch():void{
            this.eventObj.emit(this.searchword);
        }
  }