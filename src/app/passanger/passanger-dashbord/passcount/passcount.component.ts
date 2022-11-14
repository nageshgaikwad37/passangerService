import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-passcount',
  templateUrl: './passcount.component.html',
  styleUrls: ['./passcount.component.scss']
})
export class PasscountComponent implements OnInit {
@Input() checked!:number;
@Input() totlepass!:number;
  constructor() { }

  ngOnInit(): void {
  }

}
