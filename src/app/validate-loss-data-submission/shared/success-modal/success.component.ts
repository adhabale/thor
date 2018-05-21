import { Component, EventEmitter, Output, Input } from '@angular/core';
 import { Router } from '@angular/router';

@Component({
    selector: 'success-modal',
    templateUrl: './success.component.html',
    styleUrls: ['./success.component.css']
})
export class SuccessModalComponent {

     constructor(private router : Router){
     }
    @Output() onYesEvent = new EventEmitter();

    onYes(): void {
        this.onYesEvent.emit();
         this.router.navigate(['validate-loss-data-submission/validation-list']);

    }
}
