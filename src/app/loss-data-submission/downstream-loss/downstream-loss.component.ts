import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LossDataSubmissionModel } from '../shared/models/lossDataSubmission.model';

@Component({
  selector: 'downstream-loss',
  templateUrl: './downstream-loss.component.html',
  styleUrls: ['./downstream-loss.component.css']
})
export class DownstreamLossComponent implements OnInit {

  constructor(private router: Router, private lossDataSubmissionModel: LossDataSubmissionModel) { }
  readOnlyFlag: boolean;
  ngOnInit() {
    this.readOnlyFlag = this.lossDataSubmissionModel.getReadOnlyFlag();
  }
  onBackToHistory() {
    this.router.navigate(['loss-data-submission/loss-data-submission-history']);
  }
  onSubmit() {
    document.getElementById('successButton').click();
  }
  public downStreamLossData = [
    {
      "day": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
      "month": ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      "year": ["1972", "1973", "1974", "1975", "1976", "1977", "1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989"],
      "category1": [{ "id": 0, "name": "MOPU" }, { "id": 1, "name": "Pipeline" }, { "id": 3, "name": "Plant Platform" }, { "id": 4, "name": "Rig" }, { "id": 5, "name": "Vessel(Energy Related)" }, { "id": 5, "name": "Others" }],
      "category2": [{ "id": 0, "name": "Crane/Pipeline Barge" }, { "id": 1, "name": "Drillship" }, { "id": 3, "name": "FDPSO" }, { "id": 4, "name": "Land Rig" }, { "id": 5, "name": "Platform Rig" }],
      "category3": [{ "id": 0, "name": "Ballast Tanks" }, { "id": 1, "name": "Boiler" }, { "id": 3, "name": "Cable" }, { "id": 4, "name": "Compressor" }, { "id": 5, "name": "Cooling System" }, { "id": 6, "name": "Crane" }],
      "LandOffshore": [{ "id": 0, "name": "Land" }, { "id": 1, "name": "Offshore" }],
      "OperationalStatus": [{ "id": 0, "name": "Construction All Risks" }, { "id": 1, "name": "Decommisioning" }, { "id": 3, "name": "Drilling Maintenance" }],
      "countries": [{ "id": 0, "name": "Afghanistan" }, { "id": 1, "name": "Algeria" }, { "id": 3, "name": "Austria" }],
      "area": [{ "id": 0, "name": "Africa" }, { "id": 1, "name": "Australasia" }, { "id": 3, "name": "Carribean" }, { "id": 4, "name": "Eastern Europe" }, { "id": 5, "name": "Europe" }, { "id": 6, "name": "Far East" }, { "id": 6, "name": "Middle East" }, { "id": 7, "name": "North America" }, { "id": 8, "name": "South America" }],
      "cause": [{ "id": 0, "name": "Anchor/Jacking/trawl" }, { "id": 1, "name": "Blowout" }, { "id": 3, "name": "Capsize" }],
    }
  ]
}
