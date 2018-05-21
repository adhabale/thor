import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementComponent } from './announcement.component';
import { CreateAnnouncementComponent } from './create-announcement/create-announcement.component';
import { EditAnnouncementComponent } from './edit-announcement/edit-announcement.component';


const annoucementRoutes: Routes = [
    {
    path: '', component: AnnouncementComponent,
    children: [
            {
                path: 'create', component: CreateAnnouncementComponent
            },
            {
                path: 'edit', component: EditAnnouncementComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(annoucementRoutes)],
    exports: [RouterModule]
})

export class AnnouncementRoutingModule { }
