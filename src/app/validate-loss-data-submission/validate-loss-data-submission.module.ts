import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ValidateLossDataSubmissionRoutingModule } from './validate-loss-data-submission.routing.module';
import { ValidateLossDataSubmissionComponent } from './validate-loss-data-submission.component';
import { TotalClaimCalculatorComponent } from './shared/total-claim-calculator/total-claim-calculator.component';
import { SuccessConfirmationModalComponent } from './shared/success-confirmation/success-confirmation.component';
import { LossDataSubmissionModel } from './shared/models/lossDataSubmission.model';
import { ValidationListComponent } from './validation-list/validation-list.component';
import { ValidateLossDataFormComponent } from './validate-LossDataForm/validate-LossDataForm.component';
import { SuccessModalComponent } from './shared/success-modal/success.component';


@NgModule({
  declarations: [
    ValidateLossDataSubmissionComponent,
    ValidationListComponent,
    TotalClaimCalculatorComponent,
    SuccessConfirmationModalComponent,
    ValidateLossDataFormComponent,
    SuccessModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ValidateLossDataSubmissionRoutingModule
  ],
  exports:[
    SuccessConfirmationModalComponent
  ],
  providers:[LossDataSubmissionModel]
})
export class ValidateLossDataSubmissionModule { }
