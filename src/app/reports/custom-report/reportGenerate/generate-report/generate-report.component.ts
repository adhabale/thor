import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent implements OnInit, OnDestroy {
  @Output() onYesEvent = new EventEmitter();
  @Output() onNoEvent = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    this.onYesEvent.unsubscribe();
  }
  onYes(): void {
    this.onYesEvent.emit();
  }
  onNo():void{
    this.onNoEvent.emit();
  }

}
