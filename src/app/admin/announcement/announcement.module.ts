import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AnnouncementComponent } from './announcement.component';
import { CreateAnnouncementComponent } from './create-announcement/create-announcement.component';
import { EditAnnouncementComponent } from './edit-announcement/edit-announcement.component';
import { ConfirmationModalComponent } from '../../shared/confirmation-modal/confirmation-modal.component';
import { PaginationComponent } from '../../shared/pagination/pagination.component';
import { AnnouncementModel } from './models/announcement.model';
import { AnnouncementRoutingModule } from './announcement.routing.module';
import { DatepickerComponent} from '../../shared/datepicker/datepicker.component';
@NgModule({
    declarations: [
        AnnouncementComponent,
        CreateAnnouncementComponent,
        EditAnnouncementComponent,
        ConfirmationModalComponent,
        PaginationComponent,
        DatepickerComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        AnnouncementRoutingModule    
    ],
    exports: [
        ConfirmationModalComponent,
        PaginationComponent,
        DatepickerComponent
    ],
    providers: [AnnouncementModel]
})

export class AnnouncementModule { }