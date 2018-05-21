import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriptionComponent } from './subscription.component';
import { ClientInformationComponent } from './client-information/client-information.component';
import { ElinformationComponent } from './elinformation/elinformation.component';
import { UserMaintenanceComponent } from './user-maintenance/user-maintenance.component';
import { AddNewUsersComponent } from './user-maintenance/add-new-users/add-new-users.component';
import { ExistingUsersComponent } from './user-maintenance/existing-users/existing-users.component';

const routes: Routes = [
  { path: '', component: SubscriptionComponent , children: [
            { path: 'clientInfo', component: ClientInformationComponent },
            { path: 'energyLossesInfo', component: ElinformationComponent },
            {
                path: 'userMaintenance', component: UserMaintenanceComponent, children: [
                    { path: 'addNewUsers', component: AddNewUsersComponent },
                    { path: 'existingUsers', component: ExistingUsersComponent },
                    { path: '**', redirectTo: '' },
                ]
            },
            { path: '**', redirectTo: '' },
        ]}
];

export const subscriptionRouting: ModuleWithProviders = RouterModule.forChild(routes);