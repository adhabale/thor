import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'loss-data-submission',
  templateUrl: './loss-data-submission.component.html',
  styleUrls: ['./loss-data-submission.component.css']
})
export class LossDataSubmissionComponent implements OnInit {

  constructor(private router: Router) { }
  selectedLossType: string;
  ngOnInit() {
    this.router.navigate(['/loss-data-submission/loss-data-submission-history']);
  }
  openNewSubmissionModal() {
    document.getElementById('openSelectionModal').click();
  }
  onLossTypeSelected() {
    switch (this.selectedLossType) {
      case "UP":
        this.router.navigate(['/loss-data-submission/upstream-loss']);
        break;
      case "DOWN":
        this.router.navigate(['/loss-data-submission/downstream-loss']);
        break;
      case "POWER":
        this.router.navigate(['/loss-data-submission/power-loss']);
        break;
    }
  }
}
