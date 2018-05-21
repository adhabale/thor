import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReferenceDocumentComponent } from './reference-document.component';
import { UploadReferenceDocumentComponent } from './upload-edit/upload-reference-document/upload-reference-document.component';
import { EditReferenceDocumentComponent } from './upload-edit/edit-reference-document/edit-reference-document.component';
import { RouterModule } from '@angular/router';
import { ReferenceDocumentRoutingModule } from './reference-document.routing.module';
import { AnnouncementModule } from '../announcement/announcement.module';
import { ReferenceDocumentModel } from './models/referenceDocument.model';
@NgModule({
    declarations: [
        ReferenceDocumentComponent,
        UploadReferenceDocumentComponent,
        EditReferenceDocumentComponent
    ],
    imports: [
        CommonModule,        
        FormsModule,
        RouterModule,
        ReferenceDocumentRoutingModule,
        AnnouncementModule          
    ],
    providers :[ReferenceDocumentModel]
})

export class ReferenceDocumentModule { }