
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { ReferenceDocumentComponent } from './reference-document.component';
import { UploadReferenceDocumentComponent } from './upload-edit/upload-reference-document/upload-reference-document.component';
import { EditReferenceDocumentComponent } from './upload-edit/edit-reference-document/edit-reference-document.component';


const referenceDocumentRoutes: Routes = [
    {
    path: '', component: ReferenceDocumentComponent,
    children: [
            {
                path: 'uploadRef', component: UploadReferenceDocumentComponent
            },
            {
                path: 'editRef', component: EditReferenceDocumentComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(referenceDocumentRoutes)],
    exports: [RouterModule]
})

export class ReferenceDocumentRoutingModule { }
