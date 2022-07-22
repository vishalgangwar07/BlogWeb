import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlogWeb';
  Current='Home';

  Array: any =[];


  Crea(){
    this.Current = "Crea";
  }
  Mblog(){
    this.Current="Mblog";
  }
  Home(){
    this.Current = "Home";
  }
  receive(event:any){
    
    this.Array.push(event);
    console.log(event.title);
    console.log(event.desc);
  }
}

