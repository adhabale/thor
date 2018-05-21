import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverallReportComponent } from './overall-report/overall-report.component';
import { OeeReportComponent } from './oee-report/oee-report.component';
// import { CustomReportComponent } from './custom-report/custom-report.component';
import { LossDetailsReportComponent } from './loss-details-report/loss-details-report.component';
import { FormsModule } from '@angular/forms';
import { CustomReportModule } from './custom-report/custom-reports.module'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomReportModule
  ],
  declarations: [OverallReportComponent, OeeReportComponent,LossDetailsReportComponent]
})
export class ReportsModule { }
