import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { TermsOfUseComponent } from './admin/terms-of-use/terms-of-use.component';
import { CustomReportComponent } from './reports/custom-report/custom-report.component';
const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'activity-log', component: ActivityLogComponent },
    { path: 'subscription', loadChildren: 'app/admin/account-management/subscription/subscription.module#SubscriptionModule' },
    { path: 'search', loadChildren: 'app/search/search.module#SearchModule' },
    { path: 'loss-data-submission', loadChildren: 'app/loss-data-submission/loss-data-submission.module#LossDataSubmissionModule' },
    { path: 'validate-loss-data-submission', loadChildren: 'app/validate-loss-data-submission/validate-loss-data-submission.module#ValidateLossDataSubmissionModule' },
    { path: 'announcement', loadChildren: 'app/admin/announcement/announcement.module#AnnouncementModule' },
    { path: 'referenceDocuments', loadChildren: 'app/admin/reference-document/reference-document.module#ReferenceDocumentModule' },
    { path: 'customReports', component: CustomReportComponent },
    { path: 'termsOfUse', component: TermsOfUseComponent }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);