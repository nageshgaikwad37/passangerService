import { Component, Input, OnInit } from '@angular/core';
import { Ipass } from 'src/app/model/model';

@Component({
  selector: 'app-pass-details',
  templateUrl: './pass-details.component.html',
  styleUrls: ['./pass-details.component.scss']
})
export class PassDetailsComponent implements OnInit {
 @Input() passObj!:Ipass;
 public flag:boolean= true;
  constructor() { }

  ngOnInit(): void {
  }

  onclick(){
    this.flag = !this.flag
  }
  onkeyUp(event:Event){
    this.passObj.fullname = (<HTMLInputElement> event.target).value
  }
}
