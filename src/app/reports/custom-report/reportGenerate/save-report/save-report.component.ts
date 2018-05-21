import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'save-report',
  templateUrl: './save-report.component.html',
  styleUrls: ['./save-report.component.css']
})
export class SaveReportComponent implements OnInit,OnDestroy { 
  @Output() onYesEvent = new EventEmitter();
  constructor() {

  }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    this.onYesEvent.unsubscribe();
}
  // saveSearchCriteria() {
  //   document.getElementById("saveCriteriaModal").click();
  // }
  // saveCriteria() {
  //   document.getElementById("saveCriteriaModal").click();
  // }

  onShowSaveMessage(){
    this.onYesEvent.emit();
  }
}
