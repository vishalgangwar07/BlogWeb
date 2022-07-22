import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @Output() parent: EventEmitter<any> = new EventEmitter();
  
  post(value:any, data:any){
    if(data.length<150){
      alert("World Length is Less than 150")
    }
    else if(value.length<1){
      alert("insert Proper Title")
    }
    else{
      this.parent.emit({title:value,desc:data});
    }
   }
   cancel(){
  
   }
  constructor() { }

  ngOnInit(): void {
  }

}
