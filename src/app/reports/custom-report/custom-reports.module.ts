import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomReportComponent } from '../custom-report/custom-report.component';
import { FormsModule } from '@angular/forms';
import { SaveReportComponent } from '../custom-report/reportGenerate/save-report/save-report.component'
import { GenerateReportComponent } from '../custom-report/reportGenerate/generate-report/generate-report.component'
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CustomReportComponent, SaveReportComponent, GenerateReportComponent]
})
export class CustomReportModule { }
