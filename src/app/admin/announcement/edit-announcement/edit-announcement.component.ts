import { Component, EventEmitter, Output, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'edit-announcement',
  templateUrl: './edit-announcement.component.html',
  styleUrls: ['./edit-announcement.component.css']
})
export class EditAnnouncementComponent implements OnDestroy {

  isStartDateInvalid: boolean;
  isEndDateInvalid: boolean
  startDate: any;
  endDate: any;
  showFlag: boolean = false;
  @Output() onSaveEvent = new EventEmitter();
  @Output() onCloseEvent = new EventEmitter();
  @Output() onErrorEvent = new EventEmitter();

  onSave(): void {
    this.onSaveEvent.emit("Announcement saved successfully");
  }
  onError(): void {
    this.onErrorEvent.emit("Error in creating/saving announcement");
  }

  onClose(): void {
    this.onCloseEvent.emit();
  }
  showExtra() {
    this.showFlag = true;
  }
  ngOnDestroy() {
    this.onSaveEvent.unsubscribe();
    this.onErrorEvent.unsubscribe();
    this.onCloseEvent.unsubscribe();
  }
  setStartDate(startDate: string) {
    this.startDate = startDate;
  }

  setEndDate(endDate: string) {
    this.endDate = endDate;
  }
  checkStartDateFormat(value: boolean) {
    if (value)
      this.isStartDateInvalid = false;
    else
      this.isStartDateInvalid = true;
  }

  checkEndDateFormat(value: boolean) {
    if (value)
      this.isEndDateInvalid = false;
    else
      this.isEndDateInvalid = true;
  }
}
