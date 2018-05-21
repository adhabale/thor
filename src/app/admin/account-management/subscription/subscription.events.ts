import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class SubscriptionEventEmiter {
    EnergyLossesEvent: EventEmitter<any> = new EventEmitter();
    UserMaintenanceEventFromSearch: EventEmitter<any> = new EventEmitter();
    UserMaintenanceEventFromAdd: EventEmitter<any> = new EventEmitter();
    ActiveSubscription: EventEmitter<any> = new EventEmitter();
}