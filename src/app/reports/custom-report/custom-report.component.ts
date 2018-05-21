import { Component, OnInit } from '@angular/core';
import { SaveReportComponent } from '../custom-report/reportGenerate/save-report/save-report.component'
import { GenerateReportComponent } from '../custom-report/reportGenerate/generate-report/generate-report.component'
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-custom-report',
  templateUrl: './custom-report.component.html',
  styleUrls: ['./custom-report.component.css']
})
export class CustomReportComponent implements OnInit {
  availableFieldsData: Array<any>;
  selectedReport: Array<number> = [];
  // selectedReportsList1: Array<any> = [];
  removedReports: Array<any> = [];
  availableReportsSelected: Array<any> = [];
  isShowSuccess: boolean;
  total: number;
  count: Array<any> = [];
  newReportsListCount: number;

  availableReportList: Array<any>;
  selectedReportsList: Array<any>;
  selectedReports: Array<number>;
  removeSelectedAccounts: Array<number>;

  constructor(private _router : Router) {
    this.availableReportList = new Array<any>();
    this.selectedReportsList = new Array<any>();

    this.availableReportList = [
      //   { name: 'PD', code: 'PD' },
      //   { name: 'PTD', code: 'PTD' },
      //   { name: 'Rating Area', code: 'Rating' },
      //   { name: 'Subcategory', code: 'Subcategory' },
      //   { name: 'Subcategory 2', code: 'Subcategory2' },
      //   { name: 'Total', code: 'Total' },
      //   { name: 'UGBO', code: 'UGBO' },
      //   { name: 'US Location Code', code: 'USLocationCode' },
      //   { name: 'UP/Down/Power', code: 'Up' },
      //   { name: 'Well Details', code: 'WellDetails' },
      //   { name: 'Well Type', code: 'WellType' }
      // ]
      {
        'Id': 1,
        'ReportField': 'Area',
        'ReportId': 212323
      },
      {
        'Id': 2,
        'ReportField': 'BI',
        'ReportId': 232342
      },
      {
        'Id': 3,
        'ReportField': 'CAR/OP',
        'ReportId': 453412
      },
      {
        'Id': 4,
        'ReportField': 'Category1',
        'ReportId': 124512
      },
      {
        'Id': 5,
        'ReportField': 'Cause',
        'ReportId': 212358
      },
      {
        'Id': 6,
        'ReportField': 'Country',
        'ReportId': 232342,
      },
      {
        'Id': 7,
        'ReportField': 'Report',
        'ReportId': 453412
      },
      {
        'Id': 8,
        'ReportField': 'Depth at Loss(feet)',
        'ReportId': 87806446

      },
      {
        'Id': 81,
        'ReportField': 'Event',
        'ReportId': 8046

      },
      {
        'Id': 9,
        'ReportField': 'GOM Area',
        'ReportId': 878006446

      },
      {
        'Id': 10,
        'ReportField': 'Land/Offshore',
        'ReportId': 87811446

      },
      {
        'Id': 11,
        'ReportField': 'Location',
        'ReportId': 878546546446

      },
      {
        'Id': 12,
        'ReportField': 'Loss Type',
        'ReportId': 87654646446

      },
      {
        'Id': 13,
        'ReportField': 'OEE',
        'ReportId': 87854654646446

      },
      {
        'Id': 14,
        'ReportField': 'PD',
        'ReportId': 87654646446

      },
      {
        'Id': 15,
        'ReportField': 'PTD',
        'ReportId': 3333

      },
      {
        'Id': 16,
        'ReportField': 'Rating Area',
        'ReportId': 45

      },
    ]
  }
  ngOnInit() {
    this.newReportsListCount = 0;
    $(document).ready(function () {
      $('input[type="button"]').click(function () {
        var $op = $('#a option:selected'),
          $this = $(this);
        if ($op.length) {
          ($this.val() == 'Move Up') ?
            $op.first().prev().before($op) :
            $op.last().next().after($op);
        }
      });
    });
    $(document).ready(function () {
      $('input[type="button"]').click(function () {
        var $op = $('#b option:selected'),
          $this = $(this);
        if ($op.length) {
          ($this.val() == 'Move Up') ?
            $op.first().prev().before($op) :
            $op.last().next().after($op);
        }
      });
    });
    this.isShowSuccess = false;
    this.selectedReportsList.length = 0;
    this.availableReportsSelected.length = 0;
  }
  onReset() {
    this.isShowSuccess = false;
    // this.availableReportsSelected = [];
    this.selectedReportsList = [];
  }

  openSearchModal() {
    document.getElementById("searchModal").click();
  }
  saveSearchCriteria() {
    document.getElementById("saveCriteriaModal").click();
    // $(window).scrollTop(0);
  }
  onSaveCriteria() {
    document.getElementById("saveCriteriaModalBtn").click();
    $(window).scrollTop(0);
  }
  openReportsPage() {
    this._router.navigateByUrl('/home')
  }
  onSuccessfulSave() {
    this.isShowSuccess = true;
  }
  onGenerateReport() {
    document.getElementById("reportSearchModalBtn").click();
  }
  openSummary() {
    document.getElementById("summaryHeading").click();
  }

  onChangeState() {
    this.newReportsListCount = this.availableReportsSelected.length + this.selectedReportsList.length;
  }
  //addReportsOld: method for not removing fields from Available Reports //
  /*addReportsOld() {
    this.isShowSuccess = false;
    var reports = Array.apply(null, this.availableReportsSelected);
    this.availableFieldsData.forEach(c => {
      for (let i = 0; i < reports.length; i++) {
        if (reports[i] === c.code) {
          if (this.selectedReportsList.indexOf(c.name) == -1) {
            this.selectedReportsList.push(c.name);
            console.log(this.availableReportsSelected);
            
          }
        }
      }
    })
  }*/

  getReportIndexSelectedReport(rId: number): number {
    return this.availableReportList.findIndex((report) => report.Id == rId);
  }

  getReportindexRemovedList(rId: number): number {
    return this.selectedReportsList.findIndex((report) => report.Id == rId);
  }
  addReports() {
    this.availableReportsSelected.forEach((rId) => {
      let index = this.getReportIndexSelectedReport(rId);
      if (index !== -1) {
        let account: Account = this.availableReportList[index];
        this.selectedReportsList.push(account);
        this.availableReportList.splice(index, 1);
      }
    });
  }
  removeReports() {
    this.removeSelectedAccounts.forEach((rId) => {
      let index = this.getReportindexRemovedList(rId);
      if (index !== -1) {
        let account: Account = this.selectedReportsList[index];
        this.availableReportList.push(account);
        this.selectedReportsList.splice(index, 1);
      }

    });

  }
}
