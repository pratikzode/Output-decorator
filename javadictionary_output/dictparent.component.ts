import { Component, Input } from "@angular/core";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Component({
    selector: 'dictparent-comp',
    templateUrl: './dictparent.component.html',
    styles:['div{background-color:greenyellow}']
    
  })
  export class DictParentComponent{
     word:string="";
     lst:string[]=[];
     imagepath:string="";

     arr:any[]=[
      {"topic":'Angular',"desc":'ANgular is used to develop SPA',"syllabus":['Angular topic1','Angular topic2','Angular topic3','Angular topic4']},
      {"topic":'Python',"desc":'Python is the most popular language',"syllabus":['Py topic1','Py topic2','Py topic3','Py topic4']},
      {"topic":'Java',"desc":'Java is simple',"syllabus":['Java topic1','Java topic2','Java topic3','Javatopic4']},
      {"topic":'Spring',"desc":'Spring is used to develop Enterprise Applications',"syllabus":['Springtopic1','Spring topic2','Spring topic3','Spring topic4']}
      ];  


      onwordchange(str:string):void{
        for(let i=0;i<this.arr.length;i++){
          if(str==this.arr[i].topic){
            this.word=this.arr[i].desc;
            this.lst=this.arr[i].syllabus;
            this.imagepath="assets/images/"+str+".jpg";
          }
        }
      }
    }