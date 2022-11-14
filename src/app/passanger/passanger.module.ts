import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassService } from '../service/pass.service';
import { PassangerDashbordComponent } from './passanger-dashbord/passanger-dashbord.component';
import { PasscountComponent } from './passanger-dashbord/passcount/passcount.component';
import { PassDetailsComponent } from './passanger-dashbord/pass-details/pass-details.component';



@NgModule({
  declarations: [
    PassangerDashbordComponent,
    PasscountComponent,
    PassDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[PassangerDashbordComponent],
  providers: [PassService]
})
export class PassangerModule { }
