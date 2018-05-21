import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Import the ButtonsModule
import { HomeComponent } from './home/home.component';
import { ReportsModule } from './reports/reports.module';
import { DashboardComponent } from './dashboard/dashboard.component';

//Import routing
import { AppRouting } from './app.routing';
import { FooterComponent } from './footer/footer.component';

//Import Shared Service
import { StorageService } from './shared/storage/storage.service';
import { SubscriptionRenewalComponent } from './admin/report/subscription-renewal/subscription-renewal.component'
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { TermsOfUseComponent } from './admin/terms-of-use/terms-of-use.component';
import { AnnouncementModule } from './admin/announcement/announcement.module';

import { ReferenceDocumentModule } from './admin/reference-document/reference-document.module';
import { RichTextEditorComponent } from './shared/richTextEditor/richTextEditor.component';
import { LossDataSubmissionModule } from './loss-data-submission/loss-data-submission.module';
import { CommonModule } from '@angular/common';
import { ValidateLossDataSubmissionModule } from './validate-loss-data-submission/validate-loss-data-submission.module';
import { NguiAutoCompleteModule } from './activity-log/autocomplete/auto-complete.module';
// import {AllowDecimalNumberDirective} from './shared/decimal-number.directive'
import{AutocompleteComponent} from './activity-log/auto-complete/auto-complete.component';
import{MultiAutocompleteComponent} from './activity-log/multi-autocomplete/multi-autocomplete.component';
import { RoundPipe } from './shared/filters/round.pipe';
import { NumberPipe } from './shared/filters/number.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        DashboardComponent,
        FooterComponent,
        SubscriptionRenewalComponent,
        ActivityLogComponent,
        TermsOfUseComponent,
        RichTextEditorComponent,
        // AllowDecimalNumberDirective,
        AutocompleteComponent,
        MultiAutocompleteComponent,
        RoundPipe,
        NumberPipe
        
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRouting,
        ReportsModule,
        AnnouncementModule,
        ReferenceDocumentModule,
        LossDataSubmissionModule,
        ValidateLossDataSubmissionModule,
        NguiAutoCompleteModule
        
    ],
    providers: [StorageService],
    bootstrap: [AppComponent]
})
export class AppModule { }