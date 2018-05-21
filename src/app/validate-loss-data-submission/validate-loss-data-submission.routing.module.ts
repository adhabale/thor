import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { ValidateLossDataSubmissionComponent } from './validate-loss-data-submission.component';
import { ValidationListComponent } from './validation-list/validation-list.component';
import { ValidateLossDataFormComponent } from './validate-LossDataForm/validate-LossDataForm.component';

const ValidateLossDataSubmissionRoutes: Routes = [
    {
        path: 'validate-loss-data-submission', component: ValidateLossDataSubmissionComponent, children: [
            { path : 'validation-list', component : ValidationListComponent},
            { path: 'validate-LossDataForm', component: ValidateLossDataFormComponent },
            { path: '**', redirectTo: '' },
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(ValidateLossDataSubmissionRoutes)],
    exports: [RouterModule]
})

export class ValidateLossDataSubmissionRoutingModule { }
