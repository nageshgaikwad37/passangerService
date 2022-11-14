import { Component, OnInit } from '@angular/core';
import { Ipass } from 'src/app/model/model';
import { PassService } from 'src/app/service/pass.service';

@Component({
  selector: 'app-passanger-dashbord',
  templateUrl: './passanger-dashbord.component.html',
  styleUrls: ['./passanger-dashbord.component.scss']
})
export class PassangerDashbordComponent implements OnInit {
  public totlepass!:Ipass[];
  public checkIncount!:number;
  constructor(private passanger:PassService) { }

  ngOnInit(): void {
    // console.log(this.passanger.passengers);
    this.totlepass = this.passanger.passengers;
    this.checkIncount = this.passanger.passengers.filter(pass => pass.checkedIn).length
  }

  onRemove(eve:number){
     this.totlepass.forEach((ele,index) =>{
      if(ele.id === eve){
        this.totlepass.splice(index,1)
      }
     })
    this.checkIncount = this.passanger.passengers.filter(pass => pass.checkedIn).length

     
  }

}
