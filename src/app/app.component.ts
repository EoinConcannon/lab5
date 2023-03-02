import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';

  count:number = 0;

  onClick(){
    this.count++;
  }

  hiddenVar:boolean = true;

  starClick(){
    if(this.hiddenVar === true){
      this.hiddenVar = false;
    }else{
      this.hiddenVar = true;
    }
  }
}
