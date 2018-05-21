import { Component, EventEmitter, Output, Input,DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import{SuccessModalComponent} from "../success-modal/success.component"
@Component({
    selector: 'success-confirmation-modal',
    templateUrl: './success-confirmation.component.html',
    styleUrls: ['./success-confirmation.component.css']
})
export class SuccessConfirmationModalComponent implements DoCheck  {


    constructor(private router : Router){
    }
    @Output() onYesEvent = new EventEmitter();
    @Output() onNoEvent = new EventEmitter();
    @Input() status;
    statusName:string;


    ngDoCheck(): void {
      if(this.status=="Approved"){
        this.statusName="approve";
      }
    else if(this.status=="Rejected"){
        this.statusName="reject";
    }
    else if(this.status=="On-Hold"){
        this.statusName="put on hold";
    }
      }

    onYes(): void {
        this.onYesEvent.emit('Success');
    }
    onNo(): void{
        this.onNoEvent.emit();
        this.router.navigate(['validate-loss-data-submission/validation-list']);
    }
}
