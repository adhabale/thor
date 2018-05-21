import { Component, EventEmitter, Output, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'edit-reference-document',
  templateUrl: './edit-reference-document.component.html',
  styleUrls: ['./edit-reference-document.component.css']
})
export class EditReferenceDocumentComponent implements OnDestroy {
  @Output() onSaveEvent = new EventEmitter();
  @Output() onCloseEvent = new EventEmitter();
  @Output() onErrorEvent = new EventEmitter();

  onSave(): void {
    this.onSaveEvent.emit("Document edited successfully");
  }
  onError(): void {
    this.onErrorEvent.emit("Error in editing document");
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

