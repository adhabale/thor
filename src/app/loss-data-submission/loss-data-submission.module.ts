import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LossDataSubmissionRoutingModule } from './loss-data-submission.routing.module';
import { LossDataSubmissionComponent } from './loss-data-submission.component';
import { UpstreamLossComponent } from './upstream-loss/upstream-loss.component';
import { DownstreamLossComponent } from './downstream-loss/downstream-loss.component';
import { PowerLossComponent } from './power-loss/power-loss.component';
import { LossDataSubmissionHistoryComponent } from './loss-data-submission-history/loss-data-submission-history.component';
import { TotalClaimCalculatorComponent } from './shared/total-claim-calculator/total-claim-calculator.component';
import { SuccessConfirmationModalComponent } from './shared/success-confirmation/success-confirmation.component';
import { LossDataSubmissionModel } from './shared/models/lossDataSubmission.model';
import {AllowDecimalNumberDirective} from '../shared/decimal-number.directive'


@NgModule({
  declarations: [
    LossDataSubmissionComponent,
    UpstreamLossComponent,
    DownstreamLossComponent,
    PowerLossComponent,
    LossDataSubmissionHistoryComponent,
    TotalClaimCalculatorComponent,
    SuccessConfirmationModalComponent,
    AllowDecimalNumberDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    LossDataSubmissionRoutingModule,
    
  ],
  exports:[
    SuccessConfirmationModalComponent
  ],
  providers:[LossDataSubmissionModel]
})
export class LossDataSubmissionModule { }
