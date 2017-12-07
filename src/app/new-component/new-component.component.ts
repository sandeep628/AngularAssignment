import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

  public showClass=true;
  public title = "Class and Style Binding Example";
  public trueOrFalse = false;
  public arr = ["java", "javaScript","angularJS"];

  onClickB(){

    if(this.trueOrFalse)
    this.trueOrFalse = false;
    else this.trueOrFalse = true;
  }
  public stringInput = "";
  public example="one way binding";
  public firstName ="";
  public lastName = "";
onKeyUp(event : KeyboardEvent)
{
  this.stringInput = (<HTMLInputElement>event.target).value ;
  console.log(this.stringInput);
}

public value = "";
onEnter(value1: string)
{
  this.value = value1;
}
  constructor() { }

  ngOnInit() {
  }

}
