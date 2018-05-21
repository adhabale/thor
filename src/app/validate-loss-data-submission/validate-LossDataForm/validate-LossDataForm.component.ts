import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';
import { Router } from '@angular/router';
import { LossDataSubmissionModel } from '../shared/models/lossDataSubmission.model';
import { NotificationMessage } from '../../shared/entity/notification-message';
import { ConfirmationModal } from '../../admin/announcement/entities/confirmation-modal';
@Component({
  selector: 'validate-LossDataForm',
  templateUrl: './validate-LossDataForm.component.html',
  styleUrls: ['./validate-LossDataForm.component.css']
})
export class ValidateLossDataFormComponent implements OnInit {
  selectedLossType: string;
  subscriptionId: number;
  subscriptionStatus: string;
  notificationMessage: NotificationMessage = new NotificationMessage();
  confirmationModal: ConfirmationModal;
  pd:any;
  oee:any;
  status:string;

  constructor(private router: Router, private lossDataSubmissionModel: LossDataSubmissionModel) {

    this.confirmationModal = new ConfirmationModal();
    this.confirmationModal.headerMessage = '';
    this.confirmationModal.bodyMessage = '';
  }

  // @Output() onSaveEvent = new EventEmitter();
  // @Output() onCloseEvent = new EventEmitter();
  // @Output() onErrorEvent = new EventEmitter();
  // onSave(): void {
  //   this.onSaveEvent.emit("Announcement saved successfully");
  // }
  // onError(): void {
  //   this.onErrorEvent.emit("Error in creating/saving announcement");
  // }

  // onClose(): void {
  //   this.onCloseEvent.emit();
  // }
  ngOnInit() {
    this.selectedLossType = this.lossDataSubmissionModel.getValidationFormType();
    this.subscriptionId = this.lossDataSubmissionModel.getSubscriptionID();
    this.subscriptionStatus = this.lossDataSubmissionModel.getStatus();
  }
  onBackToHistory() {
    //document.getElementById('successButton').click();
       this.router.navigate(['/validate-loss-data-submission/validation-list']);
  }
  onSubmit(status) {

    document.getElementById('successButton').click();
    this.status=status;
  
      }
  public upStreamLossValidateData = [
    {
      "day": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
      "month": ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      "year": ["1972", "1973", "1974", "1975", "1976", "1977", "1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989"],
      "category1": [{ "id": 0, "name": "MOPU" }, { "id": 1, "name": "Pipeline" }, { "id": 3, "name": "Plant Platform" }, { "id": 4, "name": "Rig" }, { "id": 5, "name": "Vessel(Energy Related)" }, { "id": 5, "name": "Others" }],
      "category2": [{ "id": 0, "name": "Crane/Pipeline Barge" }, { "id": 1, "name": "Drillship" }, { "id": 3, "name": "FDPSO" }, { "id": 4, "name": "Land Rig" }, { "id": 5, "name": "Platform Rig" }],
      "category3": [{ "id": 0, "name": "Ballast Tanks" }, { "id": 1, "name": "Boiler" }, { "id": 3, "name": "Cable" }, { "id": 4, "name": "Compressor" }, { "id": 5, "name": "Cooling System" }, { "id": 6, "name": "Crane" }],
      "landOffshore": [{ "id": 0, "name": "Land" }, { "id": 1, "name": "Offshore" }],
      "OperationalStatus": [{ "id": 0, "name": "Construction All Risks" }, { "id": 1, "name": "Decommisioning" }, { "id": 3, "name": "Drilling Maintenance" }],
      "countries": [{ "id": 0, "name": "Afghanistan" }, { "id": 1, "name": "Algeria" }, { "id": 3, "name": "Austria" }],
      "area": [{ "id": 0, "name": "Africa" }, { "id": 1, "name": "Australasia" }, { "id": 3, "name": "Carribean" }, { "id": 4, "name": "Eastern Europe" }, { "id": 5, "name": "Europe" }, { "id": 6, "name": "Far East" }, { "id": 6, "name": "Middle East" }, { "id": 7, "name": "North America" }, { "id": 8, "name": "South America" }],
      "cause": [{ "id": 0, "name": "Anchor/Jacking/trawl" }, { "id": 1, "name": "Blowout" }, { "id": 3, "name": "Capsize" }],
      "type": [{ "id": 0, "name": "Gas" }, { "id": 1, "name": "O&G" }, { "id": 3, "name": "Oil" }, { "id": 4, "name": "Sulph" }, { "id": 5, "name": "Water" }],
      "Dev": [{ "id": 0, "name": "Developmental" }, { "id": 1, "name": "Exploratory" }],
      "status": [{ "id": 0, "name": "[unknown]" }, { "id": 1, "name": "Abandoned" }, { "id": 3, "name": "Completion" }, { "id": 4, "name": "Drilling" }, { "id": 5, "name": "Plugging" }],
      "shellWell": [{ "id": 0, "name": "Either" }, { "id": 1, "name": "Y" }, { "id": 3, "name": "N" }],
      "UGBlowout": [{ "id": 0, "name": "Either" }, { "id": 1, "name": "Y" }, { "id": 3, "name": "N" }],
      "asset": [{ "id": 0, "name": "1" }, { "id": 1, "name": "2" }, { "id": 2, "name": "3" }, { "id": 3, "name": "4" }],
      "tow": [{ "id": 0, "name": "[?]" }, { "id": 1, "name": "Dty" }, { "id": 2, "name": "Wet" }],
      "depCat": [{ "id": 0, "name": "A" }, { "id": 1, "name": "B" }, { "id": 2, "name": "C" }, { "id": 3, "name": "D" }],
      "fieldUnit": [{ "id": 0, "name": "Option1" }, { "id": 1, "name": "Option2" }, { "id": 2, "name": "Option3" }, { "id": 3, "name": "Option4" }],
      "assetDescription": [{ "id": 0, "name": "Option1" }, { "id": 1, "name": "Option2" }, { "id": 2, "name": "Option3" }, { "id": 3, "name": "Option4" }],
      "statusDetails": [{ "id": 0, "name": "Approved" }, { "id": 1, "name": "Rejected" }, { "id": 2, "name": "On-Hold" }],
      "GomArea": [{ "id": 0, "name": "Alammios Canyon" }, { "id": 1, "name": "Atwater Valley" }, { "id": 2, "name": "Bay Marchand" }],
      "ratingArea": [{ "id": 0, "name": "1" }, { "id": 1, "name": "2" }, { "id": 2, "name": "3" }],
      "adjIndividual": [{ "id": 0, "name": "Option1" }, { "id": 1, "name": "Option2" }, { "id": 2, "name": "Option3" }],
      "usLocationCode": [{ "id": 0, "name": "E-NM" }, { "id": 1, "name": "N-LOUIS" }, { "id": 2, "name": "S-LOUIS" }],
      "willis": [{ "id": 0, "name": "Option1" }, { "id": 1, "name": "Option2" }, { "id": 2, "name": "Option3" }],
      "event": [{ "id": 0, "name": "Hurricane Alex" }, { "id": 1, "name": "Hurricane Alicia" }, { "id": 2, "name": "Hurricane Bonnie" }]
    }
  ]

  onNo() {
    this.router.navigate(['validate-loss-data-submission/validation-list']);
  }
  onYes(message :string) {
    this.notificationMessage.successMessage = message;
    document.getElementById('successModalButton').click();
  }
  onChange(){

  }
  // inFeet:number;
  // inMeters:number;
  // res:number
  // onConvert(value:number){
  // this.res=value/3.2808;
  // }

}
