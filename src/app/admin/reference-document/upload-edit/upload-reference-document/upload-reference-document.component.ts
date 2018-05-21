import { Component, EventEmitter, Output, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'upload-reference-document',
  templateUrl: './upload-reference-document.component.html',
  styleUrls: ['./upload-reference-document.component.css']
})
export class UploadReferenceDocumentComponent implements OnDestroy {
  @Output() onSaveEvent = new EventEmitter();
  @Output() onCloseEvent = new EventEmitter();
  @Output() onErrorEvent = new EventEmitter();

  onSave(): void {
    this.onSaveEvent.emit("Document uploaded successfully");
  }
  onError(): void {
    this.onErrorEvent.emit("Error in uploading document");
  }

  onClose(): void {
    this.onCloseEvent.emit();
  }
  ngOnDestroy() {
    this.onSaveEvent.unsubscribe();
    this.onErrorEvent.unsubscribe();
    this.onCloseEvent.unsubscribe();
  }
}

